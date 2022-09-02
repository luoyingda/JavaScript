// 1.CommonJs的模块化规范
const { add, mul } = require('./js/mathUtils').default

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

// 5.使用vue进行开发 vue2.x的语法
// import Vue from 'vue'
// const app=new Vue({
//   el:"#app",
//   data:{
//     message:'Hello World'
//   }
// })

// 5.使用vue进行开发 vue3.x的语法
import {createApp} from 'vue'
createApp({
  data(){
    return{
      message:'Hello World'
    }
  }
}).mount('#app')