const translations = {
  es: {
    backHome: "Todas las historias",
    category: "Conocimiento de diamantes",
    heroDeck: "La historia natural dentro de cada piedra y lo que un ojo entrenado descubre al mirar más allá del destello.",
    watchStory: "Ver la historia",
    inThisStory: "En esta historia",
    guideMicroscope: "Bajo el microscopio",
    guideClarity: "La claridad explicada",
    guideEyeClean: "La pregunta eye-clean",
    guideFingerprint: "Una huella natural",
    playFilm: "Ver video",
    inspection: "Inspección gemológica",
    intro: "Cuando observamos un diamante a simple vista, lo primero que solemos notar es su brillo, fuego y destello. Sin embargo, bajo aumento la piedra revela un mundo mucho más detallado, que puede incluir pequeñas características internas conocidas como <em>inclusiones</em>.",
    chapterMicroscope: "Bajo el microscopio",
    microscopeTitle: "Un mundo oculto<br><em>entre las facetas.</em>",
    microscopeBody: "En el video, el diamante se coloca cuidadosamente bajo un microscopio gemológico y se examina con gran aumento. Al ajustar el enfoque y la iluminación, pequeñas características internas se vuelven visibles entre las facetas.",
    darkPoints: "Puntos oscuros",
    crystals: "Cristales",
    clouds: "Nubes",
    feathers: "Plumas",
    lines: "Líneas sutiles",
    termBody: "Aunque informalmente se les describe a veces como “impurezas”, el término gemológico más preciso es inclusiones. Estas características pueden formarse naturalmente mientras un diamante se desarrolla en las profundidades de la Tierra bajo calor y presión extremos. Por eso, cada diamante puede contener su propio patrón interno, casi como una huella natural.",
    chapterClarity: "Cómo afectan las inclusiones a la claridad",
    clarityTitle: "La claridad no es<br><em>un solo número.</em>",
    clarityIntro: "La claridad es una de las 4Cs de la calidad de un diamante, junto con la talla, el color y el peso en quilates. Durante una evaluación profesional, un gemólogo estudia cinco cualidades esenciales de las inclusiones.",
    number: "Cantidad",
    size: "Tamaño",
    type: "Tipo",
    position: "Posición",
    visibility: "Visibilidad",
    positionBody: "Una inclusión cerca del centro del diamante puede ser más fácil de notar que una ubicada cerca del borde. Del mismo modo, una inclusión grande o con fuerte contraste puede afectar más el grado de claridad que varias características microscópicas difíciles de detectar.",
    chapterReading: "Interpretar lo que vemos",
    readingTitle: "¿Interior, superficie<br><em>o reflejo?</em>",
    readingBody: "El microscopio del video permite examinar zonas que serían casi imposibles de evaluar a simple vista. Al cambiar el ángulo de la piedra, la iluminación y el nivel de enfoque, el especialista puede determinar si una característica visible está dentro del diamante, sobre su superficie o es simplemente un reflejo creado por las facetas.",
    inside: "Dentro del diamante",
    surface: "Sobre la superficie",
    reflection: "Reflejo de una faceta",
    chapterProblem: "¿Las inclusiones siempre son un problema?",
    notNecessarily: "No necesariamente.",
    eyeCleanBody: "Muchos diamantes contienen inclusiones naturales que no pueden verse sin aumento. Aun así, pueden lucir completamente limpios a simple vista y mostrar un brillo excepcional. Esto se conoce comúnmente como un <em>diamante eye-clean</em>.",
    underMagnification: "Bajo aumento",
    underMagnificationBody: "Pueden verse pequeñas características naturales.",
    toNakedEye: "A simple vista",
    toNakedEyeBody: "El diamante puede lucir hermosamente limpio.",
    valueBody: "En algunos casos, elegir un diamante eye-clean con pequeñas inclusiones microscópicas ofrece un excelente equilibrio entre belleza y valor. Un grado de claridad impecable puede ser raro y deseable, pero no siempre es necesario para lograr una piedra visualmente extraordinaria.",
    importantBody: "Los factores más importantes son qué tan visibles son las inclusiones, dónde están ubicadas y si interfieren con la transparencia, durabilidad o capacidad del diamante para reflejar la luz.",
    chapterUnique: "Lo que hace único a cada diamante",
    uniqueTitle: "Una huella<br><em>natural.</em>",
    uniqueBody: "Bajo aumento, un diamante se convierte en algo más que una gema pulida. Sus características internas revelan parte de su formación natural y ayudan a distinguirlo de cualquier otra piedra.",
    identifyBody: "Estos detalles también ayudan a los gemólogos a identificar y documentar un diamante específico. Así como no existen dos huellas naturales exactamente iguales, la disposición de las inclusiones puede crear un mapa único que pertenece sólo a esa piedra.",
    inspectionImportance: "El video demuestra por qué la inspección profesional es una parte tan importante de evaluar un diamante. La belleza comienza con lo que podemos ver, pero comprender la piedra exige mirar más profundo.",
    finalThought: "Las inclusiones de un diamante no son simplemente imperfecciones: son evidencia natural de su origen, individualidad y viaje desde las profundidades de la Tierra hasta convertirse en una pieza de joyería.",
    closingLabel: "La perspectiva Indaba",
    closingTitle: "La belleza comienza con lo que vemos.<br><em>Comprender exige mirar más profundo.</em>",
    closingBody: "La elección correcta de claridad no siempre es el grado más raro. Es la que equilibra belleza, confianza y valor para ti.",
    meetGuillermo: "Conoce a Guillermo",
    allStories: "Todas las historias →"
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
    ? "Inclusiones del diamante — La revista Indaba"
    : "Diamond Inclusions — The Indaba Journal";
  localStorage.setItem("indaba-language", next);
}

languageButton.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));

const header = document.querySelector(".journal-header");
const progress = document.querySelector(".reading-progress i");

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${scrollable > 0 ? (scrollY / scrollable) * 100 : 0}%`;
  header.classList.toggle("scrolled", scrollY > 30);
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .1 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

const video = document.querySelector("#journal-video");
const videoFrame = document.querySelector(".video-frame");
const heroPlay = document.querySelector(".video-play");
const controlPlay = document.querySelector(".control-play");
const soundButton = document.querySelector(".control-sound");
const videoProgress = document.querySelector(".video-track i");
const videoTime = document.querySelector(".video-controls time");

function formatTime(seconds) {
  const safeSeconds = Number.isFinite(seconds) ? seconds : 0;
  return `${String(Math.floor(safeSeconds / 60)).padStart(2, "0")}:${String(Math.floor(safeSeconds % 60)).padStart(2, "0")}`;
}

function syncVideoControls() {
  const duration = video.duration || 99;
  videoProgress.style.width = `${duration ? (video.currentTime / duration) * 100 : 0}%`;
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
