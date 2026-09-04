// scripts/render-projects.js

async function loadJsonFile(fileName, label) {
  const res = await fetch(fileName);
  if (!res.ok) {
    console.error(`Failed to load ${label}:`, res.status, res.statusText);
    return null;
  }
  return res.json();
}

async function loadProjects() {
  const projects = await loadJsonFile("data/projects.json", "projects");
  if (!Array.isArray(projects)) return;
  renderProjects(projects);
}

function renderProjects(projects) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = "";

  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className =
    "flex flex-col group gap-4 bg-surface-container-low p-4 border border-outline-variant h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[6px_6px_0px_#101417] tilt-card";
  article.setAttribute("data-project-id", project.id);

  // Image
  let imageHtml = "";
  if (project.image) {
    imageHtml = `
      <div class="border border-outline-variant overflow-hidden shadow-[4px_4px_0px_#101417]">
        <img
          src="${escapeHtml(project.image)}"
          alt="${escapeHtml(project.title)} preview"
          loading="lazy"
          class="w-full object-cover aspect-video hover:scale-105 transition-transform duration-500"
        />
      </div>
    `;
  }

  // Tags
  const tagsHtml = (project.tags || [])
    .map(
      (tag) =>
        `<span 
          class="text-[10px] font-label-md px-2 py-0.5 bg-surface border border-outline-variant text-on-surface-variant"
        >
           ${escapeHtml(tag)}
         </span>`,
    )
    .join("");

  // Links
  const linksHtml = `
    <div class="flex gap-4">
      ${
        project.demoUrl
          ? `<a
          href="${escapeHtml(project.demoUrl)}"
          target="_blank"
          rel="noopener"
          class="text-[11px] font-label-md uppercase tracking-wide text-on-surface-variant mb-2 hover:text-blue-700 hover:underline-offset-4"
        >
          Demo
        </a>`
          : ""
      }
      ${
        project.githubUrl
          ? `<a
          href="${escapeHtml(project.githubUrl)}"
          target="_blank"
          rel="noopener"
          class="text-[11px] font-label-md uppercase tracking-wide text-on-surface-variant mb-2 hover:text-blue-700 hover:underline-offset-4"
        >
          Code
        </a>`
          : ""
      }
    </div>
  `;

  const projectLink = project.pageUrl || "#";

  article.innerHTML = `
    <a href="${escapeHtml(projectLink)}" class="block">
    ${imageHtml}
    </a>
    <div class="flex flex-col flex-grow">
      <h3 class="font-headline-lg text-on-surface mb-2 text-label-md uppercase tracking-wider">
        ${escapeHtml(project.title)}
      </h3>
      <p class="font-body-md text-on-surface-variant text-body-sm mb-4 flex-grow">
        ${escapeHtml(project.description)}
      </p>
      ${linksHtml}
      <div class="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/30 mt-4">
        ${tagsHtml}
      </div>
    </div>
  `;

  return article;
}

async function loadTechStack() {
  const [techStack, technologies] = await Promise.all([
    loadJsonFile("data/techstack.json", "tech stack"),
    loadJsonFile("data/technologies.json", "technologies"),
  ]);

  if (!Array.isArray(techStack)) return;

  renderTechStack(techStack, Array.isArray(technologies) ? technologies : []);
}

function renderTechStack(techStack, technologies) {
  const container = document.querySelector(
    "#tech-stack .grid.grid-cols-1.md\\:grid-cols-3.gap-12",
  );
  if (!container) return;

  const iconByName = new Map(
    technologies.map((technology) => [
      normalizeTechName(technology.title),
      technology.icon,
    ]),
  );

  container.innerHTML = techStack
    .map((group) => {
      const pillsHtml = (group.items || [])
        .map((item, itemIndex) => {
          const name = typeof item === "string" ? item : item.name;
          const symbol = typeof item === "object" ? item.symbol : "code";
          const icon = iconByName.get(normalizeTechName(name));

          return createTechPill(name, symbol, icon, itemIndex + 1);
        })
        .join("");

      return `
        <div class="flex flex-col gap-6">
          <h3 class="text-label-md font-label-md text-primary uppercase tracking-widest border-b border-surface-variant pb-2">
            ${escapeHtml(group.category)}
          </h3>
          <div class="flex flex-wrap gap-3">
            ${pillsHtml}
          </div>
        </div>
      `;
    })
    .join("");
}

function createTechPill(name, symbol, icon, delayIndex) {
  const iconHtml = icon
    ? `<img src="${escapeHtml(icon)}" alt="" aria-hidden="true" class="w-[18px] h-[18px]" />`
    : `<span class="material-symbols-outlined text-[18px]">${escapeHtml(symbol || "code")}</span>`;

  return `<span
    class="flex items-center gap-2 px-4 py-2 bg-surface-container border border-primary text-on-surface font-label-md text-body-md rounded shadow-[2px_2px_0px_#8ca693] tech-pill"
    style="transition-delay: ${Number(delayIndex) * 0.1}s"
  >${iconHtml}${escapeHtml(name)}</span>`;
}

