 const accordion_item  = document.querySelectorAll(".accordion-item")
 const btns = document.querySelectorAll(".accordion-header")
 const accordion_panels = document.querySelectorAll(".accordion-panel") // vo paragraph ka contant


btns.forEach((btn) => {

    btn.addEventListener("click", function(){

          const panelRaj = btn.nextElementSibling;

        accordion_panels.forEach((panel)=>{
            if(panel !== panelRaj){
                 panel.classList.remove("show");

            }
        
        })
        
          panelRaj.classList.toggle("show");
      
    })  

    })
    


