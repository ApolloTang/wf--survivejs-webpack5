import component from './component'
import './index.css'

const elements = component()
console.log(elements)

document.body.appendChild(elements.red)
document.body.appendChild(elements.green)
document.body.appendChild(elements.cat)
document.body.appendChild(elements.imgCopyLeft)
document.body.appendChild(elements.imgNy1)
