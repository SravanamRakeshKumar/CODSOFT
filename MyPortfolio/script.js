  var k=1;
  var s=1;
  //var width=computedStyle.width;
  var ed=document.getElementById("ed");
  var skill=document.getElementById("stand1");
  var all=document.getElementById("stand2");
  var q=document.getElementById("quee");
  window.addEventListener("scroll",change);
  var l1=document.getElementById("l1");
  var l2=document.getElementById("l2");
  var l3=document.getElementById("l3");
  var line=document.getElementsByClassName("line");

  function footer()
  {
    s=s+1;
    if(s%2==0)
    {
      for(var k=0;k<3;k++)
      {
        line[k].style.position="absolute";
      }
    //line.style.position="absolute";
      l2.style.display="none";
      l1.style.width="35px";
      l3.style.width="35px";
      l1.style.transform="rotate(60deg)"
      l3.style.transform="rotate(-60deg)";

     q.style.display="block";
     q.style.display="flex";
     q.style.flexDirection="column";
     q.style.alignItems="center";
     q.style.justifyContent="center";
    }
    else 
    {
     q.style.display="none";
     
      for(var k=0;k<3;k++)
      {
        line[k].style.position="relative";
      }
      l2.style.display="block";
      l1.style.width="50px";
      l1.style.width="50px";
      l3.style.width="50px";
      l1.style.transform="rotate(0deg)"
      l3.style.transform="rotate(0deg)";
    }
  }
  
  function change()
  {
  const x = window.innerHeight * 0.6;
  const y=window.innerHeight*0.3;
  const z=window.innerHeight*0.7;
  var top1 = ed.getBoundingClientRect().top;
  var top2 = skill.getBoundingClientRect().top;
  var top3 = all.getBoundingClientRect().top;

     if(top1<x && k==1)
    {
       fun3();
       k=k+1;
    }
     if(top2<y && k==2)
    {
       fun5();
       k=k+1;
    }
     if(top3<z && k==3)
    {
       fun8();
       k=k+1;
    }

  }
  
  var d=document.getElementById("move");
  var arry=["Sravanam","Rakesh","Kumar"];
  var item=0;
  var c=document.getElementById("circle");
var n=document.getElementById("h");

 // d.style.color="red";
  function load()
  {
   c.style.animation="loki 3s 1";
   h.style.animation="name 3s 1";
  }
  //name animation 
  function fun2()
  {
   d.innerText = "";
  var a =arry[item];
  var i = 0;
     function fun()
     {
       if (i == a.length)
       { 
          if(item == (arry.length)-1)
          {
            item=0;
          }
          else 
         {
            item=item+1;
         }
        clearInterval(t1);
        setTimeout(fun2,1000);
      }
      else
      {
       d.innerText = d.innerText + a[i];
       i = i + 1;
      }
    }
    var t1 = setInterval(fun, 200);
  }
  setTimeout(fun2,2000);
  //close the name animation function 
  
  function fun3()
   {
     let a = document.getElementsByClassName("per");
     let b = document.getElementsByClassName("pp");
    // console.log(a);
    let values=[97,87,71];
     //let c = document.querySelector('.ppp');
     for(let p=0;p<a.length;p++)
     {
        let start = 0;
         let end = values[p];
         let fun4 = setInterval(() => {
           start = start + 1;
           let x = start * 3.6;
           a[p].style.background='conic-gradient(deeppink '+x+'deg,black 0)';
           a[p].style.transform = "rotate('+x+' deg)"
           b[p].innerText = start + '%';
           if(end==start)
           {
           clearInterval(fun4);
          }
     },50);
     }
     
   }
  // fun3();
   function fun5()
   {
     let numbers=[100,20,10,60,70,50,40,20,50];
     let nums=document.getElementsByClassName("inner");
     let n = document.getElementsByClassName("num");

     for(let k=0;k<nums.length;k++)
     {
        let start1= 0;
        let start2=0.7;
         let end = numbers[k];
         let fun6 = setInterval(() => {
           start1 = start1 +1;
           start2=start2+0.7;
       nums[k].style.width=start2+"%";
           n[k].innerText = start1 + '%';
           if(end==start1)
           {
           clearInterval(fun6);
            }
     },50);

     }
   }
   //fun5();
   function fun8()
   {
     let numbers=[100,30,50];
     let nums=document.getElementsByClassName("inner1");
     let n = document.getElementsByClassName("num1");

     for(let k=0;k<nums.length;k++)
     {
        let start1= 0;
        let start2=0.7;
         let end = numbers[k];
         let fun7= setInterval(() => {
           start1 = start1 +1;
           start2=start2+0.7;
       nums[k].style.height=start2+"%";
           n[k].innerText = start1 + '%';
           if(end==start1)
           {
           clearInterval(fun7);
            }
     },50);

     }
   }
   //fun8();
   
var computedStyle = window.getComputedStyle(q);
var width=computedStyle.width;
//console.log(width)
var px;
function style()
{
    if (width == "360px")
    {
      px = 70;
      q.style.display = "none";
    }
    for (var k = 0; k < 3; k++)
    {
      line[k].style.position = "relative";
    }
    l2.style.display = "block";
    l1.style.width = "50px";
    l1.style.width = "50px";
    l3.style.width = "50px";
    l1.style.transform = "rotate(0deg)"
    l3.style.transform = "rotate(0deg)";
}
   function home()
   {
     s=s+1;
  document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
       style();
   }
   function about()
   {
     s=s+1;
     px=130;
  var aaa=document.getElementById("about");
  style();
   if(width=="360px")
     {
       px=70;
     }

const targetPosition = aaa.getBoundingClientRect().top + window.scrollY;
window.scrollTo({
  top: targetPosition -px,
  behavior: 'smooth'
});

   }
   function skills()
   {
     px=130;
     s=s+1;
 var bbb= document.getElementById("skills");
  style();

    if(width=="360px")
     {
       px=70;
     }
const targetPosition = bbb.getBoundingClientRect().top + window.scrollY;
window.scrollTo({
  top: targetPosition -px,
  behavior: 'smooth'
});

   }
   function projects()
   {
     px=130;
     s=s+1;
 var ppp= document.getElementById("projects");
  style();

    if(width=="360px")
     {
       px=70;
     }
const targetPosition = ppp.getBoundingClientRect().top + window.scrollY;
window.scrollTo({
  top: targetPosition -px,
  behavior: 'smooth'
});

   }
   function contact()
   {
     px = 130;
     s = s + 1;
     var ppp = document.getElementById("contact");
     style();

     if (width == "360px")
     {
       px = 70;
     }
     const targetPosition = ppp.getBoundingClientRect().top + window.scrollY;
     window.scrollTo({
       top: targetPosition - px,
       behavior: 'smooth'
     });

   }
