console.log("1. file : index.js")

// Method-1
const result = require("./math")

;(x = 5), (y = 6)
console.log(`addition of ${x} and ${y} = `, result.add(x, y))

console.log(`subtraction of ${x} and ${y} = `, result.sub(x, y))

/*
// Method-2
const { add, sub } = require("./math")

;(x = 5), (y = 6)
console.log(`addition of ${x} and ${y} = `, add(x, y))

console.log(`subtraction of ${x} and ${y} = `, sub(x, y))

*/
