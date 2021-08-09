//普通函数
function sum(n, m) {
    return n + m;
}

//改写为箭头函数
let sum = (n, m) => {
    return n + m;
}

//如果函数只有一行RETURN,可以省略RETURN和大括号，一行搞定
let sum = (n, m) => n + m;

//==========================================
function fn(n) {
    return function (m) {
        return n + m;
    }
}
/* let fn = n =>{
    return function (m) {
        return n + m;
    }
} */
/* let fn = n => m => {
    return n + m;
} */
/* let fn = n => m => n + m; */

// 改写成箭头函数
let fn = n => m => n + m;

//===========================================
function sum(n, m) {
    if (typeof n === 'undefined') {
        n = 0;
    }
    if (typeof m === 'undefined') {
        m = 0;
    }
    return n + m;
}
//形参赋值默认值：当没有给形参传递实参的时候，执行默认值
let sum = (n = 0, m = 0) => n + m;

//==============================================

//使用箭头函数实现任意数求和:使用ES6中的剩余运算符获取传递实参集合（它是数组）
/* let sum = (...arg) => {
    eval(arg.join('+'));
} */

let sum = (...arg) => eval(arg.join('+'));

