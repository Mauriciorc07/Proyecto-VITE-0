export function artAcordeon01(){

    // recojo la coleccion de nodos con clase .botonDesplegable
const botonesD = document.querySelectorAll(".mostrar")

    botonesD.forEach((item)=>{
        item.addEventListener("click", ()=>{
        // const superior = item.parentElement
        // const miParrafo = superior.queryselector(".desplegable")
            const textFicha = item.previousElementSibling

            textFicha.classList.toggle("abrir")

            item.textContent = textFicha.classList.contains("abrir") ? "leer menos" : "leer más"
            

        })
    })

}