  const count_num = document.querySelector(".frist")
  const increment = document.querySelector(".inc")
  const decrement = document.querySelector(".dec")
  const reset = document.querySelector(".res")

      let count =0
      
      function increment2(){
        count++
        avinash()
      }

    
      function second(){
         count--
         avinash()
      }

      function reset2(){
         count =0

        avinash()
      }
   
    increment.addEventListener("click" , increment2)
    decrement.addEventListener("click" , second)
    reset.addEventListener("click" , reset2)

 function avinash(){
        count_num.innerHTML = count
      }      