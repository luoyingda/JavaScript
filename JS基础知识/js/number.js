console.log('Hello World');

// ==：进行比较的
console.log('AA'== NaN);
console.log(10==NaN);
console.log(NaN==NaN0);

// isNaN([val])
console.log(isNaN(10));//FLASE
console.log(isNaN('AA'));//TRUE


console.log(isNaN('10'));//FALSE
/* 
 * Number('10') => 10
 * isNaN(10) => FALSEE
 */

 //把字符串转换为数字，只要字符串中包含任意一个非有效数字字符（第一个点除外）结果都是NaN，空字符串会变为数字零
 console.log(Number('12.5'));//=>12.5
 console.log(Number('12.5PX'));//=>NaN
 console.log(Number(''));//=>0

//布尔转换为数字
 console.log(Number(true)); //=>1
 console.log(Number(false));//=>0
 
 //null/undefined 
 console.log(Number(null)); //=>0
 console.log(Number(undefined));//=>NaN

 //引用数据类型转换为数字，先把它基于toString方法转换为字符串，然后在转换为数字
 console.log(Number({name:'10'}));