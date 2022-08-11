// 1.CommonJs的模块化规范
const { add, mul } = require('./js/mathUtils')

console.log(add(10, 20));
console.log(mul(10, 20));
// 2.ES6的模块化规范
import { age, name, height } from "./js/info";
console.log(age);
console.log(name);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊，李焕英！</h2>')