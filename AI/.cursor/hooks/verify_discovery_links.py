#!/usr/bin/env python3
"""
Mandatory link verification for RUN_DISCOVERY.
Run every scan before updating opportunities_tracker.md:

  python AI/.cursor/hooks/verify_discovery_links.py

Uses API/JSON sources first; HTML only as fallback. Never skip a check —
if primary fails, try fallbacks and report Blocked only when all fail.
"""

from __future__ import annotations

import json
import re
import ssl
import sys
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from typing import Any

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
CTX = ssl.create_default_context()


@dataclass
class CheckResult:
    check_id: str
    company: str
    role: str
    geo: str
    status: str  # Live | Stale | Aggregator | Blocked | Unknown
    source: str
    detail: str
    sources_tried: list[str] = field(default_factory=list)


def fetch(url: str, timeout: int = 25, accept: str = "application/json,text/html") -> tuple[int | str, str]:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": accept})
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=CTX) as r:
            return r.status, r.read().decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="ignore") if e.fp else ""
        return e.code, body
    except Exception as e:
        return "ERR", str(e)


def fetch_json(url: str, timeout: int = 25) -> tuple[int | str, Any | None]:
    code, body = fetch(url, timeout=timeout, accept="application/json")
    if code != 200 or not body.strip():
        return code, None
    try:
        return code, json.loads(body)
    except json.JSONDecodeError:
        return code, None


def gh_job_live(board: str, job_id: str) -> tuple[bool, str]:
    code, data = fetch_json(f"https://boards-api.greenhouse.io/v1/boards/{board}/jobs?content=true")
    if code != 200 or not data:
        return False, f"Greenhouse API {code}"
    for j in data.get("jobs", []):
        if str(j.get("id")) == str(job_id):
            loc = (j.get("location") or {}).get("name", "")
            return True, loc
    return False, "job ID not on board"


def gh_filter_jobs(board: str, title_kw: list[str], geo_kw: list[str]) -> list[tuple[str, str, str]]:
    code, data = fetch_json(f"https://boards-api.greenhouse.io/v1/boards/{board}/jobs?content=true")
    if code != 200 or not data:
        return []
    hits = []
    for j in data.get("jobs", []):
        title = j.get("title", "").lower()
        loc = (j.get("location") or {}).get("name", "").lower()
        if not any(k in title for k in title_kw):
            continue
        if geo_kw and not any(g in loc for g in geo_kw):
            continue
        hits.append((str(j["id"]), j["title"], (j.get("location") or {}).get("name", "")))
    return hits


def ashby_checkout_dubai_revops() -> CheckResult:
    sources = ["Ashby API"]
    code, data = fetch_json("https://ashby-careers-checkout-production.up.railway.app/api/jobs")
    if code != 200 or data is None:
        return CheckResult("checkout-revops", "Checkout.com", "RevOps / Commercial Strategy Dubai", "Dubai",
                           "Blocked", "Ashby API", f"HTTP {code}", sources)
    jobs = data if isinstance(data, list) else data.get("jobs", [])
    kw = ["revops", "revenue operations", "commercial strategy"]
    for j in jobs:
        title = j.get("title", "").lower()
        blob = json.dumps(j).lower()
        if any(k in title for k in kw) and any(g in blob for g in ["dubai", "uae", "emirates"]):
            return CheckResult("checkout-revops", "Checkout.com", "RevOps / Commercial Strategy Dubai", "Dubai",
                               "Live", "Ashby API", j.get("title", ""), sources)
    ext = [j for j in jobs if "external affairs" in j.get("title", "").lower() and "uae" in json.dumps(j).lower()]
    detail = f"no RevOps Dubai ({len(jobs)} jobs)"
    if ext:
        detail += f"; External Affairs UAE live"
    return CheckResult("checkout-revops", "Checkout.com", "RevOps / Commercial Strategy Dubai", "Dubai",
                       "Stale", "Ashby API", detail, sources)


def visa_workday() -> CheckResult:
    slug = "AE---Dubai-United-Arab-Emirates/Senior-Manager--Product-Strategy-and-Planning_REF082130W"
    api = f"https://visa.wd5.myworkdayjobs.com/wday/cxs/visa/Visa/job/{slug}"
    sources = ["Workday CXS API"]
    code, data = fetch_json(api)
    if code == 200 and data and data.get("jobPostingInfo"):
        info = data["jobPostingInfo"]
        live = info.get("posted", False) and info.get("canApply", False)
        end = info.get("endDate") or info.get("jobPostingEndDateAsText", "")
        detail = f"{info.get('title')} · canApply={info.get('canApply')} · {info.get('postedOn', '')} · end {end}"
        return CheckResult("visa-ref082130w", "Visa", "Sr Manager Product Strategy & Planning", "Dubai",
                           "Live" if live else "Stale", "Workday CXS API", detail, sources)
    sources.append("Workday HTML")
    code2, body = fetch(f"https://visa.wd5.myworkdayjobs.com/en-US/Visa/job/{slug}")
    if code2 == 200 and "Product Strategy" in body:
        return CheckResult("visa-ref082130w", "Visa", "Sr Manager Product Strategy & Planning", "Dubai",
                           "Live", "Workday HTML", "title found (CXS failed)", sources)
    return CheckResult("visa-ref082130w", "Visa", "Sr Manager Product Strategy & Planning", "Dubai",
                       "Blocked", "Workday", f"CXS {code}, HTML {code2}", sources)


