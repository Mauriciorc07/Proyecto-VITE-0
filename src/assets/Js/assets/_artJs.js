
let mivariable
let miotravariable
const miValorInalterable = "Cualquiercosa"

let num1 = 15
let num2 = 3
let resultado = num1 * num2

console.log(resultado)

mivariable = "Mauricio"
miotravariable = "Merchan"

console.log(mivariable + " "+ miotravariable)
// aqui recojo un elemento html dentro de una constante
const elementoboton = document.querySelector("#boton")

// console.log(elementoboton)

elementoboton.addEventListener("click", function(){
    console.log("has hecho click")
})

const cambio = document.querySelector("#cambio")

cambio.addEventListener("click", function(){
    cambio.style.color="green"
    cambio.style.backgroundColor="yellow"
     cambio.style.border="1px solid black"
     
     

})

const botones = document.querySelectorAll(".boton")
// FUNCIÓN EACH PARA RECORRER BOTONES
botones.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
        botones.forEach((boton)=>{
        // recorro todos los botones de clase boton para resetear el color
        boton.style.backgroundColor = "#410a6e"
        // boton.style.border="2px dashed #410a6e"
        boton.style.color="white"
        console.log(mivariable)
        })
        // una vez se ha reseteado los botones, cambio de color el target sobre el que se hizo click
        e.currentTarget.style.backgroundColor="gray"
        e.currentTarget.style.color="orange"
        
    } )
})

// Ejercicio del toogle con texto "acordeon"
// recojo la coleccion de nodos con clase .botonDesplegable
const botonesDesplegable = document.querySelectorAll(".botonDesplegable")

// const desplegable = document.querySelector(".desplegable")

    // console.log(desplegable)

    // recorro foreach y funcion flecha
    botonesDesplegable.forEach((item)=>{
        item.addEventListener("click", ()=>{
        // const superior = item.parentElement
        // const miParrafo = superior.queryselector(".desplegable")
            const miParrafo = item.previousElementSibling

            miParrafo.classList.toggle("open")

            // if(miParrafo.classList.contains("open")){
            //     item.textContent ="leer menos"
            // }else{
            //     item.textContent = "leer más"
            //     item.style.backgroundColor = "#410a6e"
            //     item.style.color = "white"
                
            // } 

            item.textContent = miParrafo.classList.contains("open") ? "leer menos" : "leer más"
            // opcion 2
            // const h = miParrafo.classList.contains("open")
            // item.textContent = h ? "leer menos" : "leer más"

        })
    })


 
