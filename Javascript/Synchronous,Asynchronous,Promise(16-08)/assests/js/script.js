// console.log("hello");
// console.log("hiiii");

//======================================================Synchronous
// for (let index = 0; index<45; index++)
// {
//     const element=index;
//     console.log("values is="+element);
// }


//======================================================Asynchronous
// setTimeout(() => {
//     console.log("byeeee");
//     for (let i = 0; i < 15; i++) {
//         console.log(i);
//     }
// }, 8000);
// console.log("byyyyy");

//======================================================Promise
// function markscheck(){
// return new Promise(function(resolved,reject){
//   console.log("hiiiii");
//     setTimeout(()=>{
//     const marks=90;
//     if(marks!==90)
//     {
//     console.log("true");
//     resolved()
//     }
//     else
//     {
//     console.log("false");
//     reject()
//     }
// },3000);
// });
// }
// markscheck().then(function(){
// console.log("good marks");
// }).catch(function(marks){
// console.log("bad marks");
// });

//=============================================================

// async function rivet() {
//   console.log("before");
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   console.log("after");
// }
// rivet();


const fun1= (() => {
  fun2()
  setTimeout(() => {
    console.log("1111111111111111");
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  }, 3000);
});

fun1();










  //  async function hiren (){
  //        console.log('Inside function calling');
  //        const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //        console.log('before response');
  //        const users = await response.json();
  //        console.log('user resolved');
  //        return users
  //        return hiren
  //     }
      // console.log('after calling');
      // let a= hiren();
      // console.log('before calling');
      // console.log('a==>',a);
      // a.then(data=>console.log('data===>',data))
      // console.log('last calling');
    //}