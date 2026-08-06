const conversionOrder = [
  ".hero",
  ".trust-strip",
  ".meet",
  ".approach",
  ".craft",
  ".diamond-dialogue",
  ".opening",
  ".credentials",
  ".story",
  ".purpose",
  ".journal-spotlight",
  ".faq",
  ".final-cta"
];
const main = document.querySelector("main");
conversionOrder.forEach(selector => {
  const section = main.querySelector(selector);
  if (section) main.appendChild(section);
});

const translations = {
  es: {
    navMeet: "Conoce a Guillermo", navApproach: "El acompañamiento", navStory: "Su historia", navJournal: "Revista", navBook: "Agenda una conversación",
    heroEyebrow: "Videollamada gratuita · Personalmente con Guillermo", heroLine1: "Esto no se trata de venderte", heroLine2: "un diamante.",
    heroBody: "Se trata de comprender tu historia y encontrar el diamante que pertenece a ella.", begin: "Conoce a<br>Guillermo", personally: "Guiado personalmente por Guillermo", scroll: "Desliza para conocerlo",
    trustYears: "Años en el banco de joyero", trustGia: "Gemólogo graduado", trustBoth: "Natural y de laboratorio", trustRegion: "Orientación personal sin fronteras",
    chapterConversation: "La conversación", openingSide: "Antes de quilates, cortes o certificados, hay algo más importante.", openingQuestion: "¿Para quién estás eligiendo?",
    choiceProposal: "Una propuesta", choiceTogether: "Lo elegimos juntos", choiceMilestone: "Un momento importante", choiceUnsure: "Aún lo estoy descubriendo",
    answerLead: "Bien. Ahí comienza nuestra conversación.", answerProposal: "Cuéntale a Guillermo sobre la persona, el momento y lo que quieres que signifique.",
    answerTogether: "Tomarán la decisión juntos, con claridad y sin presión. Guillermo los ayudará a reconocer lo que realmente importa.",
    answerMilestone: "Los grandes momentos merecen algo con significado, creado para recordar no sólo cuándo, sino por qué.",
    answerUnsure: "No tienes que llegar con todas las respuestas. La primera conversación existe para encontrarlas juntos.",
    chapterGuide: "Tu guía", portraitRole: "Gemólogo · Joyero · Especialista en diamantes", meetEyebrow: "Conoce a la persona detrás de Indaba",
    meetTitle: "La experiencia es conocer diamantes.<br><em>La sabiduría es conocer personas.</em>",
    meetBody: "Durante más de cuatro décadas, Guillermo ha conocido cada lado de un diamante: desde el banco del joyero y la rueda de corte hasta ese momento íntimo en que alguien elige un anillo. Nunca te llevará hacia la opción más costosa. Te llevará hacia la correcta.",
    meetQuote: "“No tengo clientes. Hago nuevos amigos.”", talkGuillermo: "Habla directamente con Guillermo",
    earnedEyebrow: "Una formación construida entre continentes", earnedTitle: "Conoce el recorrido<br>de un diamante porque<br><em>lo ha vivido.</em>",
    dateToday: "HOY", credBoston: "Fabricación y reparación de joyería en North Bennet Street School.", credNewYork: "Clasificación de diamantes y estudios especializados con GIA.",
    credJoburg: "Evaluación, corte y pulido de diamante en bruto en Sudáfrica.", credCanada: "Quince años ayudando a parejas a decidir con información y confianza.",
    chapterApproach: "El método Indaba", approachTitle: "Sin presión.<br>Sin actuaciones.<br><em>Sólo claridad.</em>",
    approachBody: "Natural o de laboratorio. Clásico o totalmente personalizado. Llega con una visión precisa o sólo con una sensación. Guillermo comienza donde tú estés.",
    methodListen: "Escuchamos", methodListenBody: "Tu historia, prioridades, preguntas y esos detalles que lo hacen personal.",
    methodExplain: "Explicamos", methodExplainBody: "Orientación clara y honesta, sin tecnicismos ni presión para gastar más.",
    methodCreate: "Encontramos—o creamos", methodCreateBody: "El diamante certificado y el diseño correctos, pensados para ti.",
    methodDeliver: "Tú eliges", methodDeliverBody: "Con confianza, a tu ritmo y con acompañamiento hasta el momento final.",
    dialogueEyebrow: "Una pregunta que escuchamos con frecuencia", dialogueTitle: "¿Natural o<br>de laboratorio?", diamondNeutral: "No existe una respuesta universal. Sólo la que coincide con tus valores, prioridades e historia. Guillermo te ayudará a comprender ambas opciones, sin prejuicios.",
    natural: "Natural", learnNatural: "Comprende su rareza y origen", lab: "De laboratorio", learnLab: "Explora escala y posibilidades", notSure: "No estoy seguro", learnUnsure: "Es un lugar perfecto para comenzar",
    diamondNatural: "Un diamante natural se formó durante miles de millones de años. Guillermo te ayudará a evaluar su rareza, trazabilidad, carácter y valor sin perder de vista lo que importa para ti.",
    diamondLab: "Un diamante de laboratorio comparte las propiedades esenciales de uno natural y puede ofrecer otras posibilidades de tamaño y diseño. Guillermo te explicará las diferencias con total transparencia.",
    chapterCraft: "De una idea a una pieza para siempre", craftTitle: "No elegido de una vitrina.<br><em>Creado mediante una conversación.</em>",
    craftBody: "Trae un boceto, una imagen guardada, una pieza heredada o sólo una idea. Juntos, la convertimos en algo completamente tuyo.",
    mediaMaking: "En el banco", mediaMakingSub: "La mano humana detrás de cada detalle", mediaVision: "Una idea. Muchas posibilidades.", mediaVisionSub: "Proporciones, piedras y detalles personalizados, vistos desde todos los ángulos",
    mediaDiamond: "Un clásico, reinterpretado", mediaDiamondSub: "Una silueta marquise convertida en algo completamente personal", mediaOne: "Color, con intención", mediaOneSub: "Una piedra distintiva para una historia con carácter propio",
    craftCtaLabel: "¿Tienes una idea o no sabes por dónde comenzar?", craftCtaTitle: "Trae la historia. Guillermo te ayudará a dar forma al resto.",
    chapterStory: "Una vida entre diamantes", storyTitle: "Algunas carreras se planean.<br><em>Ésta se persiguió.</em>",
    archiveEyebrow: "Los años de aprendizaje · 1985—1986", archiveTitle: "Antes de las credenciales,<br><em>estuvo el banco de trabajo.</em>",
    archiveBody: "A los diecinueve años, Guillermo aprendía el oficio reparación por reparación, herramienta por herramienta y gracias a cada maestro generoso. Estas fotografías conservan el comienzo de una vida marcada por la curiosidad y por quienes estuvieron dispuestos a compartir su conocimiento.",
    archiveQuote: "“El oficio se guardaba con mucho celo. Siempre recordaré a quienes decidieron abrirme la puerta.”",
    archivePhoto1: "En el banco, a los 19 años", archivePhoto1Sub: "Van Dell Jewellers · Swampscott, Massachusetts · 1985",
    archivePhoto2: "Aprendiendo junto a Joe B. Calnan", archivePhoto2Sub: "North Bennet Street School · Boston · 1986",
    archivePhoto3: "Con los maestros que compartieron su oficio", archivePhoto3Sub: "Steven Dame · Guillermo González · Joseph B. Calnan",
    archivePhoto4: "Aprender haciendo", archivePhoto4Sub: "Van Dell Jewellers · Swampscott, Massachusetts · 1985",
    storyRootTitle: "Un inicio emprendedor", storyRoot: "Nacido en una familia que creía en la educación, Guillermo aprendió a vender y ahorrar desde los ocho años.",
    storyBenchTitle: "El primer banco", storyBench: "Después de encontrar a los pocos joyeros dispuestos a compartir su oficio, abrió un pequeño taller en Torreón.",
    storyOpportunityTitle: "Crear la oportunidad", storyOpportunity: "Al no encontrar el conocimiento que buscaba, viajó con su familia a Sudáfrica para aprender el corte del diamante desde su origen.",
    storyTodayTitle: "Conocimiento compartido", storyToday: "Hoy utiliza todo lo aprendido para dar a las parejas la orientación que alguna vez tuvo que cruzar continentes para encontrar.",
    purposeEyebrow: "Una compra con propósito", purposeTitle: "Abrir la puerta<br><em>que alguna vez encontró cerrada.</em>",
    purposeBody: "Parte de las futuras ganancias de Indaba ayudará a equipar una escuela de joyería en México y crear becas para quienes de otra manera no podrían aprender el oficio. Cada anillo ayudará a acercar ese sueño.",
    purposeNote: "El programa y su reporte público de impacto se encuentran actualmente en desarrollo.",
    spotlightChapter: "Desde The Indaba Journal", spotlightEyebrow: "Mira más allá del primer destello", spotlightTitle: "Precisión que puedes<br><em>ver por ti mismo.</em>",
    spotlightDeck: "Hearts & Arrows es la geometría oculta que nace de un corte redondo excepcional. Guillermo muestra cómo un visor especializado hace visible esa precisión.",
    spotlightArrows: "flechas arriba", spotlightHearts: "corazones abajo", spotlightLength: "video breve", spotlightRead: "Descubre la historia completa", spotlightCaption: "Inspección de precisión · con Guillermo",
    journalChapter: "La revista Indaba", journalEyebrow: "Historias que merecen mirarse de cerca", journalTitle: "Un poco de conocimiento<br><em>cambia lo que ves.</em>",
    journalIntro: "Videos breves, respuestas honestas y detalles desde el banco de joyero, creados para disfrutarse en lo que terminas un buen café.",
    journalAll: "Todas las historias", journalDiamonds: "Diamantes", journalCraft: "En el banco", journalGuidance: "Guillermo explica", journalStories: "Amor e historias",
    journalWatch: "Ver", journalFilm: "Video breve", journalOpen: "Ver historia", journalCraftTitle: "Del boceto a para siempre: así se crea un anillo",
    journalCraftDeck: "Las pequeñas y precisas decisiones que convierten una idea en algo hecho para trascendernos.",
    journalCloseLook: "Una mirada de cerca", journalDiamondTitle: "Por qué un diamante se mueve distinto en la vida real", journalDiamondDeck: "El certificado describe la piedra. La luz revela su personalidad.",
    journalTwoMinute: "Respuesta en dos minutos", journalClarityQuote: "“El mejor grado de claridad no siempre es la mejor decisión.”", journalClarityTitle: "El grado de claridad por el que sí vale la pena pagar",
    journalClarityDeck: "Dónde importa la rareza, dónde no y qué puede ver realmente tu ojo.", journalReadTime: "3 min de lectura",
    journalProposalTitle: "No comiences por el anillo. Comienza por la persona.", journalProposalDeck: "Cuatro preguntas que hacen que un diseño personalizado se sienta inconfundiblemente suyo.",
    journalProcess: "El proceso", journalRenderTitle: "Antes de que el metal toque el fuego, la idea toma forma", journalRenderDeck: "Una primera mirada al modelo digital que nos permite afinar cada proporción.",
    journalSignoffLabel: "La próxima historia", journalSignoff: "¿Qué te gustaría que Guillermo explicara después?", journalAsk: "Pregúntale a Guillermo",
    journalDialogFooter: "Una nota personal de la revista Indaba", journalClose: "Cerrar historia",
    chapterFaq: "Antes de conversar", faqEyebrow: "Todas las preguntas son bienvenidas", faqTitle: "No necesitas saber<br><em>nada sobre diamantes.</em>",
    faqBody: "Precisamente para eso está Guillermo. La primera conversación es para comprender, no para decidir.",
    faqOneQ: "¿Qué sucede durante la primera conversación?", faqOneA: "Te reúnes directamente con Guillermo por videollamada. Él escucha tu historia, prioridades y preguntas, y después explica los siguientes pasos con claridad. La consulta es gratuita y sin presión.",
    faqTwoQ: "¿Debo elegir primero entre natural o de laboratorio?", faqTwoA: "No. Indaba trabaja con ambos. Guillermo explicará las diferencias con honestidad y te ayudará a decidir qué opción coincide con tus valores y prioridades.",
    faqThreeQ: "¿Podemos crear algo completamente personalizado?", faqThreeA: "Sí. Puedes traer un boceto, una referencia, una pieza existente o simplemente una idea. Guillermo puede orientarte en la selección del diamante y en todo el proceso de diseño personalizado.",
    faqFourQ: "¿Mi diamante estará certificado?", faqFourA: "Sí. La certificación y las características relevantes de tu diamante se explicarán claramente antes de que tomes una decisión.",
    faqFiveQ: "¿Guillermo puede ayudar a clientes de Canadá y Estados Unidos?", faqFiveA: "Sí. Las consultas están disponibles en inglés o español para clientes de Canadá y Estados Unidos.",
    finalEyebrow: "Gratuita · Personal · Sin presión", finalTitle: "Toda historia de amor comienza<br><em>con una conversación.</em>",
    finalBody: "Tu primera videollamada será directamente con Guillermo, en inglés o español.", bookFree: "Agenda tu conversación gratuita", comingSoon: "Opciones de contacto directo próximamente",
    footerTag: "Toda historia de amor comienza con una conversación.", bookingEyebrow: "Antes de conocernos", bookingStart: "Comencemos con tu historia.",
    bookingStartBody: "Unas preguntas cuidadosas ayudarán a Guillermo a hacer más útil su primera conversación.", continue: "Continuar", bookingLooking: "¿Qué estás buscando?",
    bookingEngagement: "Un anillo de compromiso", bookingCustom: "Un diseño personalizado", bookingGuidance: "Orientación sobre un diamante", bookingOther: "Algo diferente",
    bookingReady: "Tu conversación", bookingReadyTitle: "Reúnete personalmente con Guillermo.", bookingReadyBody: "Aquí aparecerá el calendario en vivo. Tu consulta es gratuita y está disponible en inglés o español.",
    calendarSoon: "Conexión de agenda lista para agregar", closePreview: "Cerrar vista previa"
  }
};

