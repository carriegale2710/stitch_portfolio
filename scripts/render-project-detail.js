function escapeProjectHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setProjectText(id, value) {
  document.getElementById(id).textContent = value;
}

function setProjectProp(id, prop, value) {
  document.getElementById(id)[prop] = value;
}

function renderList(id, items, template) {
  document.getElementById(id).innerHTML = items.map(template).join("");
}

async function loadProjectDetail() {
  const body = document.body;
  const response = await fetch(body.dataset.projectData);
  if (!response.ok) throw new Error(`Project data failed: ${response.status}`);
  const project = await response.json();
  const links = project.proofLinks;
  const demo = links.find((link) =>
    link.label.toLowerCase().startsWith("live demo"),
  );
  const repository = links.find(
    (link) => link.label.toLowerCase() === "repository",
  );

  document.title = `${project.meta.title} - Maker.Dev`;
  document.getElementById("page-description").content = project.pitch;
  setProjectText("project-title", project.meta.title);
  setProjectText("project-pitch", project.pitch);
  setProjectText(
    "project-meta",
    `${project.meta.myRole} / ${project.meta.teamSize} developer${project.meta.teamSize === 1 ? "" : "s"} / ${project.meta.techStack.join(" / ")}`,
  );
  setProjectProp("demo-link", "href", demo.url);
  setProjectProp("repo-link", "href", repository.url);
  setProjectProp("project-image", "src", body.dataset.projectImage);
  setProjectText("problem", project.problem);

  renderList(
    "decisions",
    project.architectureDecisions,
    (
      item,
      index,
    ) => `<article class="border border-brand-slate bg-brand-card/50 p-6">
            <span class="font-mono text-xs text-brand-slate">Decision ${String(index + 1).padStart(2, "0")}</span>
            <h3 class="font-mono text-lg font-bold text-brand-sage mt-5">${escapeProjectHtml(item.decision)}</h3>
            <div class="mt-4 space-y-4 text-sm leading-relaxed text-on-surface-variant"> 
                <p><strong>Why:</strong> ${escapeProjectHtml(item.why)}</p>
                <p><strong>Trade-off:</strong> ${escapeProjectHtml(item.tradeoff)}</p>
            </div>
        </article>`,
  );

  renderList(
    "hardest",
    [
      project.hardestProblem.issue,
      project.hardestProblem.diagnosis,
      project.hardestProblem.fix,
      project.hardestProblem.result,
    ],
    (text) => `<p>${escapeProjectHtml(text)}</p>`,
  );
  document.getElementById("hardest").classList.add("space-y-5");

  renderList(
    "metrics",
    project.outcome.metrics,
    (metric) => `<article class="border border-brand-slate p-6">
            <p class="font-mono text-xs uppercase text-brand-slate">${escapeProjectHtml(metric.label)}</p>
            <p class="text-lg leading-relaxed text-on-surface-variant mt-8">${escapeProjectHtml(metric.value)}</p>
        </article>`,
  );

  setProjectText(
    "limitations",
    `Known limitations: ${project.outcome.limitations}`,
  );

  renderList(
    "different",
    project.whatIdDoDifferently,
    (item) =>
      `<li class="border-l-2 border-brand-sage pl-5">${escapeProjectHtml(item)}</li>`,
  );

  renderList(
    "proof-links",
    links,
    (
      link,
    ) => `<a class="border border-brand-slate p-5 font-mono text-sm text-brand-sage hover:bg-brand-slate hover:text-brand-bg transition-colors" 
            href="${escapeProjectHtml(link.url)}" 
            target="_blank" 
            rel="noopener"
            >
            ${escapeProjectHtml(link.label)} 
            <span aria-hidden="true">↗</span>
        </a>`,
  );

  setProjectText(
    "ai-disclosure",
    project.aiDisclosure.disclosed
      ? project.aiDisclosure.note
      : "AI usage has not been documented for this project. Update this only with an accurate account of tools and manually authored work.",
  );
}

document.addEventListener("DOMContentLoaded", () =>
  loadProjectDetail().catch((error) => {
    console.error(error);
    setProjectText("project-title", "Project data unavailable");
  }),
);
