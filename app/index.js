const configurator = document.getElementById("configurator");
const visualisation = document.getElementById("visualisation");
const footerPanel = document.getElementById("footerPanel");
const body = document.getElementsByTagName("body");

let isVisualisatioVisible = false;

visualisation.addEventListener('mouseenter', () => {
  if (!isVisualisatioVisible) {
    configurator.classList.add("moveConfigRight")
  }
})

visualisation.addEventListener('mouseleave', () => {
  configurator.classList.remove("moveConfigRight");
})

configurator.addEventListener('mouseenter', () => {
  if (isVisualisatioVisible) {
    configurator.classList.add("moveConfigLeft");
  }
})

configurator.addEventListener('mouseleave', () => {
  configurator.classList.remove("moveConfigLeft");
})

visualisation.addEventListener('click', () => {
  isVisualisatioVisible = true;
  configurator.classList.remove("moveConfigRight");

  if (isVisualisatioVisible) {
    visualisation.classList.add("activeVisualisation");
    configurator.classList.add("hiddenConfig");
    footerPanel.classList.add("hiddenFooterPanel");
    body[0].classList.add("bodyScroll");
  }
})

configurator.addEventListener('click', () => {
  configurator.classList.remove("moveConfigLeft");
  if (isVisualisatioVisible) {
    visualisation.classList.remove("activeVisualisation");
    configurator.classList.remove("hiddenConfig");
    footerPanel.classList.remove("hiddenFooterPanel");
    body[0].classList.remove("bodyScroll");
  }
  isVisualisatioVisible = false;

})
