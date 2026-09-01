async function loadPartial(placeholderId, fileName) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error(`Failed to load ${fileName}: ${response.status}`);
    }

    const html = await response.text();
    placeholder.innerHTML = html;
  } catch (error) {
    console.error(error);
    placeholder.innerHTML = "";
  }
}

async function loadSharedLayout() {
  await Promise.all([
    loadPartial("header-placeholder", "partials/header.html"),
    loadPartial("footer-placeholder", "partials/footer.html"),
  ]);
}

document.addEventListener("DOMContentLoaded", loadSharedLayout);

// Intersection Observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// Hover tilt effect for cards
const cards = document.querySelectorAll(".tilt-card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");
  });
});

// Custom Cursor
const cursor = document.getElementById("cursor");
if (
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
} else {
  cursor.style.display = "none";
}