def revolut_posting(job_id: str, slug: str, title: str) -> CheckResult:
    urls = [
        ("en-BR careers", f"https://www.revolut.com/en-BR/careers/position/{slug}-{job_id}/"),
        ("global careers", f"https://www.revolut.com/careers/position/{slug}-{job_id}/"),
    ]
    sources = []
    for label, url in urls:
        sources.append(label)
        code, body = fetch(url)
        if code == 200 and len(body) > 8000:
            locs = set(re.findall(r"Brazil|Brasil|Spain|España|São Paulo|Sao Paulo|Madrid|Barcelona", body))
            has_brazil_spain = bool(locs & {"Brazil", "Brasil", "Spain", "España", "São Paulo", "Sao Paulo", "Madrid", "Barcelona"})
            detail = f"live via {label}; locs={sorted(locs)[:6]}"
            return CheckResult(f"revolut-{job_id[:8]}", "Revolut", title, "Both",
                               "Live" if has_brazil_spain else "Live", label, detail, sources)
        if code == 403:
            continue
    # Tertiary: public job board mirrors often indexed — mark needs manual if 403
    return CheckResult(f"revolut-{job_id[:8]}", "Revolut", title, "Both",
                       "Unknown", "revolut.com", "403 on all URLs — confirm manually or WebFetch", sources)


def meli_eightfold(query: str, expect_title_fragment: str, require_gerente: bool = True) -> CheckResult:
    q = urllib.parse.quote(query)
    url = f"https://mercadolibre.eightfold.ai/api/pcsx/search?domain=mercadolibre.com&query={q}&start=0"
    sources = ["MELI Eightfold API"]
    code, data = fetch_json(url)
    if code != 200 or not data:
        return CheckResult(f"meli-{query[:20]}", "Mercado Pago", expect_title_fragment, "SP",
                           "Blocked", "Eightfold", f"HTTP {code}", sources)
    positions = data.get("data", {}).get("positions", [])
    frag = expect_title_fragment.lower()
    for p in positions:
        name = (p.get("name") or "").lower()
        locs = p.get("locations") or []
        loc_str = " ".join(str(l) for l in locs).lower()
        if require_gerente and "gerente" not in name and "manager" not in name:
            continue
        if "brazil" not in loc_str and "sudeste" not in loc_str and "são paulo" not in loc_str:
            continue
        if frag in name or all(w in name for w in frag.split()[:2] if len(w) > 3):
            return CheckResult(f"meli-{query[:20]}", "Mercado Pago", p.get("name", expect_title_fragment), "SP",
                               "Live", "Eightfold API", str(locs), sources)
    return CheckResult(f"meli-{query[:20]}", "Mercado Pago", expect_title_fragment, "SP",
                       "Aggregator", "Eightfold API",
                       f"0 Brazil Gerente hits — verify LinkedIn 4206073378 / 4419607407", sources)


def jpm_oracle(job_id: str, title: str, geo: str) -> CheckResult:
    # Oracle HCM public job detail endpoint (may vary by site config)
    urls = [
        ("Oracle REST", f"https://jpmc.fa.oraclecloud.com/hcmRestApi/resources/latest/recruitingCEJobRequisitionDetails?expand=all&onlyData=true&finder=ById;Id={job_id},siteNumber=CX_1001"),
        ("Oracle CX UI", f"https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/{job_id}"),
    ]
    sources = []
    for label, url in urls:
        sources.append(label)
        code, body = fetch(url, accept="application/json,text/html")
        if code == 200:
            if "json" in label.lower() or body.strip().startswith("{"):
                try:
                    data = json.loads(body)
                    items = data.get("items") or [data]
                    if items:
                        return CheckResult(f"jpm-{job_id}", "J.P. Morgan", title, geo,
                                           "Live", label, f"job {job_id} found", sources)
                except json.JSONDecodeError:
                    pass
            if len(body) > 3000 and ("job" in body.lower() or job_id in body):
                closed = any(x in body.lower() for x in ["no longer", "posting closed", "job not found"])
                return CheckResult(f"jpm-{job_id}", "J.P. Morgan", title, geo,
                                   "Stale" if closed else "Live", label, f"HTML {len(body)}B", sources)
    return CheckResult(f"jpm-{job_id}", "J.P. Morgan", title, geo,
                       "Unknown", "Oracle CX", "could not verify — try manual", sources)


