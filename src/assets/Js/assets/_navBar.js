import { compileString } from "sass"

  export default function navBar(){
  
 const $navT =  document.querySelector(".navbar")

  window.addEventListener("scroll", (e)=>{
       const scrollTop = document.documentElement.scrollTop
        // console.log(scrollTop)
        
         if(scrollTop > 400){
            $navT.classList.add("bg-primary")
            $navT.classList.remove("bg-body-tertiary")
            //   $navT.style.backgroundColor= "yellow"
         }else {
            $navT.classList.remove("bg-primary")
            $navT.classList.add("bg-body-tertiary")
            //  $navT.style.backgroundColor= "bg-body-tertiary" 
         }
   })
  
  
}      