 const amount= document.querySelector("#amount")
  const tip = document.querySelector("#tip")
  const btn = document.querySelector("button")
   const frist = document.querySelector(".frist")
    const second = document.querySelector(".second")

  btn.addEventListener("click", function(e){
    console.log(e.target)

    let tip_amount = amount.value*(tip.value/100)
    let total_bill = Number(amount.value) + tip_amount

    frist.textContent =  tip_amount
    second.textContent= total_bill

    tip.value =""
    amount.value=""


  })
