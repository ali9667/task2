const close=document.querySelect(".close");
const open=document.querySelect(".ham");
const menu=document.querySelect(".menu");
close.addEventListener("click",()=>{
menu.style.visibility="hidden";})
open.addEventListener("click",()=>{
menu.style.visibility="visibility";});