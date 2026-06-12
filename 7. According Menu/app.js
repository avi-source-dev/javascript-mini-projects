 const accordion_item  = document.querySelectorAll(".accordion-item")
 const btns = document.querySelectorAll(".accordion-header")
 const accordion_panels = document.querySelectorAll(".accordion-panel")  //content


btns.forEach((btn) => {

    btn.addEventListener("click", function(){

          const panel_current = btn.nextElementSibling;

          console.log(panel_current);
          

        accordion_panels.forEach((panel)=>{
            if(panel !== panel_current){
                 panel.classList.remove("show");

            }
        
        })
        
          panel_current.classList.toggle("show");
      
    })  

    })
    


