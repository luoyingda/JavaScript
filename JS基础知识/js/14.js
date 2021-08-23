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
 * splice：实现数组的删除
 * @params
 *      n,m 数字 从索引n开始删除m个元素（m不写，是删除到末尾）
 * @return
 *      把删除的部分用新数组存储起来返回
 */
let ary5 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let res5 = ary5.splice(2, 4);
console.log(res5, ary5);
// 基于这种方法可以清空一个数组，把原始数组中的内容以新数组存储起来（有点类似数组的克隆：把原来数组克隆一份一模一样的给新数组）
/* res5.splice(0);
console.log(res,ary); */

//删除最后一项和第一项
ary5.splice(ary5.length - 1);
ary5.splice(0, 1);
console.log(ary5);

/**
 * splice：实现数组的增加、修改
 * @params
 *      n,m,x  从索引n开始删除m个元素，用x占用删除的部分
 *      n,0,x  从索引n开始，一个都不删，把x放到索引n的前面
 * @return
 *      把删除的部分用新数组存储起来返回
 */
let ary6 = [10, 20, 30, 40, 50];
let res6 = ary6.splice(1, 2, '珠峰培训');
console.log(res6, ary6);

//实现增加
ary6.splice(3, 0, 'heheh');
console.log(ary6);

//向数组末尾增加
ary6.splice(ary.length, 0, 'AA');
console.log(ary6);

//向数组开始追加
ary6.splice(0, 0, 'BBB');
console.log(ary6);


/**
 * slice：实现数组的查询
 * @params
 *      n,m 都是数字  从索引n开始找到m的地方（不包含m这一项） 
 * @return
 *      把找到的内容以一个新数组的形式返回
 */
let ary7 = [10, 20, 30, 40, 50];
let res7 = ary7.slice(1, 3);
console.log(res7, ary7);

// m不写是找到末尾
res7 = ary7.slice(1);
console.log(res7);


// 数组的克隆，参数0不写也可以
res7 = ary7.slice(0);
console.log(res7);

//思考：关于数组克隆slice
//如果n/m为负数会怎样
//如果n>m会怎样
//如果是小数会怎样
//如果是非有效数字会怎样
//如果m或者n的值比最大索引还大会怎样

/**
 * 如果n/m为负数会怎样 
 * n和m都填：n如果是负数，m不管整数都返回空数组。
 * 只填n：在原数组中倒序查找，n的绝对值大于原数组个数时，无论填多大都返回原数组
 *  
 */
res7 = ary7.slice(-1, -1);
console.log(res7);// []
res7 = ary7.slice(-2, -5);
console.log(res7);// []
res7 = ary7.slice(-1);
console.log(res7);// [50]
res7 = ary7.slice(-2);
console.log(res7);// [50]
res7 = ary7.slice(-5);
console.log(res7);// [10, 20, 30, 40, 50]
res7 = ary7.slice(-7);
console.log(res7);// [10, 20, 30, 40, 50]

/**
 * 如果n>m会怎样：返回空数组
 */
res7 = ary7.slice(2, 1);
console.log(res7);// []
res7 = ary7.slice(3, 2);
console.log(res7);// []

/**
 * 如果是小数会怎样：n和m都是小数时，返回空数组
 */
res7 = ary7.slice(1.4, 1);
console.log(res7);// []
res7 = ary7.slice(1.5, 1);
console.log(res7);// []
res7 = ary7.slice(1, 1.4);
console.log(res7);// []
res7 = ary7.slice(1, 1.6);
console.log(res7);// []

/**
 * 如果是非有效数字会怎样
 * 当n为非有效数字时默认从索引为零的位置开始找，找到索引为m的一项（不包含m）
 * 当n和m都为非有效数字时返回空数组
 */
res7 = ary7.slice(NaN, 1);
console.log(res7);// [10]
res7 = ary7.slice(1, NaN);
console.log(res7);// []
res7 = ary7.slice('AAA', 1);
console.log(res7);// [10]
res7 = ary7.slice('aaa', 'bbb');
console.log(res7);// []

/**
 * 如果m或者n的值比最大索引还大会怎样：
 * n和m都大于最大索引：返回空数组
 * n大于最大索引m小于最大索引：返回空数组
 * n小于最大索引m大于最大索引：从n开始找到原数组末尾
 */
res7 = ary7.slice(5, 1);
console.log(res7);// [[]]
res7 = ary7.slice(1, 6);
console.log(res7);// [20, 30, 40, 50]
res7 = ary7.slice(5, 6);
console.log(res7);// []

/**
 * concat：实现数组的拼接
 * @params
 *      多个任意类型值 
 * @return
 *      拼接后的新数组（原数组不变）
 */


