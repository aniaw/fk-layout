const configurator = document.getElementById("configurator");
const vi = document.getElementById("vi");
const viContent = document.getElementById("viContent");
const footerPanel = document.getElementById("footerPanel");
const body = document.getElementsByTagName("body");

configurator.addEventListener(
  "mouseenter",
  function() {
    vi.classList.add("activeVisual");
    // viContent.classList.add("activeViContent");
    configurator.classList.add("hiddenConfig");
    footerPanel.classList.add("hiddenFP");
    body[0].classList.add("bodyOverflow");
  },
  true
);

configurator.addEventListener("click", function() {
  vi.classList.remove("activeVisual");
  // viContent.classList.remove("activeViContent");
  configurator.classList.remove("hiddenConfig");
  footerPanel.classList.remove("hiddenFP");
  body[0].classList.remove("bodyOverflow");
});
