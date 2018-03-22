const body = document.getElementsByTagName("body");
const configurator = document.getElementById("configurator");
const visualisation = document.getElementById("visualisation");
const visualisationImg = document.getElementById("visualisationImg");
const footerPanel = document.getElementById("footerPanel");
const accordion = document.getElementById("accordion");

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
    visualisationImg.classList.add("visualisationImgActive");
    configurator.classList.add("hiddenConfig");
    footerPanel.classList.add("hiddenFooterPanel");
    accordion.classList.add("activeAccordion")
    body[0].classList.add("bodyScroll");
  }
})

configurator.addEventListener('click', () => {
  configurator.classList.remove("moveConfigLeft");
  if (isVisualisatioVisible) {
    visualisation.classList.remove("activeVisualisation");
    visualisationImg.classList.remove("visualisationImgActive");
    configurator.classList.remove("hiddenConfig");
    footerPanel.classList.remove("hiddenFooterPanel");
    accordion.classList.remove("activeAccordion")
    body[0].classList.remove("bodyScroll");
  }
  isVisualisatioVisible = false;

})
