import '../scss/style.scss'
import '../Js/assets/_artJs.js'
// import '../Js/assets/_slider01.js'



import { artAcordeon01 } from './assets/_artAcordeon01.js'
import slider01 from "./assets/_slider01.js"
import _topBotom from './assets/_topBotom.js'
import darkmode from './assets/_darkmode.js'
import observer from './assets/_observer.js'
import navBar from './assets/_navBar.js'
import modal from './assets/_modal.js'
import Dialog from './assets/templates/Dialog.js'
import Contenido1 from './assets/templates/Contenido1.js'
import Contenido2 from './assets/templates/Contenido2.js'


document.addEventListener("DOMContentLoaded", () =>{
    // obtenemos la referencia del main dentro del DOM
    const $main = document.querySelector("main");
    artAcordeon01();
    slider01();

    // agregamos nuestro boton fab dentro del main
    $main.appendChild( _topBotom());
    darkmode();
    observer();
    navBar();
    // document.body.appendChild(modal());

    const $btnModal1 = document.querySelector("#openModal1");
    const $btnModal2 = document.querySelector("#openModal2");
    const $btnModal3= document.querySelector("#openModal3");
        $btnModal1.addEventListener("click", ()=>{
            document.body.appendChild(modal(Dialog()));
    });
        $btnModal2.addEventListener("click", ()=>{
            document.body.appendChild(modal(Contenido1()));
    });
        $btnModal3.addEventListener("click", ()=>{
            document.body.appendChild(modal(Contenido2()));
    });

}); //asi llamo a la funcion que viene del import