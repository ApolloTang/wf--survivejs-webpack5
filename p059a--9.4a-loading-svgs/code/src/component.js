import mysvg from  './statics/copyleft.svg'

export default (text = 'Hello world') => {
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

  const myimg_svg = document.createElement('img')
  myimg_svg.src = mysvg
  myimg_svg.className = 'myimg_svg'

  const div_svg = document.createElement('div')
  div_svg.textContent='div_svg'
  div_svg.className='div_svg'


  return {
    red,
    green,
    blue,
    cyan,
    margenta,
    cat,
    myimg_svg,
    div_svg,
  }
}
