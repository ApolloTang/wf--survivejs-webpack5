import component from './component'
import './index.css'

const elements = component()
console.log(elements)

const container = document.createElement('div')
container.className='container--loading-images'
document.body.appendChild(container)

container.appendChild(elements.red)
container.appendChild(elements.green)
container.appendChild(elements.cat)
container.appendChild(elements.imgCopyLeft)
container.appendChild(elements.imgNy1)
