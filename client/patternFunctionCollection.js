// import constants from './components/constants'
// const contstants = require('./components/constants')

// let keys = Object.keys(constants)

// let obj = {}

// keys.forEach(k => {
//   obj.h = () => {} 
// })

// console.log(obj)


// function addOne() {

// }
// function makeSound() {

// }
// function sayHi() {
//   console.log('Hi')
// }
// function changeColorToBlue(setColor) {
//   setColor('blue')
// }

// let obj = {
//   'c': addOne,
//   'df': makeSound,
//   'd': sayHi,
//   'e': changeColorToBlue,
//   // 'ef',
//   // 'e',
//   // 'f',
//   // 'gf',
//   // 'g',
//   // 'af',
//   // 'a',
//   // 'bf',
//   // 'b',
// }

// obj.d()


// obj.e()

function addTwoNumbers(a, b) {
  console.log(a + b)
  return a + b
}

function preAddNumber(a) {
  return (b) => addTwoNumbers(a, b)
}

addTwoNumbers(3, 3)
console.log(typeof addTwoNumbers(1, 1)) // 'number'



let addNumberToSix = preAddNumber(6)
console.log(typeof preAddNumber(10))

addNumberToSix(11) // 17
