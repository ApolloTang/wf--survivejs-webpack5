export default (text = 'Hello world') => {
  const element1 = document.createElement('div')
  const element2 = document.createElement('div')
  const element3 = document.createElement('div')
  element1.className='red'
  element2.className='green'
  element3.className='blue'
  return {
    red: element1,
    green: element2,
    blue: element3,
  }
}
