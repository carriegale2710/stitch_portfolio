# Project Details Page Specification

## Goal

Define a reusable structure and checklist for portfolio project detail pages that signal authentic judgment, decision-making, and measurable outcomes — the signals hiring managers look for in 2026.

---

## Scope

**In scope:**

- Page structure (sections, order, word counts)
- Content checklist for each section
- AI-usage disclosure guidance
- Proof/evidence requirements (links, diagrams, metrics)

**Out of scope:**

- Portfolio homepage structure
- README files or GitHub repo documentation
- Demo app UX or landing page copy

---

## User Experience

A reviewer lands on a project detail page and can:

1. **Skim in <30 seconds**: one-line pitch, problem, outcome, links.
2. **Read in <2 minutes**: full case study with decisions and trade-offs.
3. **Verify in <5 minutes**: click live demo/API, inspect repo, view architecture diagram.

The page should load fast, be mobile-readable, and avoid decorative filler.

---

## Page Structure

Use this exact section order. Each section includes a purpose, target length, and checklist.

### 1. One-Line Pitch

**Purpose:** Tell a skimming reviewer what this is and why it matters before they commit to reading.

**Length:** 1 sentence (max 25 words).

**Checklist:**

- [ ] States what the project is (noun + verb).
- [ ] Names the user or beneficiary.
- [ ] Hints at outcome or why it existed.
- [ ] Avoids "I built" or "I wanted to learn".

**Example:**  
"A self-hosted RSS importer that batches 10k feeds daily for privacy-focused readers."

---

### 2. The Problem

**Purpose:** Frame the concrete problem and why it was worth solving.

**Length:** 2–4 sentences (60–100 words).

**Checklist:**

