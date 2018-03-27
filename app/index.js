const body = document.getElementsByTagName("body");
const configurator = document.getElementById("configurator");
const visualisation = document.getElementById("visualisation");
const accessories = document.getElementById("accessories");
const visualisationImg = document.getElementById("visualisationImg");
const footerPanel = document.getElementById("footerPanel");
const accordion = document.getElementById("accordion");
const accordionUnactive = document.getElementById("accordionUnactive");
const accessoriesButton = document.getElementById("accessoriesButton");
const tab = document.getElementById("tab");
const addAccessoriesButton = document.getElementById("addAccessoriesButton");
const backToConfiguratorButton = document.getElementById("backToConfiguratorButton");
const goToSummaryButton = document.getElementById("goToSummaryButton");
const configuratorImg = document.getElementById("configuratorImg");
const accessoriesImg = document.getElementById("accessoriesImg");

let isVisualisatioVisible = false;
let isTabVisible = true;
let isAccordionActive = false;

const showVisualisation = () => {
  tab.classList.remove("moveTabRight");
  visualisationImg.classList.remove("moveImageShake");

  configuratorImg.classList.add('configuratorUnactive');
  accessoriesImg.classList.add('accessoriesUnactive');
  tab.classList.add("hiddenTab");

  visualisation.classList.add("activeVisualisation");
  visualisationImg.classList.add("visualisationImgActive");

  accordionUnactive.classList.add("accordionUnactiveShow")
  body[0].classList.add("bodyScroll");

  isVisualisatioVisible = true;
}
const hideVisualisation = () => {
  tab.classList.remove("moveTabLeft");

  visualisation.classList.remove("activeVisualisation");
  visualisationImg.classList.remove("visualisationImgActive");

  configuratorImg.classList.remove('configuratorUnactive');
  accessoriesImg.classList.remove('accessoriesUnactive');
  tab.classList.remove("hiddenTab");

  accordionUnactive.classList.remove("accordionUnactiveShow")
  accordion.classList.remove("activeAccordion")
  body[0].classList.remove("bodyScroll");

  isVisualisatioVisible = false;
}
const switchTab = () => {
  if (isTabVisible) {
    //show accessories with delay
    setTimeout(() => {
      accessories.classList.add("showAccessories");
    }, 400)
    configurator.classList.add("hideConfigurator");
    accessoriesButton.textContent = "show options"
  }
  else {
    accessories.classList.remove("showAccessories");

    //show configurator with delay
    setTimeout(() => {
      configurator.classList.remove("hideConfigurator");
    }, 400)
    accessoriesButton.textContent = "add accessories"
  }
  isTabVisible = !isTabVisible;
}

//NAVIGATION BUTTONS
addAccessoriesButton.addEventListener('click', () => {
  switchTab();
})
backToConfiguratorButton.addEventListener('click', () => {
  switchTab();
})
goToSummaryButton.addEventListener('click', () => {

})

// VISUALISATION
visualisation.addEventListener('mouseenter', () => {
  if (!isVisualisatioVisible) {
    tab.classList.add("moveTabRight")
    visualisationImg.classList.add("moveImageShake")
  }
})

visualisation.addEventListener('mouseleave', () => {
  tab.classList.remove("moveTabRight");
  visualisationImg.classList.remove("moveImageShake")
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

accordionUnactive.addEventListener('click', () => {
  if (!isAccordionActive) {
    accordion.classList.add("activeAccordion");
  }
  else {
    accordion.classList.remove("activeAccordion");
  }
  isAccordionActive = !isAccordionActive;
})

accessoriesButton.addEventListener('click', () => {
  if (!isVisualisatioVisible) {
    hideVisualisation();
    switchTab();
  }
  else {
    hideVisualisation();
    setTimeout(() => {
      switchTab();
    }, 500)
  }
})
