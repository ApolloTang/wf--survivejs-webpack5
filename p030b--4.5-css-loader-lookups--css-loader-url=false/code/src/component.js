export default (text = 'Hello world') => {
  const red = document.createElement('div')
  red.textContent='red'
  red.className='red'

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

  return {
    red,
    green,
    blue,
    cyan,
    margenta,
  }
}
