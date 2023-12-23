//#region GetElementsById
let textscreen = document.getElementById("textscreen");
let numbersonscreen = document.getElementById("numbersonscreen");

let btnclear = document.getElementById("btnclear");
let btnmodlus = document.getElementById("btnmodlus");
let btnplus = document.getElementById("btnplus");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnsubtraction = document.getElementById("btnsubtraction");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnmultiblcation = document.getElementById("btnmultiblcation");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btndivide = document.getElementById("btndivide");
let btn00 = document.getElementById("btn00");
let btn0 = document.getElementById("btn0");
let btndot = document.getElementById("btndot");
let btnequal = document.getElementById("btnequal");
let btndelete = document.getElementById("btndelete");
//#endregion

//#region BtnsFunctions
btn0.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn0.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn00.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn00.innerHTML);
    numbersonscreen.innerHTML += '00';
});

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn1.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn2.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn3.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn3.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn4.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn4.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn5.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn5.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn6.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn6.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn7.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn7.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn8.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn8.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btn9.addEventListener("click", (e) => {
    e.preventDefault();
    let variable = parseInt(btn9.innerHTML);
    numbersonscreen.innerHTML += variable;
});

btnplus.addEventListener("click", (e) => {
    e.preventDefault();
    let variable =btnplus.innerHTML;
    numbersonscreen.innerHTML += variable;
});

btnsubtraction.addEventListener("click", (e) => {
    e.preventDefault();
    let variable =btnsubtraction.innerHTML;
    numbersonscreen.innerHTML += variable;
});

btnmultiblcation.addEventListener("click", (e) => {
    e.preventDefault();
    let variable =btnmultiblcation.innerHTML;
    numbersonscreen.innerHTML += '*';
});

btndivide.addEventListener("click", (e) => {
    e.preventDefault();
    let variable =btndivide.innerHTML;
    numbersonscreen.innerHTML += variable;
});

btndot.addEventListener("click", (e) => {
    e.preventDefault();
    let variable =btndot.innerHTML;
    numbersonscreen.innerHTML += '.';
});

btnmodlus.addEventListener("click", (e) => {
    e.preventDefault();
    let variable =btnmodlus.innerHTML;
    numbersonscreen.innerHTML += variable;
});

btndelete.addEventListener("click", (e) => {
    e.preventDefault();
    numbersonscreen.innerHTML =  numbersonscreen.innerHTML.toString().slice(0,-1);
});

btnequal.addEventListener("click", (e) => {
    e.preventDefault();
    let value = numbersonscreen.innerHTML;
    let lengthofvalue = value.length;
    if(lengthofvalue > 0){
        console.log(eval(numbersonscreen.innerHTML));
        numbersonscreen.innerHTML = eval(numbersonscreen.innerHTML);
    }
    else{
        numbersonscreen.innerHTML = "";
    }
    
});

btnclear.addEventListener("click", (e) => {
    e.preventDefault();
    numbersonscreen.innerHTML = "";
});
//#endregion
