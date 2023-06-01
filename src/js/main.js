import { Collapse, Dropdown } from 'bootstrap'

import '../scss/styles.scss'

// Handle change bg color header on scroll donw
const header = document.querySelector('.header')
const experts = document.querySelector('.talk-experts')
window.onscroll = () => {
  if (window.scrollY > 50) {
    header.style.background = '#206c7b'
    experts.style.display = 'none'
  } else if (window.scrollY < 50) {
    header.style.background = 'rgba(0, 0, 0, 0.8)'
    experts.style.display = 'flex'
  }
}

// Bootstrap dropdown menu
Array.from(document.querySelectorAll('.dropdown'))
  .forEach(dropdown => new Dropdown(dropdown))

// Bootstrap feature Accordion

const featuresAccordion = document.querySelector('#featureAccordion')

new Collapse(featuresAccordion)


// Handle change support number link on select

const selectTelSupportCity = document.querySelector('#support-city')
const supportTelLink = document.querySelector('.support-phone')

selectTelSupportCity.addEventListener("change", (event) => {
  supportTelLink.setAttribute('href', event.target.value)
  supportTelLink.innerHTML = event.target.value
})