def nubank_mandatory() -> list[CheckResult]:
    results = []
    spg_live = gh_filter_jobs("nubank",
        ["strategic partnership", "spg", "corporate development", "business operations", "bizops", "chief of staff"],
        ["são paulo", "sao paulo", "brazil", "brasil"])
    spg_closed = not gh_job_live("nubank", "7577975")[0]
    if spg_live:
        detail = "; ".join(f"{t} ({i})" for i, t, l in spg_live[:3])
        results.append(CheckResult("nubank-target", "Nubank", "SPG/Corp Dev/S&O SP", "SP",
                                   "Live", "Greenhouse API", detail, ["Greenhouse API"]))
    else:
        detail = "7577975 closed" if spg_closed else "7577975 status unclear"
        results.append(CheckResult("nubank-target", "Nubank", "SPG/Corp Dev/S&O SP", "SP",
                                   "Stale", "Greenhouse API", detail, ["Greenhouse API"]))
    return results


def adyen_mandatory() -> CheckResult:
    live, loc = gh_job_live("adyen", "7913587")
    return CheckResult("adyen-7913587", "Adyen", "Senior Alliances Partner Manager", "SP",
                       "Live" if live else "Stale", "Greenhouse API",
                       loc if live else "7913587 not on board", ["Greenhouse API"])


def run_all() -> list[CheckResult]:
    results: list[CheckResult] = []
    results.extend(nubank_mandatory())
    results.append(ashby_checkout_dubai_revops())
    results.append(adyen_mandatory())
    results.append(revolut_posting("e4b7c063-41c5-4afc-8031-2323db04b9f7", "strategy-operations-manager", "S&O Manager Revenue"))
    results.append(revolut_posting("6970b9e3-e515-4b76-804b-9df9ce31296d", "operations-manager-revenue", "Operations Manager Revenue"))
    results.append(visa_workday())
    results.append(meli_eightfold("Gerente Online Payments", "online payments"))
    results.append(meli_eightfold("Gerente Engajamento Pequenas", "engajamento"))
    live, _ = gh_job_live("ebanx", "7718387003")
    results.append(CheckResult("ebanx-7718387003", "EBANX", "Product Senior Manager Payments", "SP",
                               "Live" if live else "Stale", "Greenhouse API", "7718387003", ["Greenhouse API"]))
    results.append(jpm_oracle("210741903", "LATAM Payments Rails Product Delivery VP", "SP"))
    results.append(jpm_oracle("210746060", "Market and Product Expansion Treasury VP", "SP"))
    results.append(jpm_oracle("210751285", "Payments EMEA Innovation Economy Sales VP", "Dubai"))
    live, loc = gh_job_live("brex", "8580566002")
    results.append(CheckResult("brex-8580566002", "Brex", "Manager, Banking Operations (intel)", "SP",
                               "Live" if live else "Stale", "Greenhouse API",
                               loc if live else "8580566002 not on board", ["Greenhouse API"]))
    strategy_hits = gh_filter_jobs("brex",
        ["strategy", "business operations", "bizops", "corporate development", "partnerships", "alliances"],
        ["são paulo", "sao paulo", "brazil", "remote"])
    if strategy_hits:
        detail = "; ".join(f"{t} ({i})" for i, t, l in strategy_hits[:3])
        results.append(CheckResult("brex-strategy-sp", "Brex", "Strategy/S&O/BizOps SP or remote", "SP",
                                   "Live", "Greenhouse API", detail, ["Greenhouse API"]))
    else:
        results.append(CheckResult("brex-strategy-sp", "Brex", "Strategy/S&O/BizOps SP or remote", "SP",
                                   "Stale", "Greenhouse API", "no target-family SP/remote titles", ["Greenhouse API"]))
    # Archived watchlist repost checks
    nubank_spg = gh_job_live("nubank", "7577975")
    results.append(CheckResult("watch-nubank-spg", "Nubank", "SPG archived 7577975", "SP",
                               "Live" if nubank_spg[0] else "Stale", "Greenhouse API", nubank_spg[1], ["Greenhouse API"]))
    return results


def print_report(results: list[CheckResult]) -> int:
    blocked = [r for r in results if r.status in ("Blocked", "Unknown")]
    print("=== RUN_DISCOVERY link verification ===\n")
    print("| Company | Check | Geo | Status | Source | Detail |")
    print("|---|---|---|---|---|---|")
    for r in results:
        detail = r.detail.replace("|", "/")[:80]
        print(f"| {r.company} | {r.role[:40]} | {r.geo} | **{r.status}** | {r.source} | {detail} |")
    print()
    if blocked:
        print(f"ATTENTION: {len(blocked)} check(s) need fallback or manual confirm:")
        for r in blocked:
            print(f"  - {r.company} / {r.role}: {r.detail}")
        print()
    print(f"Total: {len(results)} checks · Live: {sum(1 for r in results if r.status == 'Live')} · "
          f"Stale: {sum(1 for r in results if r.status == 'Stale')} · "
          f"Blocked/Unknown: {len(blocked)}")
    return 1 if blocked else 0


def main() -> int:
    results = run_all()
    return print_report(results)


if __name__ == "__main__":
    sys.exit(main())
