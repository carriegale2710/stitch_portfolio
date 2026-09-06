# Resume Feedback for junior roles

> Q: If you were looking to hire a junior software developer for a mid-sized company , list reasons why vs why would you consider hiring this person based on their resume (and consider looking at their portfolio or call for an interview vs not). be brutally honest and relevant to 2026 sydney tech industry.

Being genuinely blunt rather than diplomatically hedging: this resume is stronger than the average junior bootcamp candidate, but it's landing in what might be the worst entry-level hiring market in a decade, and it has a few soft spots that a mid-sized company (which usually can't absorb much ramp-up risk) would be right to interrogate.

## The case for talking to her

**The Employee Creator App is the whole resume's credibility.** A solo build with a real Spring Boot/React split, 40+ automated tests across four different frameworks (Jest, JUnit, Mockito, Rest Assured), and an actual CI/CD pipeline with logging and health checks is meaningfully above the "todo app with a README" bar most bootcamp portfolios clear. If it holds up under questioning, it's evidence of engineering discipline, not just tutorial-following.

**Testing literacy this early is genuinely uncommon.** Most six-months-out juniors can't talk coherently about unit vs. integration testing, let alone name four frameworks they've used. That's worth probing in an interview because if it's real, it's a hiring-manager pain point solved before day one.

**The internship shows she's functioned inside someone else's codebase, not just her own.** Role-based permissions across three roles, PR review from a senior, GitHub Issues, Postman validation -short (two months), but it's real commercial-adjacent process, not just personal projects.

**The design + code combination is rarer than either skill alone.** A junior who can implement UI competently _and_ has done real UX audits and prototyping is useful in a mid-sized company that doesn't have a dedicated design engineer to bridge that gap.

**External validation exists**, not just self-assessment -top 12 of 1,000+ in the bootcamp cohort, top 6 of 60 in the Startmate fellowship.

## The case for caution

**She has essentially zero full-time commercial software engineering experience.** Two months of internship is it. Everything else -the Outlier/Scale AI work, the freelance UX/UI design -is gig work, and it's doing some heavy lifting on the resume by taking the top experience slot ahead of the actual internship.

**The underlying degree is a BA in Design & Digital Cultures, not CS.** A four-month bootcamp is a real credential, but it's not a substitute for two-plus years of CS fundamentals, and a mid-sized company usually has far less bandwidth than a Google or Atlassian to backfill data structures/algorithms/systems thinking on the job.

**The market itself is the biggest problem, and it's not close.** Junior developer hiring has fallen sharply and consistently through 2026 -one industry tracker puts entry-level hiring down 67% since 2022, driven by AI tools handling exactly the tasks juniors traditionally did: bug fixes, boilerplate, test scripts, and simple CRUD endpoints. Another source citing Stack Overflow data notes 54% of engineering leaders plan to hire fewer juniors in 2026 because senior engineers with AI copilots now cover that work, and 37% of employers say they'd rather use AI than hire a recent graduate. A separate analysis found junior developer hiring down 35% from 2023 levels while bootcamp enrollment itself has dropped 40%. Sydney job boards reflect this directly -several "junior full-stack developer" listings I pulled explicitly ask for a minimum of one year of full-time commercial experience, which tells you the label "junior" has quietly shifted upward.

**"AI/Agentic Systems" as a headline skill category is doing more marketing than substance.** "Custom skill & orchestration authoring" for a forked open-source Perplexity/GAIA framework, listed above her programming languages, reads as buzzword-forward for what may be personal tooling rather than shipped, tested, production work. A sharp technical interviewer should press on this specifically -it's the part of the resume most likely to not hold up.

**The concurrent Grad Cert (Feb–Jul 2026) raises an availability question you'd need answered before scheduling anything** -is she looking for full-time work now, or finishing study first?

## Verdict

Portfolio review and a screening call -not a straight-to-interview, and not a pass either. The Employee Creator App earns her that much; nothing else on the page proves she can operate independently in a live production codebase beyond two supervised months, and that's exactly the gap a portfolio walkthrough (have her explain her test suite and CI/CD design decisions, not just show them) and a short technical screen would resolve cheaply.

Two conditions matter more than anything on the resume itself: whether the role genuinely has mentorship capacity (rare in this market per the data above) or needs someone billable from week one, and whether her Peritia/agentic-systems claims survive being asked "walk me through exactly what you built vs. what you forked." If the role is truly junior-with-support, the full-stack-plus-design combination is a real point in her favour -that pairing is harder to find than either skill alone, and it's specifically the kind of "judgment and communication with stakeholders" work that AI-augmented senior engineers are worse at covering than the boilerplate juniors used to write.

---

> Q: If you were a hiring manager or senior dev who was considering a junior with product design/business chops, but needed to test this candidtes trainability and adaptability, what kind of portfolio projects or takehome tests would you consider assigning to this candidate as part of the selection hiring process to deter any skills issues or doubts before hiring them?

Good instinct -the resume already answers "can she build things solo from scratch," so testing that again is wasted signal. The gaps worth probing are the ones the resume can't answer: can she work inside someone else's system, translate ambiguous business input into technical decisions, take correction without getting defensive, and does her "agentic systems" language hold up under pressure. Design the process around those, not around a rebuild of the Employee Creator App.

