function sum() {
    let res = null;
    for (let i = 0; i < arguments.length; i++) {
        //判断是否是数字
        let item = Number(arguments[i]);
        //非有效数字不加
        if (isNaN(item)) {
            continue;
        }
        res += item;
    }
    return res;
};

let total = sum();
console.log(total);