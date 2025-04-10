// //function with parameter & argument 
// function sum(num1,num2){
//     console.log(num1+num2)
// }
// sum(2,3)
// sum(230,13)

// //function with return value
// function Tshirt(a){
//     return a
// }
// let data=Tshirt(3000)
// console.log(data> 2500 ? "Went to shop": "Fighting with mom")


// function cal(a,b,o){
//     let res;
//     switch(o){
//         case "+": res=a+b; break;
//         case "-": res=a-b;break;
//         case "*": res=a*b;break;
//     }
//     return res;
// }
// console.log(cal(2,4,"+"))

// //normal function
// function sum1(a,b){
//     return a+b
// }
// console.log(sum1(3,4))

// //Function Expressions es5(anonymous function)
// let sum=function(a,b)
// {
//     return a+b
// }
// console.log(sum(3,5))

// //arrow function es6
// //with single parameter
// let multi=(a)=>a*a
// console.log(multi(2))
// //with multi parameter
// let multi1=(a,b)=>a*b
// console.log(multi1(2,5))
// //with no parameter
// let multi2=()=>console.log('hello')
// multi2()
// //with retun value
// let multi12=(a,b)=> { return a*b}
// console.log(multi12(2,5))

//debugger
function Good(a){
    console.log("good")
    a()
}
function buy(){
   console.log("buy")
}
Good(buy)