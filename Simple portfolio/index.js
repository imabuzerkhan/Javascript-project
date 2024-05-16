AOS.init();


let nightmode = document.getElementById("nightmode");
let icon1 = document.getElementById("icon1");
let icon = document.getElementById("icon")


nightmode.addEventListener("click" , BtnClick)


function BtnClick(){
  document.body.classList.toggle("dark-them")
  if(document.body.classList.contains("dark-them")){
    icon.style.transition = "4s"
    icon.style.display = "block"
  }
  else{
    !document.body.classList.contains("dark-them")
    icon.style.display = "none"
  }
}

