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