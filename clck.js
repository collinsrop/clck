"use strict";
//styles
document.querySelector("div").style.display="flex";
document.querySelector("div").style.justifyContent="center";
document.querySelector("div").style.alignItems="center";
document.querySelector("div").style.gap="50px";
document.querySelector("div").style.fontFamily="cursive";
document.querySelector("div").style.fontSize="40px";
document.querySelector("body").style.backgroundColor="black";
document.querySelector("div").style.color="white";
//

document.addEventListener("DOMContentLoaded",()=>{
    let hrs=document.querySelector("#hrs");
	let mins=document.querySelector("#mins");
	let secs=document.querySelector("#secs");
	setInterval (()=>{
		hrs.innerHTML=new Date().getHours();
		mins.innerHTML=new Date().getMinutes();
		secs.innerHTML=new Date().getSeconds();
	})
});