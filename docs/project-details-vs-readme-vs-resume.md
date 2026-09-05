# Writing Project Details Page vs Github README vs Resume Projects Section Entry

The three formats serve different readers:

- **GitHub README**: helps someone run, use, review, or contribute to the code.
- **Project details page**: explains how you think and what you learned.
- **Resume project section**: earns enough interest for someone to click through.

Do not copy the same text into all three.

## At a glance

| Surface                 | Primary reader                                   | Main question                                                                        |                                         Ideal length | Main job                                       |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------: | ---------------------------------------------- |
| GitHub README           | Developer, reviewer, contributor                 | “What is this, and how do I run or use it?”                                          | 300–800 words, longer when technical docs require it | Make the repository understandable and usable  |
| Project details page    | Hiring manager, recruiter, technical interviewer | “What problem did you solve, what decisions did you make, and what does that prove?” |                                        350–600 words | Demonstrate judgment, ownership, and growth    |
| Resume projects section | Recruiter, ATS, hiring manager skimming quickly  | “Is this relevant enough to investigate?”                                            |                              1–3 bullets per project | Create a credible reason to click or interview |

## 1. GitHub README

A README is operational documentation. It should help a technical visitor understand the repository and successfully run or use the project. GitHub itself recommends using a README to communicate what a repository contains and how people should navigate or work with it. [docs.github](https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories)

### Include

1. **Project name and precise description**
   - What it is.
   - Who it is for.
   - The main differentiator, if useful.

2. **Visual preview**
   - Screenshot, GIF, architecture image, or terminal output.
   - Put the most useful visual near the top.

3. **Quick links**
   - Live application.
   - API documentation.
   - Project details page.
   - Demo video, if relevant.

4. **Features**
   - List the 3–7 most important capabilities.
   - Describe user-visible behavior, not every implementation detail.

5. **Technology stack**
   - Group by frontend, backend, database, infrastructure, testing.
   - Only list technologies actually used.

6. **Requirements**
   - Runtime versions.
   - Required services.
   - Environment variables.
   - External accounts or API keys.

7. **Installation and setup**
   - Clone command.
   - Dependency installation.
   - Environment configuration.
   - Database setup and migrations.
   - How to start the app.

8. **Minimal usage example**
   - The shortest path to seeing the project work.
   - For an API, include a request and response.
   - For a library, include a code example.

9. **Testing and quality commands**
   - Unit tests.
   - Integration tests.
   - Type checking.
   - Linting.
   - Build command.

10. **Project-specific documentation**

