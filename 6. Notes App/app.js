const notes = document.querySelector("#notes")
const btn = document.querySelector("button")
const div = document.querySelector(".avi")

//notes.value === 0


    if (notes.value.trim() === "") {
        alert("Text area is blank");
        return;
    }
 
    btn.addEventListener("click" , function(){

    const card = document.createElement("div")
     card.classList.add("frist")
     card.textContent =notes.value
    div.appendChild(card)
    

    const cardDel = document.createElement("button")
     cardDel.innerText = "delete"
     cardDel.classList.add("delbtn")
     card.appendChild(cardDel)


      cardDel.addEventListener("click", function(e){
      card.remove();
      cardDel.remove();
     })
     
    
})



