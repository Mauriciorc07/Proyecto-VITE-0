export default function _topBotom(){
    const $btnTop= document.createElement("button");
    $btnTop.className = "buttonn1 hidden"
    // mostramos el boton en el documento desps del main
    // document.body.appendChild($btnTop);
  

    $btnTop.innerHTML =`
    <i class="fa-solid fa-arrow-up"></i>
    `;
    
    $btnTop.addEventListener("click", (e)=>{
        window.scrollTo({top: 0, behavior: "smooth"});
    });

    window.addEventListener("scroll", ()=>{
        const scrollTop = document.documentElement.scrollTop

        if(scrollTop > 600){
            $btnTop.classList.remove("hidden")
            $btnTop.classList.add("show")
        }else{
            $btnTop.classList.add("hidden")
            $btnTop.classList.remove("show")
        }
    });

    return $btnTop;
}
