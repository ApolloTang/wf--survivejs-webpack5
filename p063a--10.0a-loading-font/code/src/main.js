import component from './component'
import main from './main.css'

const elements = component()
console.log(elements)

import './fonts/index.js'
document.body.appendChild(elements.fontManropeBold)
document.body.appendChild(elements.fontManropeRegular)
document.body.appendChild(elements.fontManropeLight)
document.body.appendChild(elements.fontRobotoRegular)

document.body.appendChild(elements.red)
document.body.appendChild(elements.green)
document.body.appendChild(elements.cat)
document.body.appendChild(elements.imgCopyLeft)
document.body.appendChild(elements.imgNy1)