const english = {};
document.querySelectorAll("[data-i18n]").forEach(el => english[el.dataset.i18n] = el.innerHTML);

const languageButtons = document.querySelectorAll(".language-toggle");
let language = localStorage.getItem("indaba-language") || "en";

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = next === "es" ? (translations.es[key] || english[key]) : english[key];
  });
  languageButtons.forEach(button => {
    button.querySelectorAll("span").forEach((span, index) => span.classList.toggle("active", (next === "en" && index === 0) || (next === "es" && index === 1)));
  });
  document.title = next === "es" ? "Indaba Diamonds — El diamante correcto para tu historia" : "Indaba Diamonds — The right diamond for your story";
  localStorage.setItem("indaba-language", next);
  refreshInteractiveCopy();
}

languageButtons.forEach(button => button.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en")));

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 30), { passive: true });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  mobileMenu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("no-scroll", open);
});
mobileMenu.querySelectorAll("a,button").forEach(item => item.addEventListener("click", () => {
  mobileMenu.classList.remove("open"); document.body.classList.remove("no-scroll"); menuToggle.setAttribute("aria-expanded", "false");
}));

const responses = {
  proposal: { en: "Tell Guillermo about the person, the moment, and what you want it to mean.", es: translations.es.answerProposal },
  together: { en: "You'll make the decision together, with clarity and no pressure. Guillermo will help you recognize what truly matters.", es: translations.es.answerTogether },
  milestone: { en: "Meaningful moments deserve something made to remember not only when, but why.", es: translations.es.answerMilestone },
  unsure: { en: "You don't need to arrive with every answer. The first conversation exists to find them together.", es: translations.es.answerUnsure }
};
let currentChoice = "proposal";
document.querySelectorAll(".choice").forEach(button => button.addEventListener("click", () => {
  currentChoice = button.dataset.choice;
  document.querySelectorAll(".choice").forEach(item => item.classList.toggle("active", item === button));
  document.querySelector("#choice-response").textContent = responses[currentChoice][language];
}));

