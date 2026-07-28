const translations = {
  es: {
    backHome: "Todas las historias",
    category: "Conocimiento de diamantes",
    heroDeck: "La precisión detrás de un diamante excepcional y la geometría oculta que sólo un visor especializado puede revelar.",
    watchStory: "Ver la historia",
    playFilm: "Ver video",
    inspection: "Inspección de precisión",
    intro: "A primera vista, un diamante puede destacar por su brillo. Sin embargo, al examinarlo con un visor especializado, puede revelar algo aún más impresionante: el patrón conocido como <em>Hearts and Arrows</em>.",
    chapterGeometry: "Una geometría oculta",
    geometryTitle: "Ocho flechas arriba.<br><em>Ocho corazones abajo.</em>",
    geometryBody: "Este efecto aparece en diamantes redondos tallados con un nivel excepcional de precisión y simetría. Vistos desde arriba, las facetas crean un patrón parecido a ocho flechas. Desde abajo, pueden observarse figuras con forma de corazón.",
    crownView: "Vista de la corona",
    pavilionView: "Vista del pabellón",
    chapterInspection: "La inspección",
    inspectionTitle: "Mirar más allá<br><em>del primer destello.</em>",
    inspectionBody: "El video muestra el diamante cuidadosamente inspeccionado, primero con una lupa y después con un visor especializado diseñado para evaluar la alineación de sus facetas y revelar su patrón geométrico.",
    inspectionQuote: "El visor hace visible la precisión.",
    chapterPrecision: "Qué crea el patrón",
    precisionTitle: "No el color.<br>No la claridad.<br><em>La precisión.</em>",
    precisionBody: "El efecto Hearts and Arrows no depende únicamente de la claridad o el color de un diamante. Es principalmente el resultado de una talla precisa, proporciones equilibradas y una excelente simetría óptica.",
    preciseCut: "Talla precisa",
    balancedProportions: "Proporciones equilibradas",
    opticalSymmetry: "Simetría óptica",
    chapterResult: "El resultado",
    lightBody: "Cuando estos elementos trabajan juntos, la luz se refleja de forma más uniforme, produciendo mayor brillo, contraste y destello.",
    conclusion: "Más que un hermoso detalle visual, el patrón Hearts and Arrows representa la artesanía, la habilidad y la precisión detrás de un diamante verdaderamente excepcional.",
    closingLabel: "La perspectiva Indaba",
    closingTitle: "La belleza atrae la mirada.<br><em>La precisión la sostiene.</em>",
    closingBody: "Un certificado ofrece información importante. Saber mirar revela el resto.",
    meetGuillermo: "Conoce a Guillermo",
    backTop: "Volver arriba ↑"
  }
};

const english = {};
document.querySelectorAll("[data-copy]").forEach(element => {
  english[element.dataset.copy] = element.innerHTML;
});

const languageButton = document.querySelector(".journal-language");
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
    ? "Hearts and Arrows — La revista Indaba"
    : "Hearts and Arrows — The Indaba Journal";
  localStorage.setItem("indaba-language", next);
}

languageButton.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));

const header = document.querySelector(".journal-header");
const progress = document.querySelector(".reading-progress i");

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const percentage = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
  progress.style.width = `${percentage}%`;
  header.classList.toggle("scrolled", scrollY > 30);
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const video = document.querySelector("#journal-video");
const videoFrame = document.querySelector(".video-frame");
const heroPlay = document.querySelector(".video-play");
const controlPlay = document.querySelector(".control-play");
const soundButton = document.querySelector(".control-sound");
const videoProgress = document.querySelector(".video-track i");
const videoTime = document.querySelector(".video-controls time");

function formatTime(seconds) {
  const safeSeconds = Number.isFinite(seconds) ? seconds : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = Math.floor(safeSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function syncVideoControls() {
  const duration = video.duration || 41;
  const played = duration ? (video.currentTime / duration) * 100 : 0;
  videoProgress.style.width = `${played}%`;
  videoTime.textContent = `${formatTime(video.currentTime)} / ${formatTime(duration)}`;
  controlPlay.textContent = video.paused ? "▶" : "Ⅱ";
  videoFrame.classList.toggle("playing", !video.paused);
}

function toggleVideo() {
  if (video.paused) video.play();
  else video.pause();
}

heroPlay.addEventListener("click", toggleVideo);
controlPlay.addEventListener("click", toggleVideo);
video.addEventListener("click", toggleVideo);
video.addEventListener("play", syncVideoControls);
video.addEventListener("pause", syncVideoControls);
video.addEventListener("timeupdate", syncVideoControls);
video.addEventListener("loadedmetadata", syncVideoControls);
video.addEventListener("ended", syncVideoControls);

soundButton.addEventListener("click", () => {
  video.muted = !video.muted;
  soundButton.textContent = video.muted ? "Muted" : "Sound";
});

setLanguage(language);
