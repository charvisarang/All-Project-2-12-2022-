console.log("ES6");


// function nam() {
//     console.log(a);
//     var a = 5;
//     let b = 10;
//     const c = 15;  
// }
// nam();

// var nu undefined
// let and const cannot access


//===============================================================ARROW FUNCTION

// ==============================================================1)Single line

// let sum1 = (a,b) => a+b;
// console.log(sum1(5,2));


// let sum = (a,b) => a+b;
// console.log(`Addition is=${sum(5,6)}`);

//let sub=(a,b)=>a-b;
//console.log(`Substraction is=${sub(6,5)}`);

// let div=(a,b)=>a/b;
// console.log(`The division is ${div(4,2)}`);

// let multi=n=>n*2;
// console.log(`multiplication is=${multi(5)}`);

// let totalsum=(a,b)=>a+b;
// console.log(totalsum(5,6));

//==============================================================2)Multi line
// let number = (no1, no2) => {
//     let add = no1 + no2;
//     return add;
// }
// let no=number(5,6)
// console.log(no);



//======================================3)Multi-Line String========================Back-Stick(jivu lakhe evu print thai by using backstick)
// let longstring=`hiiiiiiii,
// byyyyyyyyyy,
// goooooooddd`;
// console.log(`Message is :${longstring}`);

// //==============================================================4)Template Literals
// const myfirstname="Charvi";
// const mylastname="Sarang";
// const myfullname=(`My Name is ${myfirstname} ${mylastname}`);
// console.log(myfullname);

//==============================================================5)Parameters Handling

//=============================================================5.1)Default Parameters
let sum=(a,b=20,c=0)=>{
console.log(`The value of a is ${a}`);
console.log(`The value of b is ${b}`);
console.log(`The value of c is ${c}`);
}
//sum();
sum(20,4 ,5);

//=======================================5.2)Rest Parameters(Index/Array wise aavi jai)======SPECIALITY 3 DOTS=> ...

// function fun(...args){
//     console.log("Argruments",args);
// }
//  let a=fun(1,2,3,4)
// console.log(a);


// function some(a,b,...c){
// console.log("a",a)
// console.log("b",b)
// console.log("c",c)
// }
// let z=some(1,2,3,4,5,6,7)
// console.log(z);


//=======================================5.3)Named Parameters
// function fun({a="abc",b="bcd",c="cde"}){
// console.log(a,b,c);
// }
// fun(); 


//=======================================5.3)Spread Operator
// function sum(x,y,z){
//     return x+y+z;
// }
// const numbers=[1,2,3,4,5,6]
// console.log(sum(...numbers));


//==============================================================6)Destructing Assignment
// const fruits=["apple","banana","chickoo"]
// var a=fruits[2];
// var b=fruits[1];

// console.log(a);
// console.log(b);


//=====================================================6.1)Array Destructing
// var fruitsss=["apple","banana","chickko"]
// var [a,b,c]=fruitsss;
// console.log("First value is",a);
// console.log("second value is",b);
// console.log("Third value is",c);

//=====================================================6.1)Object Destructing
// var studentsname=({rollno:1,fname:"charvi",age:15})
// var {rollno,fname,age}=studentsname;
// console.log("Roll no is",rollno);
// console.log("Name is",fname);
// console.log("Age is",age);