const diamondCopy = {
  unsure: {
    en: "There is no universal right answer. Only the answer that fits your values, priorities and story. Guillermo will help you understand both—without bias.",
    es: translations.es.diamondNeutral
  },
  natural: {
    en: "A natural diamond formed over billions of years. Guillermo will help you evaluate its rarity, traceability, character and value—without losing sight of what matters to you.",
    es: translations.es.diamondNatural
  },
  lab: {
    en: "A lab-grown diamond shares the essential properties of a natural one and can open different possibilities in size and design. Guillermo will explain every difference transparently.",
    es: translations.es.diamondLab
  }
};
let currentDiamond = "unsure";
document.querySelectorAll(".diamond-selector button").forEach(button => button.addEventListener("click", () => {
  currentDiamond = button.dataset.diamond;
  document.querySelectorAll(".diamond-selector button").forEach(item => item.classList.toggle("active", item === button));
  const answer = document.querySelector("#diamond-answer");
  answer.style.opacity = 0;
  setTimeout(() => { answer.textContent = diamondCopy[currentDiamond][language]; answer.style.opacity = 1; }, 180);
}));

function refreshInteractiveCopy() {
  document.querySelector("#choice-response").textContent = responses[currentChoice][language];
  document.querySelector("#diamond-answer").textContent = diamondCopy[currentDiamond][language];
}

