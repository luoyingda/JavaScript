/**
 *  unique：实现数组去重的方法
 *    @parmas
 *      ary[Array] 要去重的数组
 *    @return
 *      [Array]  去重后的数组
 * by luoyingda on 20210831
 */
function unique(ary) {
    let obj = {};
    for (let i = 0; i < ary.length; i++) {
        let item = ary[i];
        if (obj[item] !== undefined) {
            ary[i] = ary[ary.length - 1];
            ary.length--;
            i--;
            continue;
        }
        obj[item] = item;
    }
    return ary;
}

let aa = [12, 12, 33, 44, 58, 33, 44, 23, 20];
aa = unique(aa);
aa.sort((a, b) => a - b);
console.log(aa);