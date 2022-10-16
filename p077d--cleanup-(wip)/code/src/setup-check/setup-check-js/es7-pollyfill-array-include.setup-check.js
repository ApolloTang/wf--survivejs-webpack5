var IE11= !!window.msCrypto // https://stackoverflow.com/questions/21825157/internet-explorer-11-detection

if(!IE11) {
  console.warn('pollyfill setup check should be tested on IE11')
}

try {
  [1,2].includes(1)
} catch (error) {
  console.error('Pollyfill of Array.prototype.include() works')
}


