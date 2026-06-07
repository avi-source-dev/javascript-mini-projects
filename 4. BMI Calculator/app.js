const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const btn = document.querySelector("button")
   const frist = document.querySelector(".frist")
    const second = document.querySelector(".second")

btn.addEventListener("click", function(){

    let hg_cm = (height.value/100)*(height.value/100)
    let bmi = weight.value /hg_cm
    let normal_bmi = bmi.toFixed(2)
    
    if(normal_bmi<18.5){
        second.textContent ="Underweight"
    } else if(normal_bmi>=18.5 && normal_bmi<=24.9){
        second.textContent = "Healthy weight"
    } else if(normal_bmi>=25.0 && normal_bmi<=29.9){
        second.textContent = "Overweight"
    } else if(normal_bmi>=30.0){
        second.textContent= "Obese"
    }
    frist.textContent= normal_bmi
})
