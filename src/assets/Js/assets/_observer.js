export default function observer(){

    function loadElements(entradas){
        //recorremos las entradas observadas por el observer
        entradas.forEach((entrada)=>{
            // comprobar si la section ha sido intersectada
            if(entrada.isIntersecting){
            const fadeOutElements = entrada.target.querySelectorAll(".fadeOut")

            fadeOutElements.forEach((e)=>{
                e.classList.remove("fadeOut")
                e.classList.add("fadeIn")
            })


            }
        })
        
        
    }
    // creamos la instancia del observador y su config
    const observador = new IntersectionObserver(loadElements, { threshold: 0.1});
    // seleccionamos las sections para ser observadas
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section)=>{
        // le decimos al observador que observe cada section
        observador.observe(section);
    })
}