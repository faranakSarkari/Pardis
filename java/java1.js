const dis=document.querySelector("#dis")
const menudis=document.querySelector("#menudis")
dis.addEventListener("click",menu)
function menu(){
    menudis.classList.toggle("height")
}

const tran=document.querySelector(".skew")
const progressbar=document.querySelector("#progressbar")
window.onscroll=function(){
    const top=document.documentElement.scrollTop
    const width1=top/2000
    const width2=width1*100
    progressbar.style.width=width2+"%"

    const toparrow=document.querySelector("#top")
    if(top>200){
      toparrow.classList.add("active")
    }
    else{
      toparrow.classList.remove("active")
    }

  
    // const topp=document.documentElement.scrollTop
    // let translateY=0+topp/2.3
    // // console.log(translateY)
    // tran.style.transform= "translateY("+translateY+"px )"
}

const mainimg=document.querySelector(".main-1__top ")
mainimg.onmousemove=function(e){
  let x=e.clientX/2
  mainimg.style.backgroundPositionX= x+"px"
  
}


const right=document.querySelector(".fa-angles-right")
const left=document.querySelector(".fa-angles-left")
const secondimg=document.querySelector("#second img")
const nextimg=document.querySelectorAll("#sec2 img")

let i=0
right.addEventListener("click",fnright)
function fnright(){ 
  secondimg.setAttribute("src",nextimg[i].getAttribute("src"))
    i=(i+1)%nextimg.length  
}

left.addEventListener("click",fnleft)
function fnleft(){ 
  secondimg.setAttribute("src",nextimg[i].getAttribute("src"))
  i=(i-1+nextimg.length )%nextimg.length 
}

const select=document.querySelector("#sct")
select.addEventListener("click",colorfn)
function colorfn(){
  document.body.style.backgroundColor=select.value
  select.style.backgroundColor=select.value
  tran.style.backgroundColor=select.value
}
 
const logo=document.querySelector("#logo")
const beneathlogo=document.querySelector("#beneathlogo")
const container=document.querySelector(".maincontainer")
logo.addEventListener("click", rotatefn)
function rotatefn(){
  container.classList.add("active")
  beneathlogo.classList.add("active")
}
beneathlogo.addEventListener("click",rotaterefn)
function rotaterefn(){
  container.classList.remove("active")
  beneathlogo.classList.remove("active")
}

window.addEventListener("load",fn)
const loader=document.querySelector("#loader")
function fn(){
  loader.classList.add("hidden")
}

const submenu=document.querySelectorAll(".sub-menu li")
const submenu2= document.querySelectorAll(".sub-menu2")
for(let i=0; i<submenu.length; i=i+1){
  submenu[i].addEventListener("click",showsubmenu2)
  function showsubmenu2(){
   let n=0
   while(n<submenu.length){
    console.log(submenu[n].lastElementChild)
    submenu[n].lastElementChild.classList.remove("active")
    n=n+1
   }
   submenu[i].children[2].classList.add("active")
   console.log(submenu[i].children)    
  }}

  const slidesquares=document.querySelectorAll(".square i")
  const aside3p1=document.querySelector("#aside-3-p1")
  const aside3img=document.querySelector("#aside-3-img")
  const aside3p2=document.querySelector("#aside-3-p2")
  for(let i=0; i<slidesquares.length; i=i+1){
    slidesquares[i].addEventListener("click",showsqfn)
    function showsqfn(){
      console.log(slidesquares[i].children)
      aside3p1.textContent= slidesquares[i].children[0].children[0].textContent
      aside3img.src=slidesquares[i].children[0].children[1].src
      aside3p2.textContent= slidesquares[i].children[0].children[2].textContent
    }
  }
    

// حروف باقی مانده
const textarea=document.querySelector("#textarea")
const textremaining=document.querySelector("#textremaining")
let max_chars=100
textarea.addEventListener("input",()=>{
    const consume=textarea.value.length
    let remain=max_chars-consume
    console.log(remain)
    
    if(remain!==0){
        textremaining.innerHTML= "حروف باقی مانده " +remain
    }
    else {
        textremaining.innerHTML="  مقدار مجاز تکیمل است"
    }

    if(remain<20){
        textremaining.style.color="red"
    }
    else{
        textremaining.style.color="black"
    }
})



