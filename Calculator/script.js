var a=document.getElementById("a");
var b=document.getElementById("two");
function fun()
{
 var x=document.getElementById(event.target.id);
 a.innerHTML+=x.innerText;
}
function result()
{
 a.innerText=eval(a.innerText);
}
function arise()
{
 a.innerText="";
}
function cross()
{
 let s=a.innerText;
 a.innerText=s.slice(0,s.length-1);
}