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

let ary8 = [10, 20, 30];
let ary9 = [40, 50];
let res8 = ary8.concat('珠峰培训', ary9);
console.log(res8);


/**
 * toString：把数组转换为字符串
 * @params
 * @return
 *      转换后的字符串,每一项用逗号分隔（原数组不变）
 */
let ary10 = [10, 20, 30];
let res10 = ary10.toString();
console.log(res10);
console.log([].toString);
console.log([12].toString());

/**
* join：把数组转换为字符串
* @params
*      指定的分隔符（字符串格式）
* @return
*      转换后的字符串,每一项用逗号分隔（原数组不变）
*/
let ary11 = [10, 20, 30];
let res11 = ary11.join('');
console.log(res11);

res11 = ary11.join();
console.log(res11);

res11 = ary11.join('|');
console.log(res11);

//数组中的数字求和

res11 = ary11.join('+');
console.log(res11);//=>'10+20+30'
console.log(eval(res11));//=>60 eval吧字符串变为JS表达式执行


/**
* indexOf / lastIndexOf：检测当前项在数组中第一次出现或者最后一次出现位置的索引值(在IE6~8中不兼容)
* @params
*      要检索的这一项内容
* @return
*      这一项出现的位置索引值（数字），如果数组中没有这一项，返回结果是-1
*/
let ary12 = [10, 20, 30, 10, 20, 30];
console.log(ary12.indexOf(20));
console.log(ary12.lastIndexOf(20));

//想验证数组中是否包含某一项
if (ary12.indexOf('珠峰培训') === -1) {
    //不包含
}
//也可以使用ES6中的includes
if (ary12.includes('珠峰培训')) {
    //包含：如果存在返回的是TRUE
}

/**
* reverse：把数组倒过来排列
* @params
* @return
*      排列后的新数组
* 原来数组改变
*/
let ary13 = [10, 5, 30, 26, 20];
ary13.reverse();
console.log(ary13);

/**
* sort：实现数组的排序
* @params
*      可以没有，也可以是个函数
* @return
*      排序后的新数组
* 原来数组改变
*/

let ary14 = [7, 8, 5, 2, 4, 6, 9]
ary14.sort();
console.log(ary14);// => [2, 4, 5, 6, 7, 8, 9]
//sort方法中如果不传递参数，是无法处理10以上的数字排序的（它默认都是按照第一个字符来排，不是我们想要的结果），想要实现多位数正常排序，需要给sort传递一个函数，函数中返回a - b:由小到大升序  b - a：由大到小降序 
//a和b是相邻的两项
ary13.sort((a, b) => a - b);
console.log(ary13);// =>[10, 30, 5]

/**
* forEach：遍历数组中的每一项内容
* @params
*      回调函数
* @return
*    
* 原来数组不变
*/

let ary15 = [7, 8, 5, 2, 4, 6, 9];
//基于原生JS中的循环可以实现
for (let i = 0; i < ary15.length; i++) {
    // i：当前循环这一项的索引
    //ary[i]：根据索引获取循环的这一项
    console.log('索引' + i + '内容' + ary[i]);
}

ary15.forEach((item, index) => {
    //数组中有几项，函数就会被默认执行几次
    // 每一次执行函数：item是数组中当前要操作的这一项，index是当前数组的索引
    console.log('索引' + i + '内容' + ary[i]);
});