- [ ] Names the user or stakeholder (even if it's you).
- [ ] Describes the pain or gap in existing tools/workflows.
- [ ] Includes a constraint (budget, time, data, privacy, scale).
- [ ] Avoids vague "I wanted to learn X" framing.

**Example:**  
"I needed to migrate 50+ RSS feeds from a paid service without losing history or paying again. Existing importers timed out after 500 feeds and offered no batch retry logic, leaving half my subscriptions orphaned."

---

### 3. Architecture & Key Decisions

**Purpose:** Show how you think — the 2–3 decisions that actually mattered and the trade-offs you accepted.

**Length:** 3–6 bullet points (80–150 words).

**Checklist:**

- [ ] Names 2–3 key decisions (data model, framework, protocol, hosting).
- [ ] Explains _why_ you chose A over B (not just what you used).
- [ ] States at least one explicit trade-off (latency vs consistency, simplicity vs flexibility, cost vs ops).
- [ ] Mentions what you'd do differently today if rebuilding.
- [ ] Avoids a raw tech-stack dump or logo parade.

**Example bullets:**

- Chose SQLite over Postgres because the app runs offline on warehouse tablets; accepted single-writer limitation and added WAL mode for concurrency.
- Used tRPC instead of REST to share types end-to-end; traded broader ecosystem tooling for faster iteration and fewer serialization bugs.
- Hosted on a $5/mo VPS with Docker Compose; accepted manual scaling in exchange for zero vendor lock-in and predictable costs.
- If rebuilding today, I'd add a read replica for analytics queries and move background jobs to a queue (BullMQ) to avoid blocking the main thread.

---

### 4. The Hardest Technical Problem

**Purpose:** Prove you can diagnose and fix non-trivial issues — a signal AI-generated portfolios lack.

**Length:** 1 short paragraph or 2–3 bullets (60–120 words).

**Checklist:**

- [ ] Names the specific bug, bottleneck, or edge case.
- [ ] Describes how you diagnosed it (logs, profiling, reproducer).
- [ ] Explains the fix or workaround you implemented.
- [ ] Includes a number or observable change if possible.

**Example:**  
"The initial importer crashed after ~2k feeds due to a memory leak in the XML parser. I wrote a small script to stream and parse feeds in chunks, added heap snapshots, and reduced peak memory from 1.2GB to 180MB, allowing full 10k-feed runs on the same VPS."

---

### 5. Outcome (With Numbers)

**Purpose:** Provide falsifiable evidence of impact or learning.

**Length:** 2–4 sentences (50–100 words).

**Checklist:**

- [ ] Includes at least one measurable metric (latency, throughput, users, time saved, cost).
- [ ] If no production traffic, uses before/after comparison or benchmark.
- [ ] States honest limitations or where it broke (optional but strong signal).
- [ ] Avoids vague "much faster" or "works well".

**Example:**  
"The importer now handles 10k feeds in ~12 minutes on a single $5 VPS, with retry logic recovering 98% of failed fetches automatically. It's been running daily for 3 months with two outages due to upstream API changes, both fixed within an hour."

---

### 6. What I'd Do Differently

**Purpose:** Show growth mindset and self-awareness.

**Length:** 2–4 bullets (40–80 words).

**Checklist:**

- [ ] Names 2–3 concrete changes you'd make now.
- [ ] Ties each change to a lesson learned or new constraint.
- [ ] Avoids generic "I'd refactor everything" statements.

**Example bullets:**

- Add OpenAPI/Swagger docs for the API to make it easier for others to integrate.
- Introduce a job queue (BullMQ + Redis) to isolate long-running imports from the web process.
- Write integration tests for the retry logic; I currently rely on manual testing.

---

### 7. Proof & Links

**Purpose:** Let reviewers verify everything above.

**Length:** Bulleted list of links + optional diagram.

**Checklist:**

- [ ] Live demo URL (or recorded walkthrough if private).
- [ ] GitHub/GitLab repo link with meaningful commit history.
- [ ] Architecture diagram (boxes-and-arrows) with 1–2 sentence narrative.
- [ ] If backend/API: hosted endpoint + OpenAPI/Swagger link + sample requests.
- [ ] If data-heavy: sample dataset or schema snippet.
- [ ] Optional: Loom/video walkthrough (2–5 minutes).

**Example:**

- Live demo: https://importer.example.com
- Repo: https://github.com/you/importer
- Architecture diagram: [embedded PNG/SVG] + "Web client → tRPC API → SQLite (WAL) with background importer cron."
- API docs: https://importer.example.com/api/docs
- Walkthrough: [Loom link, 3:12]

---

### 8. AI Usage Disclosure (Optional but Recommended)

**Purpose:** Build trust by being explicit about AI assistance.

**Length:** 1–2 sentences.

**Checklist:**

- [ ] Names the AI tool(s) used (Copilot, Cursor, ChatGPT, etc.).
- [ ] States what AI helped with (boilerplate, scaffolding, docs).
- [ ] States what you wrote manually (business logic, architecture, tests).
- [ ] Avoids over-apologizing or hiding usage.

**Example:**  
"I used GitHub Copilot for boilerplate CRUD handlers and initial test scaffolding. All business logic (batching, retry, backoff), architecture decisions, and final tests were written and reviewed by me."

---

## Acceptance Criteria

A project detail page passes this spec if:

1. **Skimmable:** A reviewer can extract problem, decision, outcome, and links in <30 seconds.
2. **Decision-rich:** At least two explicit trade-offs are named and justified.
3. **Measurable:** At least one concrete number or benchmark is present.
4. **Verifiable:** Live demo/API and repo links work; architecture diagram is present.
5. **Authentic:** Includes at least one rough edge (bug, failure, or limitation) and an AI-usage disclosure if applicable.
6. **Concise:** Total word count 350–600 words (excluding links/diagrams).

---

## Edge Cases

- **No production users:** Use benchmarks, synthetic load tests, or time-saved estimates.
- **Private/proprietary code:** Provide sanitized snippets, screenshots, or a recorded walkthrough.
- **Solo learning project:** Frame around a concrete gap in existing tools or your workflow, not "I wanted to learn X".
- **Group project:** Clearly state your specific contributions vs teammates' work.

---

## Notes for Implementation

- Keep total page weight low (fast load, mobile-friendly).
- Use plain prose over jargon; name tools only where they matter.
- Prefer auto-synced GitHub widgets for stars/commits over hand-typed claims.
- Update quarterly or when the project materially changes.