async function loadExperience() {
  const experiences = await loadJsonFile("data/experiences.json", "experiences");
  if (!Array.isArray(experiences)) return;

  renderExperience(experiences);
}

function renderExperience(experiences) {
  const container = document.querySelector("#experience > .flex.flex-col");
  if (!container) return;

  container.innerHTML = experiences
    .map((experience, index) => createExperienceItem(experience, index))
    .join("");
}

function createExperienceItem(experience, index) {
  const year = getYearFromPeriod(experience.period);
  const highlight = index === 0;
  const dotClass = highlight
    ? "w-16 h-16 rounded-full bg-surface-container-low border-2 border-primary flex items-center justify-center text-primary font-label-md z-10 shadow-[4px_4px_0px_#101417] timeline-dot"
    : "w-16 h-16 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center text-on-surface-variant font-label-md z-10 transition-colors timeline-dot";
  const cardClass = highlight
    ? "bg-surface-container-low border border-tertiary p-8 flex-grow mb-12 shadow-[4px_4px_0px_#424843]"
    : "bg-surface border border-outline-variant p-8 flex-grow mb-12";
  const companyClass = highlight
    ? "text-primary font-label-md mb-4 uppercase tracking-widest"
    : "text-secondary font-label-md mb-4 uppercase tracking-widest";

  const descriptionItems = (experience.description || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
    <div class="flex gap-6 md:gap-12 relative group">
      <div class="flex flex-col items-center">
        <div class="${dotClass}" style="transition-delay: ${(index + 1) * 0.2}s">
          ${escapeHtml(year)}
        </div>
        <div class="w-px h-full bg-outline-variant absolute top-16 bottom-0 left-8 -translate-x-1/2 group-last:hidden timeline-line" style="transition-delay: ${(index + 2) * 0.2}s"></div>
      </div>
      <div class="${cardClass}">
        <h3 class="text-headline-lg-mobile font-headline-lg text-on-surface mb-1">
          ${escapeHtml(experience.title)}
        </h3>
        <p class="${companyClass}">
          ${escapeHtml(experience.company)}
        </p>
        <p class="text-label-md font-label-md text-on-surface-variant mb-4">
          ${escapeHtml(experience.period)} · ${escapeHtml(experience.location)}
        </p>
        <ul class="list-disc pl-5 text-body-md font-body-md text-on-surface-variant space-y-2">
          ${descriptionItems}
        </ul>
      </div>
    </div>
  `;
}

async function loadEducation() {
  const education = await loadJsonFile("data/education.json", "education");
  if (!Array.isArray(education)) return;

  renderEducation(education);
}

function renderEducation(education) {
  const container = document.querySelector("#education > .flex.flex-col");
  if (!container) return;

  container.innerHTML = education
    .map((entry, index) => createEducationItem(entry, index))
    .join("");
}

function createEducationItem(entry, index) {
  const year = entry.year || entry.yearCompleted || getYearFromPeriod(entry.period);
  const highlight = index === 0;
  const dotClass = highlight
    ? "w-16 h-16 rounded-full bg-surface-container-low border-2 border-primary flex items-center justify-center text-primary font-label-md z-10 shadow-[4px_4px_0px_#101417] timeline-dot"
    : "w-16 h-16 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center text-on-surface-variant font-label-md z-10 transition-colors timeline-dot";
  const cardClass = highlight
    ? "bg-surface-container-low border border-outline-variant p-8 flex-grow mb-12 shadow-[4px_4px_0px_#424843]"
    : "bg-surface border border-outline-variant p-8 flex-grow mb-12";
  const institutionClass = highlight
    ? "text-primary font-label-md mb-4 uppercase tracking-widest"
    : "text-secondary font-label-md mb-4 uppercase tracking-widest";

  return `
    <div class="flex gap-6 md:gap-12 relative group">
      <div class="flex flex-col items-center">
        <div class="${dotClass}" style="transition-delay: ${(index + 1) * 0.2}s">
          ${escapeHtml(year)}
        </div>
        <div class="w-px h-full bg-outline-variant absolute top-16 bottom-0 left-8 -translate-x-1/2 group-last:hidden timeline-line" style="transition-delay: ${(index + 2) * 0.2}s"></div>
      </div>
      <div class="${cardClass}">
        <h3 class="text-headline-lg-mobile font-headline-lg text-on-surface mb-1">
          ${escapeHtml(entry.program)}
        </h3>
        <p class="${institutionClass}">
          ${escapeHtml(entry.institution)}
        </p>
        <p class="text-label-md font-label-md text-on-surface-variant mb-3">
          ${escapeHtml(entry.period)}
        </p>
        <p class="text-body-md font-body-md text-on-surface-variant">
          ${escapeHtml(entry.details)}
        </p>
      </div>
    </div>
  `;
}

function getYearFromPeriod(period) {
  if (typeof period !== "string") return "----";
  const years = period.match(/\d{4}/g);
  return years && years.length > 0 ? years[0] : "----";
}

function normalizeTechName(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  void Promise.all([
    loadProjects(),
    loadTechStack(),
    loadExperience(),
    loadEducation(),
  ]);
});
