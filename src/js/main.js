import { Collapse } from 'bootstrap'
import * as Popper from "@popperjs/core"

import '../scss/styles.scss'

const featuresAccordion = document.querySelector('featureAccordion')

new Collapse(featuresAccordion)
