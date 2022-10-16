import myObj, { expected_myObj } from './es6-obj-spread.js'
console.assert(JSON.stringify(myObj) === JSON.stringify(expected_myObj), 'ES6 spread works')
