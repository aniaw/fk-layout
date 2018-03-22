const body = document.getElementsByTagName("body");
const configurator = document.getElementById("configurator");
const visualisation = document.getElementById("visualisation");
const accessories = document.getElementById("accessories");
const visualisationImg = document.getElementById("visualisationImg");
const footerPanel = document.getElementById("footerPanel");
const accordion = document.getElementById("accordion");
const accessoriesButton = document.getElementById("accessoriesButton");
const tab = document.getElementById("tab");

let isVisualisatioVisible = false;
let isConfigVisible = true;

const showVisualisation = () => {
  isVisualisatioVisible = true;
  tab.classList.remove("moveTabRight");

  if (isVisualisatioVisible) {
    visualisation.classList.add("activeVisualisation");
    visualisationImg.classList.add("visualisationImgActive");

    tab.classList.add("hiddenTab");

    footerPanel.classList.add("hiddenFooterPanel");
    accordion.classList.add("activeAccordion")
    body[0].classList.add("bodyScroll");
  }
}
const hideVisualisation = () => {
  tab.classList.remove("moveTabLeft");

  if (isVisualisatioVisible) {
    visualisation.classList.remove("activeVisualisation");
    visualisationImg.classList.remove("visualisationImgActive");

    tab.classList.remove("hiddenTab");

    footerPanel.classList.remove("hiddenFooterPanel");
    accordion.classList.remove("activeAccordion")
    body[0].classList.remove("bodyScroll");
  }
  isVisualisatioVisible = false;
}

// VISUALISATION
visualisation.addEventListener('mouseenter', () => {
  if (!isVisualisatioVisible) {
    tab.classList.add("moveTabRight")
  }
})

visualisation.addEventListener('mouseleave', () => {
  tab.classList.remove("moveTabRight");
})

visualisation.addEventListener('click', () => {
  showVisualisation();
})

tab.addEventListener('click', () => {
  hideVisualisation();
})

// TAB
tab.addEventListener('mouseenter', () => {
  if (isVisualisatioVisible) {
    tab.classList.add("moveTabLeft");
  }
})

tab.addEventListener('mouseleave', () => {
  tab.classList.remove("moveTabLeft");
})

accessoriesButton.addEventListener('click', () => {
  if (isConfigVisible) {
    accessories.classList.add("showAccessories");
    configurator.classList.add("hideConfigurator");
  }
  else {
    accessories.classList.remove("showAccessories");
    configurator.classList.remove("hideConfigurator");
  }

  isConfigVisible = !isConfigVisible;
  let isVisualisatioVisible = false;

})
