const input_box = document.getElementById("input-row");
const list = document.getElementById("list-container");

const Btn1 = document.getElementById("btn");



Btn1.addEventListener("click" , AddTodo)

function AddTodo(){
  if(input_box === ""){
   alert("you must write some thing")
  }
  else{

    let li = document.createElement("li")
    li.innerHTML= input_box.value
    
 list.appendChild(li);
 let span = document.createElement("span")
 span.innerHTML = "\u00d7";
 li.appendChild(span);
   
  }
  input_box.value = ""
  SetData();
 
}

list.addEventListener("click" , function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("Checked");
    SetData()
  }
  else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    SetData();
  }
})

function SetData(){
localStorage.setItem("data" , list.innerHTML)
}
function Showdata(){
  list.innerHTML = localStorage.getItem("data")
}

Showdata();

