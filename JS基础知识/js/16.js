let str = 'luoyingdanikeyide';
//循环输出字符串中的每一个字符
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(char);
}
console.log(str.length);
/**
 *  charAt：根据索引获取指定位置的字符
 *  charCodeAt：获取指定字符的ASCII码值（Unicode编码值）
 *   @params
 *      n [number] 获取字符指定的索引
 *   @return
 *      返回查找到的字符
 *      找不到返回的是空字符串不是undefined，或者返回对应的编码值
 * 
 */
console.log(str.charAt(0)); //=> 'l'
console.log(str[0]); //=> 'l'
console.log(str.charAt(10000)); //=> ''
console.log(str[10000]); //=> undefined
console.log(str.charCodeAt(0)); //=> 108
console.log(String.fromCharCode(108)); //=> 'l' 它和上面的是对应关系

/**
 *  都是为了实现字符串的截取（在原来字符串中查找到自己想要的）
 *      substr(n,m)：从索引n开始截取m个字符，m不写截取到末尾（后面方法如是）
 *      substring(n,m)：从索引n开始找到索引为m处（不包含m）
 *      slice(n,m)：和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法是不可以的
 */
console.log(str.substr(3, 7)); //=> 'yingdan'
console.log(str.substring(3, 7)); //=> 'ying'
console.log(str.substr(3)); //=> 'yingdanikeyide' 
console.log(str.substring(3, 100000)); //=> 'yingdanikeyide'截取到末尾（超过索引也只截取到末尾）

console.log(str.substring(3, 7)); //=> 'ying'
console.log(str.slice(3, 7)); //=> 'ying'
console.log(str.substring(-7, -3)); //=> ' ' substring不支持负数索引
console.log(str.slice(-7, -3)); //=> 'ikey'  slice支持负数索引 快捷查找：负数索引，我们按照str.length + 负索引的方式找 => slice(17-7,17-3) =>slice(10,14)

/*
 *  验证字符是否存在
 *      indexOf(x,y)：x是字符串，y是数字 获取X第一次出现位置的索引，y是控制查找的起始位置索引
 *      lastIndexOf(x):x是字符串 最后一次出现位置的索引
 * => 以上两种方法，没有该字符时，返回的结果是 -1 
 * 
 */
//str = 'luoyingdanikeyide';
console.log(str.indexOf('n')); //=> 5
console.log(str.lastIndexOf('n')); //=> 9
console.log(str.indexOf('@')); //=> -1 字符不存在返回-1
if (str.indexOf('@') === -1) {
    // 字符串中不包含@这个字符
}

console.log(str.indexOf('n', 7)); //=>9  查找字符串索引7及之后的字符串中，n第一次出现位置的索引
if (!str.includes('@')) {
    console.log('当前字符串中不包含@');
}

/*
 *  字符串中字母的大小写转换
 *      toUpperCase()：转大写
 *      toLowerCase()：转小写
 */
//str = 'luoyingdanikeyide'; 
str = str.toUpperCase();
console.log(str); //=> 'LUOYINGDANIKEYIDE'
str = str.toLowerCase();
console.log(str); //=> 'luoyingdanikeyide'


/*
 * split([分隔符])：把字符串按照指定的分隔符拆分成数组（和数组中的join对应）
 * split支持传递正则表达式
 */

// 需求：把|分隔符变为,分隔符
let str1 = 'luo|ying|da';
str1 = str1.split('|');
console.log(str1);
str1 = str1.join(',');
console.log(str1);

/**
 *  replace(老字符，新字符)：实现字符串的替换
 */
let str2 = '哈哈@呵呵@嘿嘿';
str2 = str2.replace('@', '-');
console.log(str2); //哈哈-呵呵@嘿嘿 在不使用正则表达式的情况下执行一次replace只能替换一次字符
str2 = str2.replace(/@/g, '-');
console.log(str2);//=>哈哈-呵呵-嘿嘿