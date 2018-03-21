const configurator = document.getElementById("configurator");
const vi = document.getElementById("vi");
const viContent = document.getElementById("viContent");
const footerPanel = document.getElementById("footerPanel");
const body = document.getElementsByTagName("body");
const shake = document.getElementById("shake");

shake.addEventListener(
  "click",
  function () {
    const scrollPositon = window.scrollY;
    requestAnimationFrame(() => {
      window.scrollY = scrollPositon;
      console.log('raf')
    });
    console.log('classes')
    vi.classList.add("activeVisual");
    viContent.classList.add("viContent");
    configurator.classList.add("hiddenConfig");
    footerPanel.classList.add("hiddenFP");
    body[0].classList.add("bodyOverflow");
  },
  true
);

shake.addEventListener("dblclick", function () {
  vi.classList.remove("activeVisual");
  viContent.classList.remove("viContent");
  configurator.classList.remove("hiddenConfig");
  footerPanel.classList.remove("hiddenFP");
  body[0].classList.remove("bodyOverflow");
});

shake.addEventListener('mouseenter', () => {
  shake.classList.add("shakeActive");
})
shake.addEventListener('mouseleave', () => {
  shake.classList.remove("shakeActive");
})
