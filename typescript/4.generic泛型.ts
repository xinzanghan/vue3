// 泛型  用来在代码执行时传入的类型，来确定结果
// 类型XXX取决于'wyh'的类型
function createdArray<XXX>(len: number, value: XXX): XXX[] {
  let result: any = [];
  for (let i = 0; i < len; i++) {
    result.push(value);
  }
  return result;
}

let arr = createdArray(3, "wyh");

// 多个泛型 元组的交换 [string,number] 交换成 [number,string]
// 写死 不方便，有可能有变化类型不一样
// const swap=(tuple:[string,number]):[number,string]=>{
//     return [tuple[1],tuple[0]]
// }
const swap = <S, N>(tuple: [S, N]): [N, S] => {
  return [tuple[1], tuple[0]];
};
swap<number, string>([1, '2']);

export{}
