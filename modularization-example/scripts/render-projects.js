// scripts/render-projects.js

async function loadProjects() {
  const res = await fetch('data/projects.json');
  if (!res.ok) {
    console.error('Failed to load projects:', res.status, res.statusText);
    return;
  }
  const projects = await res.json();
  renderProjects(projects);
}

function renderProjects(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = '';

  projects.forEach(project => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className =
    'group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md';
  article.setAttribute('data-project-id', project.id);

  // Image
  let imageHtml = '';
  if (project.image) {
    imageHtml = `
      <div class="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src="${escapeHtml(project.image)}"
          alt="${escapeHtml(project.title)} preview"
          loading="lazy"
          class="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
    `;
  }

  // Tags
  const tagsHtml = (project.tags || [])
    .map(
      tag =>
        `<span class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
           ${escapeHtml(tag)}
         </span>`
    )
    .join('');

  // Links
  const linksHtml = `
    <div class="flex gap-4">
      ${project.liveUrl ?
        `<a
          href="${escapeHtml(project.liveUrl)}"
          target="_blank"
          rel="noopener"
          class="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
        >
          Live
        </a>` : ''}
      ${project.repoUrl ?
        `<a
          href="${escapeHtml(project.repoUrl)}"
          target="_blank"
          rel="noopener"
          class="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
        >
          Repo
        </a>` : ''}
    </div>
  `;

  article.innerHTML = `
    ${imageHtml}
    <div class="flex flex-1 flex-col gap-3 p-4">
      <h3 class="text-base font-semibold text-gray-900">
        ${escapeHtml(project.title)}
      </h3>
      <p class="text-sm leading-relaxed text-gray-600">
        ${escapeHtml(project.description)}
      </p>
      <div class="flex flex-wrap gap-2">
        ${tagsHtml}
      </div>
      ${linksHtml}
    </div>
  `;

  return article;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', loadProjects);
