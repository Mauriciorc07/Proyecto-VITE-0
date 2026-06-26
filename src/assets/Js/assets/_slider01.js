export default function slider01(){
    console.log("Slider")

const $carrusel = document.querySelectorAll(".slider01")
    $carrusel.forEach(($el )=>{
        const $pista = $el.querySelector(".slider01_pista");

        const $sliders = $pista.querySelectorAll(".slider01_slide");

        const $dots = $el.querySelectorAll(".slider__track_dot");
        console.log($dots)

        if(!$pista || $sliders.length === 0) return


        let contador = 0;

        const tiempoTransicion = 500;
        const tiempoEspera = 3000;
            $sliders.forEach(($slide)=>{
                // console.log($slide);
                const $copia = $slide.cloneNode(true);
                $pista.appendChild($copia);
            });

            setInterval(()=> {
                
                contador++;

                $pista.style.transform =`translateX(-${100 * contador}%)`;
                $pista.style.transition = `transform ${tiempoTransicion}ms`;
                // actual elemento dot acivo 
                $dots[contador-1]?.classList.remove("active");
                // siguiente elemento dot 
                $dots[contador]?.classList.add("active");
                // siguiente elemento dot
                if($dots[contador]){
                    $dots[contador].classList.add("active")
                }else{
                   $dots[0].classList.add("active") 
                }

                if(contador === $sliders.length ){
                    setTimeout(()=>{
                        //vuelve el contador a cero
                        contador = 0;
                        $pista.style.transform = `translateX(0)`;
                        $pista.style.transition = "none";
                    }, tiempoTransicion)
                }
             

            }, tiempoEspera);

            // setTimeout(()=>{
            //     console.log(` me ejecuto cada ${tiempoEspera}`);
            // }, tiempoEspera);
            
        });  

}