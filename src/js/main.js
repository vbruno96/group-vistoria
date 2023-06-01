import { Collapse } from 'bootstrap'

import '../scss/styles.scss'

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

