import { compileString } from "sass";

export default function validationForm(){
    // seleccionamos el formulario por etiqueta
    // const $form = document.querySelector("form");
 const errors = {

    name:{
        pattern: "[A -Za-z]{3}",
        message: "El nombre debe contener solo letras y 3 caracteres"
    },
       apellido:{
        pattern: "[A -Za-z]{3}",
        message: "El nombre debe contener solo letras y 3 caracteres"
    }
 };

//  creamos el elemento span para el messaje error
const $span = document.createElement("span");

    document.addEventListener("submit", (e)=>{
        e.preventDefault();
     const $form = e.target;
        // seleccionamos todos los form__field
     const $formfield = $form.querySelectorAll(".form__field")
   
// recorremos los form__field del formulario que inicio el evento
     $formfield.forEach((field) => {
        const input = field.querySelector("input")
        console.log(errors[input.name],input.name)
        const pattern = new RegExp(errors[input.name].pattern);
     $span.innerText = errors[input.name].message;
        // comprobamos si el valor del input cumple o no la expre regular
            if(!pattern.test(input.value) && !field.contains($span)){
                console.log(field,input.name)
                // console.log("el valor cumple con la exp regular")
                field.insertAdjacentElement("beforebegin", $span);
            //    field.appendChild($span)
            }else{
                    
            }

     });
    })
}