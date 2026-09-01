# Tailwind + JSON Portfolio Prototype

A minimal, no‑build prototype that shows how to:

- Load project data from a JSON file
- Dynamically render project cards with vanilla JavaScript
- Style everything with Tailwind CSS via CDN (no build step)

## What this example demonstrates

- **Modular data:** All project content lives in `data/projects.json`. You can add, remove, or edit projects without touching HTML or JS.
- **Dynamic rendering:** `scripts/render-projects.js` fetches the JSON and creates HTML cards at runtime.
- **Tailwind styling:** The UI uses Tailwind utility classes loaded via CDN, so there's no Node, npm, or build tooling required.

## File structure

```text
tailwind-json-portfolio-prototype/
  index.html
  data/
    projects.json
  scripts/
    render-projects.js
  README.md
```

## How to run

1. Put this folder on your computer.
2. Open `index.html` in a browser **via a local server** (required for `fetch()` to work):
   - VS Code: use the "Live Server" extension and click "Go Live".
   - Or run: `npx serve .` or `python -m http.server` in this directory.
3. Visit `http://localhost:...` and you should see a grid of project cards.

## How to customize

- **Add/edit projects:** Open `data/projects.json` and modify the array.
- **Change layout/styles:** Edit utility classes in `index.html` and `scripts/render-projects.js`.
- **Add more sections:** Copy the pattern (container + JS loader) for other dynamic sections (e.g., posts, testimonials).

## Next steps

Once you're comfortable:

- Split header/footer into separate HTML fragments and load them with a small loader.
- Add filtering by tags.
- Migrate to a static site generator (Eleventy, Astro) when you want server‑side rendering and more structure.
