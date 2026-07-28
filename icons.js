(() => {
  const namespace = "http://www.w3.org/2000/svg";
  const icons = {
    "arrow-right": [["path", { d: "M5 12h14" }], ["path", { d: "m13 6 6 6-6 6" }]],
    "arrow-up-right": [["path", { d: "M7 7h10v10" }], ["path", { d: "M7 17 17 7" }]],
    "arrow-down": [["path", { d: "M12 5v14" }], ["path", { d: "m19 12-7 7-7-7" }]],
    "arrow-up": [["path", { d: "m5 12 7-7 7 7" }], ["path", { d: "M12 19V5" }]],
    "x": [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]],
    "play": [["polygon", { points: "6 3 20 12 6 21 6 3" }]],
    "pause": [["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }], ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }]],
    "volume-2": [["path", { d: "M11 5 6 9H2v6h4l5 4z" }], ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }], ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }]],
    "volume-x": [["path", { d: "M11 5 6 9H2v6h4l5 4z" }], ["path", { d: "m22 9-6 6" }], ["path", { d: "m16 9 6 6" }]]
  };

  function createIcon(name) {
    const svg = document.createElementNS(namespace, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.7");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("data-lucide", name);
    svg.classList.add("lucide", `lucide-${name}`);
    icons[name].forEach(([tag, attributes]) => {
      const node = document.createElementNS(namespace, tag);
      Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
      svg.append(node);
    });
    return svg;
  }

  function render(root = document) {
    root.querySelectorAll("[data-lucide]:not(svg)").forEach(placeholder => {
      const name = placeholder.dataset.lucide;
      if (icons[name]) placeholder.replaceWith(createIcon(name));
    });
  }

  window.indabaIcon = (element, name) => {
    if (!element || element.querySelector(`[data-lucide="${name}"]`)) return;
    element.replaceChildren(createIcon(name));
  };

  render();
})();
