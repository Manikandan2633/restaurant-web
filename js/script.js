let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let login = document.querySelector('.login');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
document.getElementById("log").addEventListener("click",function(){
  document.querySelector(".login").style.display = "block";
  document.querySelector("#blur").style.filter = "blur(5px)";
})
document.getElementById("close").addEventListener("click",function(){
  document.querySelector(".login").style.display = "none";
  document.querySelector("#blur").style.filter = "blur(0px)";
})







/*india,italian,mexi*/
function showfood(value){
  if (value=="zero"){
    document.getElementById('ind').style.display="none";
    document.getElementById('ita').style.display="none";
    document.getElementById('mexi').style.display="none";
    document.getElementById('juice').style.display="none";
  }
  if (value=="one"){
    document.getElementById('ind').style.display="block";
    document.getElementById('ita').style.display="none";
    document.getElementById('mexi').style.display="none";
    document.getElementById('juice').style.display="none";
  }
  if (value=="two"){
    document.getElementById('ind').style.display="none";
    document.getElementById('ita').style.display="block";
    document.getElementById('mexi').style.display="none";
    document.getElementById('juice').style.display="none";
  }
  if (value=="three"){
    document.getElementById('ind').style.display="none";
    document.getElementById('ita').style.display="none";
    document.getElementById('mexi').style.display="block";
    document.getElementById('juice').style.display="none";
  }   
if (value=="four"){
  document.getElementById('ind').style.display="none";
  document.getElementById('ita').style.display="none";
  document.getElementById('mexi').style.display="none";
  document.getElementById('juice').style.display="block";
}   
}
