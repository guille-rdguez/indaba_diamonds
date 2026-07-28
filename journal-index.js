const translations = {
  es: {
    backHome: "Volver al inicio",
    edition: "DIAMANTES, VISTOS DE OTRA MANERA",
    title: "Historias que merecen<br><em>una mirada más cercana.</em>",
    intro: "Videos breves y explicaciones cuidadosas para comprender no sólo cómo se ve un diamante, sino por qué.",
    collectionLabel: "La colección",
    latestStories: "Historias recientes",
    publishedCount: "04 historias publicadas",
    filterAll: "Todas las historias",
    craft: "Oficio y proceso",
    knowledge: "Conocimiento de diamantes",
    microTitle: "Microdiamantes:<br>Pequeñas piedras que exigen una precisión extraordinaria",
    microDeck: "Descubre cómo se inspeccionan, igualan y manipulan a mano pequeños diamantes antes de convertirse en un campo de luz uniforme.",
    polishingTitle: "Cómo se pule un diamante:<br>El proceso detrás de su brillo",
    polishingDeck: "Desde la planificación de la piedra en bruto hasta el acabado final, descubre la precisión que permite al diamante y su engaste reflejar la luz.",
    inclusionsTitle: "Inclusiones del diamante:<br>La historia natural dentro de cada piedra",
    inclusionsDeck: "Mira más allá del destello y descubre el mapa interno único que hace que cada diamante natural sea diferente.",
    openStory: "Abrir historia",
    precision: "Talla y precisión",
    heartsDeck: "La geometría oculta que revela un nivel excepcional de talla, proporción y simetría óptica.",
    nextLabel: "La colección está creciendo",
    nextBody: "Añadiremos nuevos videos y notas de campo, una historia a la vez.",
    ask: "Hazle una pregunta a Guillermo",
    backTop: "Volver arriba"
  }
};

const english = {};
document.querySelectorAll("[data-copy]").forEach(element => {
  english[element.dataset.copy] = element.innerHTML;
});

const languageButton = document.querySelector(".index-language");
let language = localStorage.getItem("indaba-language") || "en";

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-copy]").forEach(element => {
    const key = element.dataset.copy;
    element.innerHTML = next === "es" ? (translations.es[key] || english[key]) : english[key];
  });
  languageButton.querySelectorAll("span").forEach((span, index) => {
    span.classList.toggle("active", (next === "en" && index === 0) || (next === "es" && index === 1));
  });
  document.title = next === "es"
    ? "La revista Indaba — Historias para mirar de cerca"
    : "The Indaba Journal — Stories worth looking closer at";
  localStorage.setItem("indaba-language", next);
}

languageButton.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));

const header = document.querySelector(".index-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 30), { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

document.querySelectorAll(".story-filters button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".story-filters button").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".story-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(language);
