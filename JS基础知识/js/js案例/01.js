//时间字符串的格式化处理
let time = '2021-09-04 07:41:00';

//=> 变为自己需要呈现的格式，例如：
//  "2021年9月4日 07时41分00秒"
//  "2021年9月4日"
//  "09/04 12:06"

// 方案一：一路replace 没意思不实用


//不足十位补零的方法
let addZero = val =>  val.length < 2 ? '0' + val : val;
// 方案二：获取到年月日小时分钟秒这几个值后，最后想拼成什么就拼成什么
ary = time.split(/(?: |-|:)/g);

time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
console.log(time);
// 获取值得方法：基于split一项项的拆分
/* let n = time.split(' ');
let m = n[0].split('-');
let x = n[1].split(':') */

//获取值得方法：基于indexOf获取指定符号的索引，基于substring一点点截
/* let n = time.indexOf('-');
let m = time.lastIndexOf('-');
let x = time.indexOf(' ');
let y = time.indexOf(':');
let z = time.lastIndexOf(':');
let year = time.substring(0, n);
let month = time.substring(n + 1, m);
let day = time.substring(m + 1, x);
console.log(year,month,day); */