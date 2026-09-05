# Project Details Page Specification based on Research

## Project Detail Page: Core Structure

Skip the README duplicate — a project detail page should read as a decision narrative, not a feature list. The consensus structure across 2026 hiring guides is four to five beats: problem, approach/architecture decisions, trade-offs, measurable outcome, and what you'd change now. [kairne](https://www.kairne.dev/blog/developer-portfolio-case-study-template)

- **One-line pitch**: a single sentence a skimming recruiter can absorb before committing to read on. [kairne](https://www.kairne.dev/blog/developer-portfolio-case-study-template)
- **The problem**: 2-4 concrete sentences on what needed solving and for whom — never "I wanted to learn X". [foliox](https://foliox.me/blog/developer-portfolio-examples-inspiration-2026)
- **Architecture & key decisions**: name 2-3 decisions that actually mattered (why SQLite over Postgres, why React Query over Redux) and the trade-off accepted, not a tech-stack list. [path](https://path.cv/blog/developer-portfolio-guide)
- **The hardest technical problem** you hit and how you diagnosed/fixed it. [foliox](https://foliox.me/blog/developer-portfolio-examples-inspiration-2026)
- **Outcome with a number**: latency, load handled, time saved, or an honest "this is where it broke" if there's no metric. [path](https://path.cv/blog/developer-portfolio-guide)
- **What you'd do differently today** — signals growth mindset. [generalistprogrammer](https://generalistprogrammer.com/tutorials/how-to-build-a-developer-portfolio)

## Beyond the Obvious: What Makes 2026 Different

Generative AI has collapsed traditional signals like polished write-ups and clean resumes, so hiring managers now specifically hunt for things AI can't easily fake. Build your project pages around these: [punku](https://www.punku.ai/blog/making-talk-cheap-generative-ai-and-labor-market-signaling)

- **Narrate a real trade-off you accepted** — this is the single detail a copier/AI-generated case study can't replicate convincingly. [generalistprogrammer](https://generalistprogrammer.com/tutorials/how-to-build-a-developer-portfolio)
- **Show unresolved rough edges**: a bug you diagnosed, a version that failed, a stakeholder disagreement — authentic work has documented iteration, AI output tends to be uniformly clean. [highfive](https://highfive.global/hiring-recruitment/how-to-tell-if-a-candidates-portfolio-is-real-or-ai-generated-a-practical-verification-guide-for-hiring-managers/)
- **Include a decision log** documenting significant choices and rejected alternatives, not just what shipped. [thetailorcv](https://thetailorcv.com/blog/backend-developer-portfolio)
- **Disclose AI usage explicitly and specifically**: "Used Copilot for boilerplate; wrote all business logic manually" builds more trust than pretending you wrote everything solo, and silence breeds doubt. [linkedin](https://www.linkedin.com/posts/mary-knoeferl_recruiters-arent-checking-to-see-if-your-activity-7386017415169712128-On4T)
- **Pull live proof instead of typing claims**: connect GitHub so star counts and commit activity update automatically rather than being hand-typed and left to rot; a steady weekly commit chart reads very differently than one burst of activity. [devbio](https://devbio.me/blogs/developer-portfolio-guide-2026)
- **Architecture diagrams and data-model trade-offs** for full-stack/backend projects — boxes-and-arrows plus a short narrative on why you chose that shape. [thetailorcv](https://thetailorcv.com/blog/backend-developer-portfolio)
- **Live-testable proof over screenshots**: a hosted API with OpenAPI/Swagger docs and sample requests, or a Loom-style walkthrough if it can't be public. [foliox](https://foliox.me/blog/developer-portfolio-examples-inspiration-2026)
- **Before/after framing**: side-by-side screenshots, Lighthouse scores, or user feedback pre/post your change. [foliox](https://foliox.me/blog/developer-portfolio-examples-inspiration-2026)
- **Reframe project names as problem headlines**: "How I reduced task completion time by 60% for a 50-person team" beats "TaskFlow App". [foliox](https://foliox.me/blog/developer-portfolio-examples-inspiration-2026)

## What to Cut

Curate hard — 3 to 5 finished, deployed projects beats 10+ thumbnails; anything you can't defend live in an interview shouldn't be featured. [woyable](https://woyable.com/en/posts/developer-portfolio-guide)

- Skip generic clone projects (to-do lists, weather apps) unless reframed around a specific real user or dataset. [codelucky](https://codelucky.com/developer-portfolio-that-gets-you-hired-2026/)
- Drop the flat "Skills: React, Node, AWS" list — pair every tool with a shipped result instead ("Built a real-time dashboard with DynamoDB handling 10k concurrent users"). [linkedin](https://www.linkedin.com/posts/work-from-anywhere-careers_work-from-anywhere-careers-building-a-developer-activity-7458565533207040000-_xJp)
- Avoid vague enthusiasm language ("made it much faster") — use falsifiable numbers ("reduced query time from 800ms to 60ms"). [kairne](https://www.kairne.dev/blog/developer-portfolio-case-study-template)

## Quick Reference Table

| Element     | Weak version                | Strong 2026 version                                                                                                                                                                               |
| ----------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description | "A weather app using React" | Problem headline + who it's for + why it existed [foliox](https://foliox.me/blog/developer-portfolio-examples-inspiration-2026)                                                                   |
| Tech stack  | List of 8+ logos            | 2-3 decisions explained with trade-offs [kairne](https://www.kairne.dev/blog/developer-portfolio-case-study-template)                                                                             |
| Proof       | Static screenshot           | Live demo/API + auto-synced commit/star data [devbio](https://devbio.me/blogs/developer-portfolio-guide-2026)                                                                                     |
| Credibility | Silent about AI use         | One-line disclosure of what AI helped with vs. what you wrote [linkedin](https://www.linkedin.com/posts/mary-knoeferl_recruiters-arent-checking-to-see-if-your-activity-7386017415169712128-On4T) |
| Outcome     | "It works well"             | Specific metric or honest failure + fix [kairne](https://www.kairne.dev/blog/developer-portfolio-case-study-template)                                                                             |

Given your background building agent-skill repos and Next.js/Stripe/Supabase SaaS prototypes, your strongest move is likely a featured case study on a real micro-SaaS attempt (even unlaunched) that documents pricing/architecture decisions and one thing that broke — that's exactly the "judgment under ambiguity" signal these guides say AI can't fake. [tomorrowscareers](https://tomorrowscareers.ai/articles/the-portfolio-effect-why-showing-your-work-is-beating-credentials-in-the-ai-hiring-era)
