let ary = [1, 2, 3, 1, 2, 3, 1, 2, 4]

//===========第一种===========
/** 
 *  不兼容IE6~8
 *  1. 创建一个空数组
 *  2. 循环取原数组中的每一项，添加进新数组
 *  3. 每次添加时需要验证新数组中是否已经包含循环的这项，包含就不放进新数组
 */

/* let newAry = [];
for (let i = 0; i < ary.length; i++) {
    // 循环获取原有数组中的每一项
    let item = ary[i];
    // 验证新数组中是否存在这一项
    if (newAry.includes(item)) {
        // 存在这一项，不再增加到新数组，继续下一轮循环即可
        continue;
    }
    // 新数组中不存在这一项，我们加入到新数组中即可
    newAry.push(item);
}
 */
let newAry = [];
ary.forEach(item => {
    if (newAry.includes(item)) return
    newAry.push(item);
});
console.log(newAry);

//===========第二种=============
/**
 *  1.分别拿出数组中得每一项
 *  2.用这一项和它后面的每一项一次进行比较，如果遇到和当前项相同的，则在原来数组中把这一项移除掉
 *  不用includes/indexOf （保证兼容性：主要兼容IE6~8）
 * 
 *  存在问题：数组塌陷问题
 *      删除当前项后，后面的所有项的索引都向前提一位，造成后面的删除操作不能实现原来的效果
 *  解决办法：删除完成后，执行“索引--”
 *      
 */
for (let i = 0; i < ary.length; i++) {
    // item：每一次循环拿出来的当前项
    // i：当前项索引 i+1:代表后一项索引
    var item = ary[i];
    // 让当前项和后面的每一项进行比较（循环）
    for (let j = i + 1; j < ary.length; j++) {
        // compare：后面拿出来要比较的每一项
        var compare = ary[i];
        // 如果compare和item相等，说明这一项是重复的，我们把它删掉
        if (compare === item) {
            // j 索引这一项要从数组中删除
            ary.splice(j, 1);
            //这里提现出“数组塌陷问题”：j后面的每一项索引都提前一位，下一次要比较的应该还是j这个索引内容
            j--;
        }
    }
}

//===========第三种=============
/** 
 *  存在数组塌陷问题
 *  不能处理对象类型值
 *  1. 创建一个空对象
 *  2. 循环数组中的每一项，把每一项向对象中进行存储 => item=item
 *  3. 每次存储之前进行判断：验证obj中是否包含这一项
*/
/* let obj = {};
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (obj[item] !== undefined) {
        //已经存在这一项
        ary.splice(i, 1);
        i--;
        continue;
    }
    obj[item] = item;
} */


//============第四种==============
/**
 *  常用的一种数组去重，可以封装为方法。
 */
/* let obj = {};
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (obj[item] !== undefined) {
        //已经存在这一项
        ary[i] = ary[ary.length - 1];
        ary.length--;
        i--;
        continue;
    }
    obj[item] = item;
} */

//===========第五种================
/**
 *  基于ES6中的Set（对应的Map）实现去重
 */
/* ary = [...new Set(ary)];
console.log(ary); */


//==============第六种=============
/**
 *  使用正则表达式实现去重
 */
ary=[12,12,32,33,33,54,54,11,32]
ary.sort((a, b) => a - b);
let str = ary.join('@') + '@';
let reg = /(\d+@)\1*/g;
ary = [];
str.replace(reg, (n, m) => {
    m = Number(m.slice(0, m.length - 1));
    ary.push(m);
});
console.log(ary);























