import svg_ny1 from  './statics/ny1.svg'
import svg_copyleft from  './statics/copyleft.svg'

export default (text = 'Hello world') => {
  const fontManropeRegular = document.createElement('p')
  fontManropeRegular.className='font-manrope-regular'
  fontManropeRegular.textContent ='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  const fontManropeLight = document.createElement('p')
  fontManropeLight.className='font-manrope-light'
  fontManropeLight.textContent ='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  const red = document.createElement('div')
  red.textContent='red'
  red.className='rounded bg-red-100 border max-w-md m-4 p-4'

  const green = document.createElement('div')
  green.textContent='green'
  green.className='green'

  const blue = document.createElement('div')
  blue.textContent='blue'
  blue.className='blue'

  const cyan = document.createElement('div')
  cyan.textContent='cyan'
  cyan.className='cyan'

  const margenta = document.createElement('div')
  margenta.textContent='margenta'
  margenta.className='margenta'

  const cat = document.createElement('div')
  cat.textContent='cat'
  cat.className='cat'

  const imgNy1 = document.createElement('img')
  imgNy1.className = 'img-ny1'
  imgNy1.src = svg_ny1

  const imgCopyLeft = document.createElement('div')
  imgCopyLeft.className='div-copy-left'
  imgCopyLeft.textContent='div-copy-left'


  return {
    fontManropeRegular,
    fontManropeLight,
    red,
    green,
    blue,
    cyan,
    margenta,
    cat,
    imgCopyLeft,
    imgNy1,
  }
}
