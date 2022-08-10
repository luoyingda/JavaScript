// 1.CommonJs的模块化规范
const { add, mul } = require('./mathUtils')

console.log(add(10, 20));
console.log(mul(10, 20));
// 2.ES6的模块化规范
import { age, name, height } from "./info";
console.log(age);
console.log(name);
console.log(height);