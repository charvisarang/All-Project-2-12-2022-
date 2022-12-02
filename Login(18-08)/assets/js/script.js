console.log("hiiii");

const authentication=localStorage.setItem("isAuthenticated",false/true);
const firstpage=document.querySelector(".firstpage");
const secondpage=document.querySelector(".secondpage");


function onlogin(){
    const authentication=localStorage.setItem("isAuthenticated",true);
    firstpage.classList.toggle("d-none");
    secondpage.classList.toggle("d-flex");
}

function onlogout(){
    const authentication=localStorage.setItem("isAuthenticated",false);
    firstpage.classList.toggle("d-none");
    secondpage.classList.toggle("d-flex");
}