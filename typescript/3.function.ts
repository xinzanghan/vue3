// 函数主要关心返回值和参数
function sum1(a:string, b:string):string{
    return a+b;
}
sum1('a','b')

// 可以通过表达式来定义
// type和interface都可以进行定义
// 区别
// interface可以继承 可以被类来实现
// type 仅仅是一个别名,但在定义联合类型的时候,定义临时变量时可以使用

type Sum=((a:number, b:number)=>number) | string
// interface Sum{
//     (a:number, b:number):number
// }
let sum2:Sum  = (a:number, b:number):number=>a+b

