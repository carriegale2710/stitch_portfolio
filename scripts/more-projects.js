const projects = [
  {
    slug: "employee-creator",
    title: "Employee Creator",
    href: "./employee-creator.html",
    image: "../../assets/images/project/employee-creator/hero.png",
  },
  {
    slug: "indigenous-library",
    title: "Indigenous Library",
    href: "./indigenous-library.html",
    image: "../../assets/images/project/indigenous-library/hero.png",
  },
  {
    slug: "trivia",
    title: "Trivia",
    href: "./trivia.html",
    image: "../../assets/images/project/trivia/hero.png",
  },
];

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const currentSlug = document.body.dataset.projectSlug;
const relatedProjects = projects.filter(({ slug }) => slug !== currentSlug);
const target = document.getElementById("more-projects-placeholder");

if (target) {
  target.outerHTML = `
    <section class="border-t border-brand-slate/20 py-12 md:py-16" aria-labelledby="more-projects-heading">
      <div class="flex flex-col gap-8">
        <div>
          <p class="section-number">More work</p>
          <h2 id="more-projects-heading" class="section-heading">Explore another project</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${relatedProjects
            .map(
              (project) => `
            <a class="group border border-brand-slate bg-brand-card/50 p-3 transition-colors hover:bg-brand-slate hover:text-brand-bg" href="${escapeHtml(project.href)}">
              <img class="aspect-video w-full object-cover border border-brand-slate/50" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project preview" />
              <div class="flex items-start justify-between gap-4 p-3 pb-1">
                <h3 class="font-mono text-base font-bold text-brand-sage group-hover:text-brand-bg">${escapeHtml(project.title)}</h3>
                <span aria-hidden="true">↗</span>
              </div>
            </a>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}
