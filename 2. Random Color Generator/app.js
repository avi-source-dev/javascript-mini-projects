const screen = document.querySelector(".continer")
const btn =  document.querySelector(".btn")
const text = document.querySelector(".rgb_text")



function rbgColor(){
    const r = Math.floor(Math.random()*256) 
     const g = Math.floor(Math.random()*256) 
      const b = Math.floor(Math.random()*256) 
      return `rgb(${r} , ${g} ,${b})`  
}

function frist(){
   screen.style.backgroundColor = rbgColor();
    text.innerHTML = rbgColor();
}


btn.addEventListener("click" , frist)