# Project details rewrite

## Two-layer structure plan:

**Scan layer (default view) — lead with judgment, not narrative**

- Title + one-liner (you have this)
- Tech chips
- 2-3 metrics as a stat row
- One "signature decision" line pulled _out_ of the collapsed section and shown by default — this is the single highest-value change. An EM who sees a sharp tradeoff sentence before clicking anything is far more likely to click through than one who sees only "React + Spring Boot HR app."
- **Don't** lead with `limitations`/known issues at scan depth — self-awareness reads as a strength once someone's already engaged, but as a weakness in the first 5 seconds of triage. Push it to the dive layer.

**Dive layer (behind "see the full build breakdown")**

- `architectureDecisions` (why/tradeoff intact — don't compress these)
- `hardestProblem` (this is arguably your strongest junior-signal content — real debugging, real reasoning)
- `whatIdDoDifferently` + `limitations` together — self-awareness lands well _here_, after the win is established
- Cut or fold `reflections` per earlier — weakest signal, skip it or compress to one line inside `whatIdDoDifferently`

## Project preview/summaries:

---

> **Employee Creator** — _From Zero to Production_
> Solo full-stack HR system (Spring Boot + React), built and deployed to live AWS infrastructure in 4 weeks.
> `Spring Boot 3` `Java 21` `MySQL` `React/TS` `AWS`
> **198 commits · 40+ automated tests · live on EC2 + CloudFront**
> _"Contracts are immutable by design — no update endpoint — so a legal record can't be silently edited, only appended to."_
> → See the full build breakdown

---

**Indigenous Library** — _Gating Cultural Access_
Team project (5): Flask app that gates culturally sensitive Indigenous artefacts behind a reviewer/elder sign-off, built to CARE principles for Indigenous data governance. My role: controller layer, auth, RBAC, deployment.
`Flask` `MySQL` `Session Auth` `Bootstrap 5` `Nginx`
**232 commits (team) · Lighthouse 93 · LCP 0.83s · live on AWS**
_"Modeled access status as a state machine — Pending → Open / Restricted / Culturally Sensitive — instead of a boolean, because the requirement was a review process, not a login gate."_
→ See the full build breakdown

---

**Trivia Game** — _Retry Mode & a Shipped Design System_
2-person coursework project: frontend for a trivia game with a retry loop that resurfaces only genuinely unresolved wrong answers, scored by difficulty. My role: full player-facing experience, built against a peer-owned API.
`React/TS` `Vite` `Tailwind` `Spring Boot (peer)` `Figma`
**128 commits · 5 weekly ticket cycles · Figma prototype user-tested**
_"Retry mode ran against a backend contract I didn't write — before wiring calls, I confirmed the exact required params against my peer's implementation instead of assuming a shape from the frontend side."_
→ See the full build breakdown
