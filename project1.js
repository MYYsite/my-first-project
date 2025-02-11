let hello ="Hello JavaScript!";
console.log(hello);
const fruit = 'apple';
//fruit = 'orange';
console.log(fruit);

let s="String";
console.log(s);

let name="0xAA";
let age =18;
//let template =`name ${name},age ${age}`;
let template ="Name "+name+" Age "+age;
console.log(template);
age =24;
console.log(template);  //模板字符串是在定义时进行求值的。后续对变量的修改不会影响已经创建的模板字符串。

console.log(5==='5'); //严格相等
console.log(5!=='5'); 

function TestJS05(x) {
    // 要修改的函数 prod，计算x和y的积
    function prod(x, y){
      return x*y;
    }
    // 应返回30
    return prod(5, 6);
}
console.log(TestJS05(4,7));

function sum(num) {
    let t=0;
    for(let i=1;i<=num;i++){
        t+=i;
    }
    return t;
}
console.log(sum(5)) // 应该返回 15
console.log(sum(9)) // 应该返回 45

function sumOdd(arr){
    let t=0;
    while(arr.length){
        let last=arr.pop();
        if(last%2)t+=last;
    }
    return t;
}

console.log(sumOdd([1, 2, 3, 4, 5])) // 应该返回 9
console.log(sumOdd([2, 4, 6, 8, 10])) // 应该返回 0
console.log(sumOdd([1, 3, 5, 7, 9])) // 应该返回 25

