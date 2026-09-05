# Publishing on your own Portfolio Site vs Medium Blog

Short answer: host the canonical case study on your own portfolio, then optionally syndicate to Medium with a proper canonical tag. Your portfolio page is the primary signal; Medium is a distribution channel, not a replacement.

## Option 1 — Portfolio only

**Pros**

- **Full control and branding**: You decide layout, navigation, CTAs, and how the case study connects to your projects, about page, and contact info. [ruul](https://ruul.io/blog/best-portfolio-platforms-freelancers)
- **Strongest hiring signal**: A dedicated project page on your own domain looks like a real product, not a blog post, and matches what 2026 guidance expects for “project details pages” .
- **SEO for your name and projects**: Over time, your own domain can rank for queries like “yourname + project” or niche phrases, and all link equity stays on your site. [ruul](https://ruul.io/blog/best-portfolio-platforms-freelancers)
- **No platform risk**: Your content isn’t tied to Medium’s paywall, UI changes, or policy shifts.

**Cons**

- **No built-in audience**: You must drive traffic yourself (resume, LinkedIn, GitHub, referrals).
- **More setup work**: You need a site, hosting, and basic SEO hygiene.
- **Slower initial discovery**: Without an existing following, a new page may get little organic traffic at first.

**Best when**

- You already have (or are building) a personal site.
- Your main goal is impressing specific recruiters/hiring managers who will click through from your resume or LinkedIn.
- You want the case study to live permanently as part of your portfolio narrative.

## Option 2 — Medium only

**Pros**

- **Built-in distribution**: Medium’s domain authority and internal recommendations can surface your writing to readers who don’t know you yet. [ruul](https://ruul.io/blog/best-portfolio-platforms-freelancers)
- **Low friction**: Fast to publish, clean typography, and easy to share.
- **Good for “thinking” posts**: Works well for essays, lessons learned, or broader technical topics beyond a single project.

**Cons**

- **Weak portfolio signal**: A Medium article reads as “blog post about a project,” not “official project documentation.” It doesn’t replace a proper project page on your site .
- **Limited control**: You can’t fully control layout, navigation, or how the piece connects to your other work.
- **SEO cannibalization risk**: If you publish the full text on Medium without a canonical tag pointing to your site, Medium can outrank your own page for your content. [medium](https://medium.com/career-programming/what-you-need-for-a-great-developer-website-github-and-linkedin-aa42a6e8a018)
- **Paywall complications**: Putting the piece behind Medium’s paywall can interfere with how Google treats the canonical relationship and reduce visibility for hiring managers who hit the paywall. [trylyra](https://www.trylyra.ai/blog/cross-posting-canonical-tags-devto-medium/)

**Best when**

- You don’t have a personal site yet and want to start writing now.
- Your primary goal is audience-building or demonstrating communication skills, not showcasing a specific project as a first-class artifact.

## Option 3 — Both (portfolio + Medium syndication)

This is usually the strongest approach if you’re willing to do it carefully.

**How to do it**

1. **Publish the full case study on your portfolio first.**
   - Let it be indexed for a few weeks before syndicating, if you care about SEO. [webmasters.stackexchange](https://webmasters.stackexchange.com/questions/141632/canonical-copy-showing-way-above-the-original-in-search-results)
2. **Import to Medium using Medium’s import tool** with the original URL.
   - This automatically adds a canonical tag pointing back to your site in most cases. [trylyra](https://www.trylyra.ai/blog/cross-posting-canonical-tags-devto-medium/)
3. **Verify the canonical tag** in the Medium page source to ensure it points to your portfolio URL. [trylyra](https://www.trylyra.ai/blog/cross-posting-canonical-tags-devto-medium/)
4. **Keep the Medium version free** (not paywalled) or at least free for the first couple of weeks so Google can confirm the canonical relationship without access restrictions. [trylyra](https://www.trylyra.ai/blog/cross-posting-canonical-tags-devto-medium/)
5. **Add a short note** at the top or bottom: “Originally published on [your site].” This is a hint, not a replacement for the canonical tag. [onetwothreesend](https://onetwothreesend.com/medium-paywall-import-tool-canonical-urls/)

**Pros**

- **Best of both worlds**: Your portfolio remains the canonical source; Medium acts as a discovery channel.
- **SEO-safe when done right**: With a proper canonical tag, Google should treat your portfolio page as the original and consolidate ranking signals there. [reddit](https://www.reddit.com/r/SEO/comments/elvi6q/medium_post_is_ranked_higher_than_the_original/)
- **Multiple entry points**: Some readers will find you via Medium, others via your site or resume links.

**Cons**

- **Slightly more work**: You must manage two URLs, check canonical tags, and keep them consistent if you update the case study.
- **Residual SEO risk if misconfigured**: If you paste the text manually without a canonical tag, or put it behind a paywall immediately, you can create duplicate-content confusion and let Medium outrank your original. [medium](https://medium.com/career-programming/what-you-need-for-a-great-developer-website-github-and-linkedin-aa42a6e8a018)

**Best when**

- You already have a portfolio site and want extra reach.
- You’re comfortable checking basic SEO details (canonical URL, free vs paywalled).
- You want to demonstrate both engineering judgment (portfolio) and communication skills (Medium essay).

## Recommendation for a junior full‑stack portfolio

For project case studies specifically:

- **Primary**: Always host the canonical project details page on your own portfolio. This is the version you link from your resume, LinkedIn, and GitHub, and the one that aligns with 2026 hiring expectations for “real case studies”. [ruul](https://ruul.io/blog/best-portfolio-platforms-freelancers)
- **Optional secondary**: Syndicate to Medium _only_ as a free post with a correct canonical tag back to your portfolio, ideally after your site version has been live and indexed for a few weeks. [webmasters.stackexchange](https://webmasters.stackexchange.com/questions/141632/canonical-copy-showing-way-above-the-original-in-search-results)

If you must pick one and have no site yet, start with a minimal portfolio (even a single-page site with 2–3 project sections) and treat Medium as a place for broader technical writing, not your main project showcase.
