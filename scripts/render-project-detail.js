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
  document.getElementById("demo-link").href = demo.url;
  document.getElementById("repo-link").href = repository.url;
  setProjectText("problem", project.problem);
  document.getElementById("decisions").innerHTML = project.architectureDecisions
    .map(
      (item, index) =>
        `<article class="border border-brand-slate bg-brand-card/50 p-6"><span class="font-mono text-xs text-brand-slate">Decision ${String(index + 1).padStart(2, "0")}</span><h3 class="font-mono text-lg font-bold text-brand-sage mt-5">${escapeProjectHtml(item.decision)}</h3><p class="text-sm leading-relaxed text-on-surface-variant mt-4"><strong>Why:</strong> ${escapeProjectHtml(item.why)}</p><p class="text-sm leading-relaxed text-on-surface-variant mt-4"><strong>Trade-off:</strong> ${escapeProjectHtml(item.tradeoff)}</p></article>`,
    )
    .join("");
  document.getElementById("hardest").innerHTML = [
    project.hardestProblem.issue,
    project.hardestProblem.diagnosis,
    project.hardestProblem.fix,
    project.hardestProblem.result,
  ]
    .map((text) => `<p>${escapeProjectHtml(text)}</p>`)
    .join("");
  document.getElementById("hardest").classList.add("space-y-5");
  document.getElementById("metrics").innerHTML = project.outcome.metrics
    .map(
      (metric) =>
        `<article class="border border-brand-slate p-6"><p class="font-mono text-xs uppercase text-brand-slate">${escapeProjectHtml(metric.label)}</p><p class="text-lg leading-relaxed text-on-surface-variant mt-8">${escapeProjectHtml(metric.value)}</p></article>`,
    )
    .join("");
  setProjectText(
    "limitations",
    `Known limitations: ${project.outcome.limitations}`,
  );
  document.getElementById("different").innerHTML = project.whatIdDoDifferently
    .map(
      (item) =>
        `<li class="border-l-2 border-brand-sage pl-5">${escapeProjectHtml(item)}</li>`,
    )
    .join("");
  document.getElementById("project-image").src = body.dataset.projectImage;
  document.getElementById("proof-links").innerHTML = links
    .map(
      (link) =>
        `<a class="border border-brand-slate p-5 font-mono text-sm text-brand-sage hover:bg-brand-slate hover:text-brand-bg transition-colors" href="${escapeProjectHtml(link.url)}" target="_blank" rel="noopener">${escapeProjectHtml(link.label)} <span aria-hidden="true">↗</span></a>`,
    )
    .join("");
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