function syncVideoButton(button, playing) {
  button.classList.toggle("playing", playing);
  window.indabaIcon(button, playing ? "pause" : "play");
  button.setAttribute("aria-label", `${playing ? "Pause" : "Play"} video`);
}

document.querySelectorAll(".video-toggle").forEach(button => button.addEventListener("click", () => {
  const video = button.parentElement.querySelector("video");
  if (video.paused) {
    video.dataset.userPaused = "false";
    video.play();
    syncVideoButton(button, true);
  } else {
    video.dataset.userPaused = "true";
    video.pause();
    syncVideoButton(button, false);
  }
}));

const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const autoplayVideos = document.querySelectorAll("video[data-autoplay]");
if (!motionReduced && "IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    const video = entry.target;
    const button = video.parentElement.querySelector(".video-toggle");
    if (entry.isIntersecting && video.dataset.userPaused !== "true") {
      video.play().then(() => syncVideoButton(button, true)).catch(() => syncVideoButton(button, false));
    } else if (!entry.isIntersecting) {
      video.pause();
      syncVideoButton(button, false);
    }
  }), { threshold: .45 });
  autoplayVideos.forEach(video => videoObserver.observe(video));
} else {
  autoplayVideos.forEach(video => syncVideoButton(video.parentElement.querySelector(".video-toggle"), false));
}

