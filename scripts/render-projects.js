// scripts/render-projects.js

async function loadProjects() {
  const res = await fetch("data/projects.json");
  if (!res.ok) {
    console.error("Failed to load projects:", res.status, res.statusText);
    return;
  }
  const projects = await res.json();
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

  article.innerHTML = `
    <a href="${escapeHtml(project.pageUrl)}" class="block">
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

function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", loadProjects);
