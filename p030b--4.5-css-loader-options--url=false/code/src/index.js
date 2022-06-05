import component from './component'
import main from './main.css'

const elements = component()
console.log(elements)

document.body.appendChild(elements.red)
document.body.appendChild(elements.green)
document.body.appendChild(elements.blue)
document.body.appendChild(elements.cyan)
document.body.appendChild(elements.margenta)