const dialog = document.querySelector(".booking-dialog");
document.querySelectorAll(".open-booking").forEach(button => button.addEventListener("click", () => {
  if (!dialog.open) dialog.showModal();
}));
function closeDialog() { dialog.close(); }
document.querySelector(".dialog-close").addEventListener("click", closeDialog);
document.querySelector(".dialog-close-link").addEventListener("click", closeDialog);
dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(); });

function goToStep(step) {
  document.querySelectorAll(".booking-step").forEach(item => item.classList.toggle("active", item.dataset.step === String(step)));
  document.querySelector(".booking-progress i").style.width = `${step * 33.333}%`;
}
document.querySelectorAll(".booking-next").forEach(button => button.addEventListener("click", () => goToStep(button.dataset.next)));
document.querySelectorAll(".booking-choices button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".booking-choices button").forEach(item => item.classList.toggle("selected", item === button));
  document.querySelector('.booking-next[data-next="3"]').disabled = false;
}));

const dot = document.querySelector(".cursor-dot");
document.addEventListener("mousemove", event => { dot.style.left = `${event.clientX}px`; dot.style.top = `${event.clientY}px`; dot.style.opacity = 1; });
document.querySelectorAll("a,button").forEach(item => {
  item.addEventListener("mouseenter", () => dot.classList.add("large"));
  item.addEventListener("mouseleave", () => dot.classList.remove("large"));
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(language);
