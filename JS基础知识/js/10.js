/* var name =10;
var obj={
    name:'小达啊'
};
// 获取OBJ这个对象得name属性对应的值
console.log(obj.name);
// 一个对象的属性名只有两种格式：数字或字符串（等基本类型值）
console.log(obj['name']);
// obj[name变量代表的值] => obj['10'] =>undefined
console.log(obj[name]); */

/* var name = '小达啊';
var obj = {
    //name:'小达啊'
    // 属性名：属性值（放的是变量也是把变量存储的值拿过来属性值）
    // name:name,
    name, //=>ES6的简化 和 name:name 一模一样
    age: 1 === 1 ? 100 : 200
}; */

// => for in循环：用来循环遍历对象中的键值对的(continue和break同样适用)
var obj = {
    name: '春亮',
    age: 28,
    friends: '王鹏,刘泉',
    1: 20,
    2: 148
};

// for(var 变量 in 对象)
//对象中有多少组键值对，循环就执行几次（除非break结束）
for (var key in obj) {
    //每一次循环key变量存储的值：当前对象的属性名
    //获取属性值:object[属性名] =>obj[key]   obj,key/obj['key'] 
    console.log('属性名' + key + '属性值' + obj[key]);
}

