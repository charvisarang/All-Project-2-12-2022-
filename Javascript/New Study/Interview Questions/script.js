document.write("Interview Questions");



// ==============================3-1-2023
// var value = 0;
// var array = [1, 2, 3, 4, 5]
// var fore = array.forEach(function test(value) {
//     array = value;
// })
// test();




// ==============================3.1
// (function () {
//     var a = b = c = 3;
//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(typeof c);
// })();

// console.log(typeof a == undefined);
// console.log(typeof b == undefined);


// (function () {
//     var a = b = c = 5;
// })();
// document.write(typeof a);//5


// ==============================3.3
// console.log(0.1 + 0.2);//0.3
// console.log(0.1 + 0.2 == 0.3);//False

// ==============================3.5
// var a1 = "john".split("");
// console.log(a1.length + "<br>" + a1.slice(-1));
// console.log(a1);



// var a1 = "john".split('');
// var a2 = a1.reverse();
// var a3 = "jones".split('');
// console.log(a1);
// console.log(a2);
// console.log(a3);

// a2.push(a3);
// console.log(a2);

// console.log(a2.length + a2.slice(-2));
// console.log(a2);


// console.log(1 + "2" + 5);//125

// console.log(1 + "2" + "7");//127

// console.log(1 + -"1" + "2");//02

// console.log(+"1" + "2" + 5);125

// console.log("A" - "A" + 5);//NaN
// console.log("A" + "A" + 5);//AA5

//==============================3.8
// console.log(false == '0');//TRUE
// console.log(false === 0);//TRUE


//==============================4.1

//==============================5.1
// console.log(2 + true);//3
// console.log(2 + false);//2

// console.log(2 + 6);//8
// console.log(5 + "2" + "g");//52g

// var a = 9;
// console.log(1 + a);//10

// var y = 1;
// var x = y = typeof x;
// console.log(x);//undefined

// var a = (2, 3, 5, 4);
// console.log(a);//returns the value of last element

// var a = -5 % 2;
// console.log(a);//-1

//==============================6.1
// var y = 1;
// if (function f() { }) {
//     y += typeof f;//undefined
// }
// console.log(y);//1

// ===========CLOSURE
// var i = 5;
// function myFun() {
//     var a = 10;
//     document.write(a + "<br>");
//     document.write(i);
// }
// myFun();

// var a = 5;
// function outerFun() {
//     var x = "This is x";
//     console.log(x);
//     function innerFun() {
//         var y = "This is y";
//         console.log(y);
//         console.log(x);//outerfunc nu variable x
//         console.log(a);//Globally bhi access thai
//     }
//     innerFun();
// }
// outerFun();

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arrayList.length);//6
// console.log(arrayList.length = 0);//empty krva mate
// console.log(arrayList.length);//empty thai jai toh 0 aave answer

