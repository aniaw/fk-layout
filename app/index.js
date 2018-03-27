const body = document.getElementsByTagName('body');
const configurator = document.getElementById('configurator');
const visualisation = document.getElementById('visualisation');
const accessories = document.getElementById('accessories');
const visualisationImg = document.getElementById('visualisationImg');
const footerPanel = document.getElementById('footerPanel');
const accordion = document.getElementById('accordion');
const accordionUnactive = document.getElementById('accordionUnactive');
const accessoriesButton = document.getElementById('accessoriesButton');
const tab = document.getElementById('tab');
const addAccessoriesButton = document.getElementById('addAccessoriesButton');
const backToConfiguratorButton = document.getElementById('backToConfiguratorButton');
const goToSummaryButton = document.getElementById('goToSummaryButton');
const backToAccessoriesButton = document.getElementById('backToAccessoriesButton');
const configuratorImg = document.getElementById('configuratorImg');
const accessoriesImg = document.getElementById('accessoriesImg');
const shellColorFooter = document.getElementById('shellColorFooter');
const shellColorToScroll = document.getElementById('shellColorToScroll');
const summaryImg = document.getElementById('summaryImg');
const summary = document.getElementById('summary');

let isVisualisatioVisible = false;
let isTabVisible = true;
let isAccordionActive = false;
const tabs = {
  OPTIONS: 'OPTIONS',
  ACCESSORIES: 'ACCESSORIES',
  SUMMARY: 'SUMMARY'
}
let activeTab = tabs.OPTIONS;

const showVisualisation = () => {
  // clean after shake
  tab.classList.remove('moveTabRight');
  visualisationImg.classList.remove('moveImageShake');

  //move tab content to right (smaller padding)
  configuratorImg.classList.add('configuratorUnactive');
  accessoriesImg.classList.add('accessoriesUnactive');

  //disable buttons on tab
  addAccessoriesButton.classList.add('disableButton');
  backToConfiguratorButton.classList.add('disableButton');
  goToSummaryButton.classList.add('disableButton');

  //move tab to left (hide tabs)
  tab.classList.add('hiddenTab');

  //move visualisation  & chair to left (show visualisation)
  visualisation.classList.add('activeVisualisation');
  visualisationImg.classList.add('visualisationImgActive');

  //show accordion (properties)
  accordionUnactive.classList.add('accordionUnactiveShow')

  // activate scroll on body
  body[0].classList.add('bodyScroll');

  isVisualisatioVisible = true;
}

const hideVisualisation = () => {
  //cleat after shake
  tab.classList.remove('moveTabLeft');

  //move tab content to left (bigger padding)
  configuratorImg.classList.remove('configuratorUnactive');
  accessoriesImg.classList.remove('accessoriesUnactive');

  //activate buttons on tab
  addAccessoriesButton.classList.remove('disableButton');
  backToConfiguratorButton.classList.remove('disableButton');
  goToSummaryButton.classList.remove('disableButton');

  //move tab to right (show tabs)
  tab.classList.remove('hiddenTab');

  //move visualisation  & chair to right (hide visualisation)
  visualisation.classList.remove('activeVisualisation');
  visualisationImg.classList.remove('visualisationImgActive');

  //hide accordion (properties)
  accordionUnactive.classList.remove('accordionUnactiveShow')
  accordion.classList.remove('activeAccordion')

  // activate scroll on tab
  body[0].classList.remove('bodyScroll');

  isVisualisatioVisible = false;
}

const switchTab = () => {
  if (isTabVisible) {
    // show accessories with delay
    setTimeout(() => {
      accessories.classList.add('showAccessories');
    }, 400)
    configurator.classList.add('hideConfigurator');
    accessoriesButton.textContent = 'show options'
    activeTab = tabs.ACCESSORIES;

  }
  else {
    accessories.classList.remove('showAccessories');
    // show configurator with delay
    setTimeout(() => {
      configurator.classList.remove('hideConfigurator');
    }, 400)
    accessoriesButton.textContent = 'add accessories'
    activeTab = tabs.OPTIONS;
  }
  isTabVisible = !isTabVisible;
}

const scrollToElement = () => {
  shellColorToScroll.scrollIntoView({ behavior: 'smooth' })

  setTimeout(() => {
    shellColorToScroll.classList.add('scrolled')
  }, 500);
  requestAnimationFrame(() => {
    shellColorToScroll.classList.remove('scrolled')
  });
}

const scrollTab = () => {
  if (tabs.OPTIONS === activeTab) {
    scrollToElement();
  }
  else {
    switchTab();
    setTimeout(() => {
      scrollToElement();
    }, 300)
  }
}

// SCROLL
shellColorFooter.addEventListener('click', () => {
  if (isVisualisatioVisible) {
    hideVisualisation();

    setTimeout(() => {
      scrollTab();
    }, 1000)
  }
  else {
    scrollTab();
  }

});

// NAVIGATION BUTTONS
addAccessoriesButton.addEventListener('click', () => {
  switchTab();
});
backToConfiguratorButton.addEventListener('click', () => {
  switchTab();
});

goToSummaryButton.addEventListener('click', () => {
  activeTab = tabs.SUMMARY;

  tab.classList.add('hideTabs');
  footerPanel.classList.add('footerPanelHidden');

  visualisation.classList.add('hidePermamently');

  visualisationImg.classList.remove('moveImageShake');
  visualisationImg.classList.add('moveVisualisatonImgSummary');
  body[0].classList.add('bodyScroll');

  setTimeout(() => {
    summaryImg.classList.add('summaryImgActive');
    backToAccessoriesButton.classList.add('backToAccessoriesButtonActive');
  }, 500)

  setTimeout(()=>{
    summary.classList.add('summaryActive');
  },600)

});

backToAccessoriesButton.addEventListener('click', () => {
  activeTab = tabs.ACCESSORIES;
  tab.classList.remove('hideTabs');
  footerPanel.classList.remove('footerPanelHidden');

  setTimeout(() => {
    visualisation.classList.remove('hidePermamently');
  }, 500)

  visualisationImg.classList.remove('moveImageShake');
  visualisationImg.classList.remove('moveVisualisatonImgSummary');

  summary.classList.remove('summaryActive');
  summaryImg.classList.remove('summaryImgActive');
  backToAccessoriesButton.classList.remove('backToAccessoriesButtonActive');
  body[0].classList.remove('bodyScroll');
});

// VISUALISATION
visualisation.addEventListener('mouseenter', () => {
  if (!isVisualisatioVisible) {
    tab.classList.add('moveTabRight')
    visualisationImg.classList.add('moveImageShake')
  }
})

visualisation.addEventListener('mouseleave', () => {
  tab.classList.remove('moveTabRight');
  visualisationImg.classList.remove('moveImageShake')
})

visualisation.addEventListener('click', () => {
  if (activeTab !== tabs.SUMMARY) {
    showVisualisation();
  }
})

tab.addEventListener('click', () => {
  hideVisualisation();
})

// TAB
tab.addEventListener('mouseenter', () => {
  if (isVisualisatioVisible) {
    tab.classList.add('moveTabLeft');
  }
})

tab.addEventListener('mouseleave', () => {
  tab.classList.remove('moveTabLeft');
})

accordionUnactive.addEventListener('click', () => {
  if (!isAccordionActive) {
    accordion.classList.add('activeAccordion');
  }
  else {
    accordion.classList.remove('activeAccordion');
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
