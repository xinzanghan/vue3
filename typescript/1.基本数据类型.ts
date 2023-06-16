// npm i  typescript ts-node -g

// ts 中 冒号后面的 都是类型
const str:String='wyh'
const num:number=1
const boolean:boolean=true

// 联合类
let age:string|number=1;
// age='hello'

// 对象 数组
// 数组里面都是number的类型
const arr:number[]=[1,2,3]

// 元组 标识数组里面都有哪些类型  且位置要意义对应
const tuple:[string,number]=['1212',1221]
console.log(tuple);

// null undefined
const n:null = null
const u:undefined=undefined


// 枚举 用的较多
enum USER_ROLE{
    USER='12121',
    MANAGE='34',
    ADMIN=43,
}
console.log(USER_ROLE.USER);

// 不知道用什么时，类型不明确
// any
const array:any=[]

// object 非原始数据类型
// Object.create(arr)
const create=(obj:Object)=>{

}
create({})
create([])
create(function(){})



export {}


