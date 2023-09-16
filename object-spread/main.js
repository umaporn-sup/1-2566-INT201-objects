const obj1 = { foo: 'bar', x: 42 }
const obj2 = { foo: 'baz', y: 13 }

const clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }
const clonedWithReplace = { ...obj1, foo: 'abc' }
// Object { foo: "abc", x: 42 }
const mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }

console.log(clonedWithReplace)
console.log(clonedObj)
console.log(mergedObj)
