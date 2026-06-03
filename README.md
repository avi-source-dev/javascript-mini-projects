# JavaScript Mini Projects

This repository contains multiple JavaScript mini projects created while learning JavaScript.

## Projects

1. Counter App
2. Random Color Generator
3. Tip Calculator


## Technologies Used

- HTML
- CSS
- JavaScript

## Purpose

These projects were built to practice:
- DOM Manipulation
- Event Handling
- Functions
- Loops
- Conditional Statements
- Basic UI Development\


/// const btn = document.querySelector(".frist")
   btn.addEventListener("click", function(){
    const card= document.createElement("div")
        const delBtn= document.createElement("button")
    card.innerText = "aviansh"
    delBtn.innerText="Delete"
      const h1 = document.querySelector(".second")
    h1.append(card)
    h1.append(delBtn)
    


       delBtn.addEventListener("click", function () {
        card.remove();
        delBtn.remove();
    });
   })