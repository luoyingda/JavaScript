const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      }, {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      }, {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      }, {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2)
    // }
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      //1.
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //2.
      // let totalPrice = 0;
      // for (let i in this.books) {
      //   const book = this.books[i]
      //   totalPrice += book.price * book.count
      // }
      // return totalPrice

      //3.
      // let totalPrice = 0;
      // for (let item of this.books) {
      //   console.log(item);
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice
      return this.books.reduce((pre, book) => pre + book.price * book.count, 0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})



//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//高阶函数：filter/map/reduce

const nums = [10, 20, 11, 222, 444, 40, 50]
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// //1.filter函数的使用
// let newNums = nums.filter(n => n < 100)
// console.log(newNums);
// //2.map函数的使用
// let new2Nums = newNums.map(n => n * 2)
// console.log(new2Nums);
// //3.reduce函数的使用
// // reduce的作用对数组中所有的内容进行汇总
// let new3Nums = new2Nums.reduce((preValue, n) =>preValue + n, 0)
// console.log(new3Nums);
// //1.需求：取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n)
//   }
// }

// //2.将所有小于100的数字进行转化：全部*2
// let new2Nums = []
// for (let n of newNums) {
//   new2Nums.push(n * 2)
// }

// //3.将所有new2Nums数字相加，得到最终的结果
// let total = 0
// for (let n of new2Nums) {
//   total += n
// }