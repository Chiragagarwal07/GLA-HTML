//HoF
// function calculator(add,sub,multi,divi){
//     let a=20;
//     let b=30;
//     console.log(add());
//     console.log(sub());
//     console.log(multi());
//     console.log(divi());
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function multi(a,b){
//     return a*b;
// }
// function divi(a,b){
//     return a/b;
// }
// calculator(add,sub,multi,divi);
// function fun1(){
//     let a = 20;
//     let b = 10;
//     return ()=>{
//         let c = 40;
//         return()=>{
//             return a+b+c;
//         }
//         return fun3;
//     }
    // return fun2;
//}

// console.log(fun1());
// let returnedfun = fun1();
// console.log(returnedfun());
// console.log(fun1()()());


// let person = {'name':'shiv','age':'24','roll':'4'};
// for(let idx in person){
//     console.log(person[idx]);
// }
// //Map
// let arr = [1,2,3,4,5];
// let newArr = arr.map((item)=> item*5)
//     // return item*5;
// // });
// console.log(newArr);
// //Filter
// let filterArr = arr.filter((item)=>{
//     return item%2==0;
// });
// console.log(filterArr);
//Reduce
// let arr1 = [10,5,15,20,25];
// arr.reduce((acc,currValue)=>{
//     acc = acc+currValue;
//     return acc;
// },0);
//ForEach
//arr.forEach((item))

//map returns a new array but foreach does not return a newArray
//ques-Given an array of number, filter out the even numbers then double the value of remain number & then calculate their sum.

// let arr1 = [15,19,20,22,18,13,16,11];
// let oddArr = arr1.filter(item => item%2);
// let doubleArr = oddArr.map(item => item*2);
// let sum = doubleArr.reduce((acc,value) => {
//     acc += value;
//     return acc;
// });
// console.log(oddArr);
// console.log(doubleArr);
// console.log(sum);

//Synchronus & Asynchronus
console.log("hello");
// function waitAsec(){
// console.log(new Date().getTime());
// let curr_time = new Date().getTime();
// let fut_time = curr_time + 1000;
// while(new Date().getTime() < fut_time);
// }
// function waitNsec(){
//     for(let i=0;i<navigator;i++){
//         waitAsec();
//     }
// }
 //waitNsec(6);
// setTimeout(()=>{
//     console.log("inside setTimeout");
// },5000);
// let id = setInterval(()=>{
//     console.log(`data is fetched`);
// },1000)

// setTimeout(()=>{
//     clearInterval(id)
// },8000)
// console.log("world");
((){
    console.log("INSIDE IIFE FUNCTION")
})