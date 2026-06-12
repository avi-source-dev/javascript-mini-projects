const images = document.querySelector(".images");
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")

const set_img =["images/image1.jpg","images/image2.jpg" ,"images/image3.jpg" ]
 
let index =0

leftBtn.addEventListener("click", function(){
    index--
    if(index<0){
    index = set_img.length-1
    }
    images.setAttribute("src", set_img[index])
})

rightBtn.addEventListener("click", function(){
    index++
    if(index >= set_img.length){
        index=0
    }
    images.setAttribute("src", set_img[index])
     console.log(index)
})



