
// 对象类型 约束对象里能放什么东西
// 用来描述对象形状的 interface

// 首先定义一个规范 readonly 禁读 ？可填可不填
interface ISchool{
    readonly name: string;
    age: number;
    address?:string;
}
let school:ISchool={
    name:'123',
    address:'tianjin',
    age:43
}

// 接口可以扩展 可以继承已有属性
interface IWyh  extends ISchool{
    hobby:string
    [xxx:string]:any // 无论key写什么类型，最后都会变成字符串
}
let wyh:IWyh= {
    ...school,
    hobby:'1212',
    a:1,
    '2':2
}

//本没有，也没定义any，但就想用————使用断言，类型断言————就这么定义 
// let school2:ISchool={
//     name:'123',
//     address:'tianjin',
//     age:43
//     lesson:['web','java']
// }
// 类型断言
let school2:ISchool=({
    name:'123',
    address:'tianjin',
    age:43,
    lesson:['web','java']
}) as ISchool


