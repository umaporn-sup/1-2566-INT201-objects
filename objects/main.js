// object creation with object literals
const triangle1 = { height: 2, base: 3 }
console.log(triangle1)

// object creation with constructors
class Point {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  distance(anotherPoint) {
    return Math.sqrt(
      (this.x - anotherPoint.x) ** 2 + (this.y - anotherPoint.y) ** 2
    )
    //Exponentiation operator (**)
  }
}
let student = new Object() //let student={}
let a = new Array() //let a=[]
let p1 = new Point()
let p2 = new Point(10, 30)
let p3 = new Point(5, 4)
console.log(p2.distance(p3))
console.log(p1)
console.log(p2)
console.log(p3)
console.log('--------------')

const o1 = new Object(undefined)
const o2 = new Object(null)
console.log(o1)
console.log(o2)
console.log('--------------')

// object creation with Object.create()

const person = {
  country: 'Thailand',
  printInfo: function () {
    console.log(`My name is ${this.name} from ${this.country}`)
  }
}
console.log(person)
const someOne = Object.create(person)
someOne.name = 'Somchai'
someOne.country = 'Korea'
someOne.printInfo()
console.log('--------------')

// Using this for object references
const square1 = {
  side: 10
}

const square2 = {
  side: 20
}

function area() {
  return this.side * this.side
}
square1.area = area
square2.area = area
console.log(square1.area())
console.log(square2.area())
console.log('--------------')

// Prototype Chaining
class Product {
  constructor() {
    this.id = 0
    this.stock = 0
    this.supplier = 'N/A'
  }
}

const product = new Product()
console.log(product)

const clothProduct = Object.create(Product.prototype)
// const clothProduct = Object.create(product)
clothProduct.id = 1
clothProduct.stock = 10
clothProduct.supplier = 'Uniliver'
console.log(clothProduct)

const bagProduct = { id: 2, stock: 20 }
console.log(bagProduct)

console.log(Product.prototype.isPrototypeOf(product))
console.log(Product.prototype.isPrototypeOf(clothProduct))
console.log(Product.prototype.isPrototypeOf(bagProduct))
console.log(Product.prototype.isPrototypeOf(person))
console.log('--------------')
console.log(Object.prototype.isPrototypeOf(product))
console.log(Object.prototype.isPrototypeOf(clothProduct))
console.log(Object.prototype.isPrototypeOf(bagProduct))
console.log(Object.prototype.isPrototypeOf(person))
console.log(Object.prototype.isPrototypeOf(triangle1))
