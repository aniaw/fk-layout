const body = document.getElementsByTagName("body");
const configurator = document.getElementById("configurator");
const visualisation = document.getElementById("visualisation");
const accessories = document.getElementById("accessories");
const visualisationImg = document.getElementById("visualisationImg");
const footerPanel = document.getElementById("footerPanel");
const accordion = document.getElementById("accordion");
const accessoriesButton = document.getElementById("accessoriesButton");

let isVisualisatioVisible = false;
let isConfigVisible = true;

const showVisualisation = () => {
  isVisualisatioVisible = true;
  configurator.classList.remove("moveTabRight");
  accessories.classList.remove("moveTabRight");

  if (isVisualisatioVisible) {
    visualisation.classList.add("activeVisualisation");
    visualisationImg.classList.add("visualisationImgActive");

    configurator.classList.add("hiddenTab");
    accessories.classList.add("hiddenTab");

    footerPanel.classList.add("hiddenFooterPanel");
    accordion.classList.add("activeAccordion")
    body[0].classList.add("bodyScroll");
  }
}
const hideVisualisation = () => {
  configurator.classList.remove("moveTabLeft");
  accessories.classList.remove("moveTabLeft");

  if (isVisualisatioVisible) {
    visualisation.classList.remove("activeVisualisation");
    visualisationImg.classList.remove("visualisationImgActive");

    configurator.classList.remove("hiddenTab");
    accessories.classList.remove("hiddenTab");

    footerPanel.classList.remove("hiddenFooterPanel");
    accordion.classList.remove("activeAccordion")
    body[0].classList.remove("bodyScroll");
  }
  isVisualisatioVisible = false;
}

// VISUALISATION

visualisation.addEventListener('mouseenter', () => {
  if (!isVisualisatioVisible) {
    configurator.classList.add("moveTabRight")
    accessories.classList.add("moveTabRight")
  }
})

visualisation.addEventListener('mouseleave', () => {
  configurator.classList.remove("moveTabRight");
  accessories.classList.remove("moveTabRight");
})

// CONFIGURATOR
configurator.addEventListener('mouseenter', () => {
  if (isVisualisatioVisible) {
    configurator.classList.add("moveTabLeft");
  }
})

configurator.addEventListener('mouseleave', () => {
  configurator.classList.remove("moveTabLeft");
})

// ACCESSORIES
accessories.addEventListener('mouseenter', () => {
  if (isVisualisatioVisible) {
    accessories.classList.add("moveTabLeft");
  }
})
accessories.addEventListener('mouseleave', () => {
  accessories.classList.remove("moveTabLeft");
})

visualisation.addEventListener('click', () => {
  showVisualisation();
})

configurator.addEventListener('click', () => {
  hideVisualisation();
})

accessories.addEventListener('click', () => {
  hideVisualisation();
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
