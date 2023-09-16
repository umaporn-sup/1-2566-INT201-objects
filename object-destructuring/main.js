//object destructuring
// const { x, z } = { x: 10, y: 20, z: 30 }
const { z, x } = { x: 10, y: 20, z: 30 } //order is not sensitive
console.log(x) // 10
console.log(z) // 30

const obj = { a: 1, b: 2, c: 3 }
const { a, b } = obj
console.log(a)
console.log(b)

//
const foo = { m: 1, n: 2, o: 3 }
const { m: room, n: floor } = foo //rename m to room and n to floor
console.log(room)
console.log(floor)

//nested object destructureing
const people = {
  name: 'Somchai Rakdee',
  family: {
    mother: 'Somsri Rakdee',
    father: 'Somjit Rakdee',
    sister: 'Somrak Rakdee'
  },
  age: 30
}

//nested array and object destructuring
const fruits = [
  { id: 1, fruitName: 'mango' },
  { id: 2, fruitNamee: 'orange' },
  { id: 3, fruitName: 'grape' }
]

const [, , { fruitName }] = fruits
console.log(fruitName)

//nested array and object destructuring
const log = {
  title: 'client',
  detail: [
    {
      locale: 'th',
      lastEdit: '2022-08-14T09:40:22',
      title: 'history'
    }
  ],
  url: '/history/docs/js'
}

const {
  title,
  detail: [{ lastEdit }]
} = log

console.log(title)
console.log(lastEdit)

// object destructuring and rest
const { aa, bb, ...rest } = { aa: 10, bb: 20, c: 30, d: 40 }
console.log(aa)
console.log(bb)
console.log(rest)
