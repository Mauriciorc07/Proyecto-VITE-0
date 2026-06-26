export default function modal(template){

    const $modal = document.createElement("div")
    $modal.id="modal"


    $modal.innerHTML=`
    <div class="modal__container">
        <div class="modal__header">
            <span class ="modal--btn-close">
                <i class= "fa-solid fa-xmark"> </i>
            </span>
        </div>
        <div class= "modal__body">
        ${template}
        </div>
    </div>
    `;

    const $btnclose = $modal.querySelector(".modal--btn-close");
    // cerramos la modal cuando pulse click en el boton
    $btnclose.addEventListener("click", ()=> $modal.remove())


    return $modal;
}

    // console.log($modal.className)
    // cerramos la modal cuando se pulse click
    // $modal.addEventListener("click", (e)=>{
       
    //     if(e.target.classList.contains("modal__container")){
    //         $modal.remove();
    // //     }      
    // });