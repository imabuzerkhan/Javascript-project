const button = document.querySelectorAll('.btn');
const images = document.querySelectorAll(".store-item")

button.forEach((button)=>{
button.addEventListener('click' ,(e)=>{
  e.preventDefault();
 const value = e.target.dataset.filter

images.forEach((item)=>{
  if(value === "all"){
    item.style.display = "block"

  }else if(item.classList.contains(value)){
    item.style.display = "block"
  }else{
    item.style.display = "none"
  }
});
});
});