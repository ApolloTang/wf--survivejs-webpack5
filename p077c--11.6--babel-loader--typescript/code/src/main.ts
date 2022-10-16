import component from './component'
import './main.css'




const elements = component()
console.log(elements)

// [NOTE]
//   To see fonts in action make sure you unzip monrope.zip in ./src/fonts/
//
// import ('./fonts/')
// document.body.appendChild(elements.fontManropeRegular)
// document.body.appendChild(elements.fontManropeLight)

import ('./js-check/')
document.body.appendChild(elements.red)
document.body.appendChild(elements.green)
document.body.appendChild(elements.cat)
document.body.appendChild(elements.imgCopyLeft)
document.body.appendChild(elements.imgNy1)