**1. "Extend, don't build" async take-home (2–3 hrs, hard cap)**
Give her a small, deliberately unfamiliar existing codebase -not greenfield -with an underspecified feature request (e.g., "add a filter to this list view" with no spec on edge cases). Ask her to match existing conventions rather than impose her own architecture. This is the single most important exercise for this candidate specifically: every project on her resume is solo and from-scratch, so nothing proves she can be productive inside someone else's code on day one, which is what the actual job will be. Good signal: she reads the existing patterns before writing anything and asks 1–2 sharp clarifying questions instead of guessing. Bad signal: she rewrites half the file to match "her" style.

**2. A broken PR to diagnose and review (45–60 min, live or async)**
Hand her a small pull request with a real bug -ideally one with an accessibility regression, since she's staked a claim on accessibility work in her Startmate and freelance experience. Ask her to find the bug, fix it, and leave review comments as if she were the reviewer, not the author. This tests debugging under someone else's assumptions and quietly checks whether the accessibility expertise on her resume is real competency or resume language.

**3. Ambiguous spec → trade-off memo → minimal build (this is the one that tests her claimed differentiator)**
Give her a loosely defined feature brief with competing stakeholder needs baked in -e.g., "add bulk account deactivation, but support wants a confirmation step, engineering wants it rate-limited, and the customer wants it to be one click." Ask for a short written trade-off note (half a page, not a doc) before any code, then a minimal implementation of whatever she decided. This is the direct test of "product design/business chops" -it's not really a coding test, it's checking whether she can turn ambiguity into a defensible technical decision, which is exactly what her design background is supposed to buy you over a pure-CS junior.

**4. Live pairing session with a deliberate mid-task curveball (60–90 min)**
Sit with her on something small and, partway through, change the requirement ("actually, admins also need to undo this"). You're not grading the code here -you're watching whether she gets flustered, argues, or adapts; whether she asks good questions when the ground shifts; and how she responds to real-time feedback ("try it this way instead"). This is the most direct trainability/adaptability signal you can get, and it's cheap -no take-home grading required.

**5. Make her defend the Peritia/agentic-systems claim, live, unscripted**
Don't accept the resume bullet at face value -ask her to walk through it and follow up hard: what specifically did she write versus fork, what does "orchestration authoring" mean concretely, what broke and how did she debug it. This isn't a coding test, it's a bluff-check on the vaguest line on her resume. Watch for whether she can say "I don't know" or "that part was mostly configuration, not novel code" -intellectual honesty here is a stronger trainability signal than a perfect answer.

**6. Explicitly permit and observe AI-tool use on one task**
Given where the market's judging juniors now, give her one small task and tell her upfront to use Claude Code/Copilot/whatever she normally uses. Don't evaluate the code quality alone -evaluate whether she reviews and catches what the AI gets wrong, or just ships whatever it outputs. That's the actual skill mid-sized companies need from a 2026 junior: supervising AI output, not typing code by hand.

**What I'd skip:** another solo greenfield build (already proven), a take-home longer than 2–3 hours (burns her time for marginal extra signal and reads badly in a market where candidates are doing this dozens of times over), and anything unpaid that takes a full day -if you want more than a few hours of her time, pay for it or fold it into a paid trial day instead. Given how much padding she's had to do to make freelance gig work look like commercial experience, a company that respects candidates' time here will also read well to her if she's evaluating you back.

---

> Q: If you were to tell this candidate what kind of project on their portfolio would make you consider hiring them, what would you tell them to make?

If I were coaching her directly, I'd tell her to stop building another solo CRUD app -she's already proven she can do that -and build the one thing her current portfolio has zero evidence of: **something with real users where she wasn't the only person who touched the codebase or defined the requirements.**

Here's the specific project I'd point her toward, in order of what closes the biggest gaps:

**1. Find a real, narrow problem and ship it to actual users -not a simulated one.**
Not "an employee management app" or "a note-taking app," but something solving a genuine pain point for 5–20 real people: a tool for a friend's small business, an internal thing for MIXSOC alumni, a utility for other bootcamp grads job-hunting. The requirement is real users, even a handful, because that's what generates the thing her portfolio currently can't show: unglamorous edge cases she didn't anticipate, a bug report from someone she doesn't control, a feature request that conflicts with her original design. That loop -build, ship, get pushback, revise -is the actual signal a hiring manager wants and it's the direct payoff of her design/business background, which right now is asserted on the resume but not demonstrated in the code. A polished solo app proves she can execute a spec. A small live tool with real feedback proves she can _own a product decision._

**2. Get one real pull request merged into someone else's open-source repo.**
This is the cheapest, fastest fix for the single biggest hole in her current portfolio: everything she's built is greenfield and solo. A real merged PR -even a small one, a bug fix or a documented feature -to a project with actual maintainers proves she can read unfamiliar code, follow someone else's conventions, and survive a code review from a stranger who owes her nothing. That's a much stronger version of the internship signal she already has, and it costs her a weekend, not a month.

**3. Turn "agentic systems" from a resume line into something she can demo and defend.**
Right now that's the vaguest, most skippable-sounding part of her resume. I'd tell her: build one small, narrow AI feature -not another orchestration framework -with an actual eval set she wrote herself, showing before/after behavior and where it still fails. Something like "an agent that triages support tickets" with 20 test cases and a written note on its failure modes is worth more than a paragraph about "custom skill authoring," because it's checkable in five minutes and it directly proves she can supervise and evaluate AI output rather than just wire an API -which, per what employers are actually filtering for in 2026, is now the actual job description for a junior.

What I'd explicitly tell her _not_ to build: anything else that looks like the Employee Creator App. She's already banked that credibility. A fourth solo, spec-driven, no-external-feedback project adds almost nothing new -it just proves the same thing twice.
