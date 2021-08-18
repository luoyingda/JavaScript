let ary = [12, 23, 34, 45];
console.log(typeof ary);
console.dir(ary);

/**
 * ary = {
 *    0:12,
 *    1:23,
 *    2:34,
 *    3:45,
 *    length:4
 * }
 * 数字作为索引(key属性名)
 * length代表数组的长度
 * 
 * ary[0] 根据索引获取指定项的内容
 * ary.length 获取数组的长度
 * ary.length-1 最后一项的索引
 */

//============数组中的常用方法==============
/* 
 * push：向数组末尾增加内容
 * @params
 *       多个任意类型
 * @return
 *       新增后数组的长度 
 */
let ary1 = [10, 20];
let res1 = ary1.push(30, 'AA');//res用来接收返回值
// 基于原生JS操作键值对的方法，也可以向数组末尾追加一项新的内容
ary[ary.length] = 40;
console.log(res1, ary1);

/**
 * unshift：向数组开头增加内容
 * @params
 *      多个任意类型
 * @return
 *      新增后数组的长度
 */
let ary2 = [10, 20];
let res2 = ary2.unshift(30, 'AA');//res用来接收返回值
console.log(res2, ary2);

/**
* shift：删除数组中的第一项
* @params
* @return
*      删除的那一项
*/
let ary3 = [10, 20, 30, 40];
let res3 = ary3.shift();//res用来接收返回值
console.log(res3, ary3);

//基于原生js中的delete，把数组当做普通对象，确实可以删除某一项内容，但是不会影响数组本身的结构特点（length长度不会跟着修改），真是项目中杜绝这样的删除使用
delete ary3[0];
console.log(ary3);

/**
 * pop：删除数组中的最后一项
 * @params
 * @return
 *      删除的那一项
 */
let ary4 = [10, 20, 30, 40];
let res4 = ary4.pop();//res用来接收返回值
console.log(res4, ary4);
//基于原生js让数组长度减一，默认删掉的就是最后一项
ary4.length--;
console.log(ary4);

/**
 * splice：实现数组的增加、删除、修改
 * @params
 *      n,m 数字 从索引n开始删除m个元素（m不写，是删除到末尾）
 * @return
 *      删除的那一项
 */

