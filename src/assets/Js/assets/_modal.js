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
      const $modalContainer = $modal.querySelector(".modal__container");
    // cerramos la modal cuando pulse click en el boton
    $btnclose.addEventListener("click", ()=> $modal.remove());

    $modal.addEventListener("click", (e)=> {
        
     if(e.target.closest("[data-modal-close]")){
        $modal.remove()
     }
// cerramos la modal si se pulsa fuera del container
     if(!$modalContainer.contains(event.target)){
        $modal.remove()
     }


    });

    return $modal;

}