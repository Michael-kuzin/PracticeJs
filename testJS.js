// console.log(str); будет ошибка, я ответил андефайнед
// let str = "hello"

// if(2 && 1 && null && 0 && undefined) {    неправильно понял вопрос ответил false правильный ответ null
//   console.log(true)
// } else {
//   console.log(false)
// }

// console.log(1.15 + 2.30)


// let arr = [];
// arr[1] = 1;
// arr[3] = 33;
//
// console.log(arr.length)

// Какая арифметическая операция приводит к ошибке в javascript?
//
// Деление на ноль. infinity
// Умножение числа на строку. NaN
// Корень из отрицательного числа.NaN
// Никакая из вышеперечисленных. правильный ответ!


// let a = 1;
// let b = { toString() {return '1'} };
// let c = 1;
//
// console.log(a + b + c) 111


// let a = new Array("a","b")
//  let a = { "a", "b" }
//  let a = ( "a", "b" )
// let b = [ "a", "b" ]
// let c = "a,b".split(",")
//
// console.log(a,b,c)


// let a = (1,5 - 1) * 2;
//
// console.log(a) 8 тут я вообще в ахуе



// for(var i=0; i<10; i++) {
//   setTimeout(function() {
//     console.log(i);       10 раз 10 тоже не понял
//   }, 100);
// }


// let a = ;
// console.log( a == undefined ); существует какоето значение тоже не знаю



// console.log([].push(1,2).unshift(3).join())


// function F() {}
//
// console.log(F.prototype)



// console.log(null == undefined)



// console.log(+"Infinity")



// console.log(true + false)





// function f() {
//   let a = 5;
//   return new Function('b', 'return a + b');
// }
//
// console.log(f()(1) );


// let x = 5
// console.log(x++) 5



// function fib(n) {
//   if(n <= 1) {
//     return n
//   }
//   return fib(n -1 ) + fib(n - 2)
// }
//
// console.log(fib(3))


// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
//
// console.log(factorial(5))


// function factorial(n) {
//   if(n != 1) {
//     return n * factorial(n - 1)
//   }
//   return 1
// }
//
// console.log(factorial(5))
//
//
//
// let factorial = function(n) {
//   return (function count(n) {
//     if(n === 0) {
//       return 1
//     }
//     return count(n - 1) * n
//   })(n);
// }
//
// let number = factorial(5);
// console.log(number)

let arr = [1,2,3]


function list() {
  list.__proto__ = Array;
      return this.join('/')
}


let customFunction =  list.bind(Array.prototype)

let newarr = arr.customFunction()
console.log(newarr);
