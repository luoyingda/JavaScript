let a = 10;

if (!a) {
    //条件可以多样性：等于、大于、小于的比较/一个值或者取反等 =>最后都是要计算出是TRUE还是FALSE
}

if (a <= 10) {
    console.log('haha');
} else if (a > 0 && a < 10) {
    // A && B：A和B都成立才为TRUE
    // A || B：A或B有一个成立就位TRUE
    console.log('hehe');
} else if (a == 10) {
    console.log('heihei');
} else {
    console.log('xixi')
}

//==============三元运算符：简单IF/ELSE的特殊处理方式=================
//条件?条件成立处理的事情:条件不成立处理的事情
//1.如果处理的事情比较多，我们用括号包起来，每一件事情用逗号分隔
//2.如果不需要处理事情，可以使用null/undefined站位
let b = 10;

b > 0 && b < 20 ? (b++, console.log(b)) : null;
if (b > 0 && b < 20) {
    b++;
    console.log(b);
}

b >= 10 ? console.log('hehe') : console.log('haha');
if (b >= 10) {
    console.log('hehe');

} else {
    console.log('haha');
}

//练习改写三元运算符
a > 0 ? (a < 10 ? a++ : a--) : (a > -10 ? a += 2 : null);

if (a > 0) {
    if (a < 10) {
        a++;
    } else {
        a--;
    }
} else {
    if (a > -10) {
        a += 2;
    }
}

//=================switch case======================
v