- Link to deeper architecture, API, deployment, or contribution docs rather than putting everything in the README.
- Current README guidance generally favors moving deep material into linked documentation. [pushpen](https://pushpen.dev/blog/github-readme-best-practices-2026)

11. **Contributing, license, and status**

- Contribution steps if contributions are welcome.
- License.
- Current project status: active, maintained, experimental, or archived.

### README checklist

- [ ] A new developer understands the project within 30 seconds.
- [ ] The first screen contains a useful description and visual or usage example.
- [ ] Setup works from a clean machine.
- [ ] Commands are tested and current.
- [ ] Environment variables are documented without exposing secrets.
- [ ] The demo and documentation links work.
- [ ] The README distinguishes current functionality from planned features.
- [ ] Deep architecture decisions are linked, not buried in a wall of prose.
- [ ] License and project status are explicit.
- [ ] There is no exaggerated claim that the code cannot support.

### Do not put here

- A long personal story.
- A detailed career reflection.
- Every failed experiment.
- Resume-style claims such as “improved developer productivity.”
- A full case study repeated from your portfolio.
- AI-generated filler about why the project is “innovative.”

### Example README opening

```md
# InvoicePilot

A lightweight invoice tracker for freelancers who need recurring invoices
without a monthly accounting subscription.

[Live demo] · [Project case study] · [API docs]

![InvoicePilot dashboard](./docs/images/dashboard.png)

## Features

- Create and send recurring invoices
- Track paid, overdue, and draft invoices
- Export invoice data as CSV
- Authenticate with email and password

## Stack

Next.js · TypeScript · PostgreSQL · Stripe · Resend
```

## 2. Project details page

The project details page is a technical case study. It should explain your reasoning rather than teach someone how to install the project. A strong engineering case study answers four questions quickly: what problem existed, what you decided and why, what happened, and where the work can be verified. [kairne](https://www.kairne.dev/blog/developer-portfolio-case-study-template)

### Include

1. **One-line project pitch**
   - What the product is.
   - Who benefits.
   - Why it exists.

2. **Problem and context**
   - The user or stakeholder.
   - The specific pain or gap.
   - The constraint that shaped the work.
   - Why existing solutions were insufficient.

3. **Your role and ownership**
   - Especially important for team or university projects.
   - State exactly what you designed, implemented, tested, deployed, or documented.
   - Separate your work from collaborators’ work.

4. **Architecture overview**
   - A simple diagram.
   - The major request/data flow.
   - The boundaries between frontend, backend, database, third-party services, and background jobs.

5. **Two or three key decisions**
   - What you chose.
   - What alternatives you considered.
   - Why the choice fit the constraints.
   - What trade-off you accepted.

6. **Hardest technical problem**
   - The bug, bottleneck, integration issue, or edge case.
   - How you reproduced or diagnosed it.
   - The fix.
   - The resulting change.

7. **Outcome**
   - Users, records, requests, latency, cost, test coverage, deployment frequency, or time saved.
   - For an unreleased project, include a benchmark or before/after comparison.
   - Never invent production metrics.

8. **Limitations**
   - What is incomplete.
   - What would fail at larger scale.
   - Which security, accessibility, or reliability work remains.

9. **What you would do differently**
   - Two or three concrete improvements.
   - Connect each to a lesson learned.

10. **Verification**
    - Live demo.
    - Repository.
    - API docs.
    - Short walkthrough.
    - Screenshots or a sanitized code sample for private work.

11. **AI-use disclosure**
    - Name the tool.
    - State what it helped with.
    - State what you reviewed, changed, tested, or wrote yourself.
    - This is especially useful in 2026, when specific process evidence is more credible than polished output alone. [tomorrowscareers](https://tomorrowscareers.ai/articles/the-portfolio-effect-why-showing-your-work-is-beating-credentials-in-the-ai-hiring-era)

### Project details checklist

- [ ] The problem is concrete and user-centered.
- [ ] The page explains your personal contribution.
- [ ] At least two technical decisions include reasons and trade-offs.
- [ ] The architecture can be understood from one diagram.
- [ ] The hardest problem describes diagnosis, not just the final solution.
- [ ] At least one metric or reproducible benchmark is included.
- [ ] One limitation or failure is acknowledged.
- [ ] “What I’d do differently” is specific.
- [ ] The live demo or video works.
- [ ] The repository is accessible or its privacy is explained.
- [ ] AI assistance is disclosed where relevant.
- [ ] The page can be skimmed in 30 seconds and read in under two minutes.

### Do not put here

- Full installation instructions.
- Every feature in the application.
- A giant list of technology logos.
- Generic claims such as “responsive and scalable.”
- Five paragraphs describing your motivation before explaining the product.
- Metrics without a source or explanation.

### Example project details excerpt

```md
## Key decisions

- Used PostgreSQL instead of a document database because invoices, payments,
  and customers require relational queries and transactional updates.
- Used Stripe Checkout instead of handling card details directly. This reduced
  implementation scope and security risk, at the cost of less control over the
  checkout experience.
- Added a background job for reminder emails so a slow email provider could not
  block invoice creation.

## Hardest problem

Stripe webhooks could arrive more than once, creating duplicate payment records.
I reproduced the issue by replaying webhook events locally, then added an
idempotency table keyed by Stripe's event ID. Replayed events are now ignored
without changing the invoice state.
```

## 3. Resume projects section

The resume is not the place to explain the whole project. It is a compressed evidence layer designed for rapid scanning and ATS matching. Resume guidance commonly recommends one to three bullets per project, with each bullet combining an action, artifact, technology, and measurable outcome. [labs.codersarts](https://labs.codersarts.com/blog/portfolio-projects/resume-project-bullet-point-framework)

### Include

1. **Project name**
   - Use a clear, professional name.
   - Avoid names that sound like tutorial exercises unless the product itself is compelling.

2. **Project type or one-line context**
   - Example: “Subscription invoicing SaaS.”
   - This lets the reader understand the domain immediately.

3. **Relevant stack**
   - Usually 3–6 technologies.
   - Choose technologies relevant to the job rather than listing everything in the repository.

4. **One to three high-value bullets**
   - Bullet 1: what you built and why.
   - Bullet 2: the hardest or most relevant engineering work.
   - Bullet 3: result, testing, deployment, collaboration, or security evidence.

5. **Links**
   - GitHub.
   - Live demo or case study.
   - Keep links short and functional.

6. **Numbers**
   - Use real figures: users, records, endpoints, response time, test count, cost, or benchmark results.
   - Use scope when impact metrics are unavailable.

### Resume bullet formula

Use:

> **Action verb + artifact + relevant technology or method + scale/scope + result**

Example:

- Built a subscription invoicing SaaS with Next.js, PostgreSQL, and Stripe, supporting recurring billing, webhook-driven payment updates, and CSV exports.
- Implemented idempotent Stripe webhook processing and integration tests, preventing duplicate payment records during event retries.
- Deployed the application with automated CI checks for type safety, linting, and test execution.

The second and third bullets do not need an impressive percentage if you do not have a credible metric. A technically specific, defensible result is stronger than a fabricated number.

### Resume checklist

- [ ] The project is relevant to the target role.
- [ ] The name and domain are immediately understandable.
- [ ] Each bullet begins with a strong, accurate verb.
- [ ] Each bullet describes a specific artifact or engineering contribution.
- [ ] Technologies are connected to actions, not listed separately.
- [ ] At least one bullet includes a real number or concrete scope.
- [ ] Bullets are roughly 15–25 words where possible.
- [ ] There are no more than three bullets per project.
- [ ] The project fits within the resume’s page limit.
- [ ] Every claim can be defended in an interview.
- [ ] Links lead to the relevant README or project details page.
- [ ] Keywords match the target job naturally.

### Do not put here

- Architecture diagrams.
- Long explanations of trade-offs.
- A complete feature list.
- “What I learned” paragraphs.
- Every framework or library used.
- Unverified claims such as “highly scalable.”
- A separate bullet for every small CRUD feature.

## How the three should connect

Treat them as a funnel:

```text
Resume
  ↓ earns attention
Project details page
  ↓ explains judgment
GitHub README
  ↓ enables verification and reproduction
Source code
```

The links should work in both directions:

- **Resume → project details page** for context and reasoning.
- **Project details page → README** for setup and technical reference.
- **README → project details page** for the human story.
- **README → live demo/API** for direct verification.

Do not make the reviewer hunt for the relevant page. Use descriptive link labels such as:

```text
[Case study] [Live demo] [GitHub]
```

rather than three unexplained icons.

## One project, three versions

### Resume

```text
InvoicePilot — Subscription invoicing SaaS
Next.js, TypeScript, PostgreSQL, Stripe

- Built a subscription invoicing SaaS with recurring billing, invoice tracking, and CSV export for freelancers.
- Implemented idempotent Stripe webhook processing and integration tests to prevent duplicate payment records during event retries.
- Deployed automated CI checks for TypeScript, ESLint, and test execution.
[Case study] [GitHub] [Live demo]
```

### Project details page

Explain:

- Why freelancers needed the product.
- Why Stripe Checkout and webhooks were chosen.
- How duplicate webhook events were diagnosed and handled.
- What was measured.
- What remains incomplete.
- What you would redesign today.
- How AI tools were used, if applicable.

### GitHub README

Document:

- What the application does.
- The screenshot and feature list.
- Required Node/PostgreSQL versions.
- Environment variables.
- Database migrations.
- Local setup commands.
- Test and build commands.
- API or deployment documentation.
- License and project status.

## The practical rule

Write the **README first as engineering documentation**, then create the **project details page as the reasoning layer**, and finally compress the strongest evidence into the **resume**.

A useful test is:

- If someone wants to **run it**, send them to the README.
- If someone wants to **understand your judgment**, send them to the project details page.
- If someone wants to **decide whether to investigate**, show them the resume bullets.
