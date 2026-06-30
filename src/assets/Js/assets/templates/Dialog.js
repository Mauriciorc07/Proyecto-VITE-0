

export default function Dialog(){
// crear plantilla html
    return `
    <div class="dialog">
            <span> ¿quieres ver las <strong> promociones?</strong></span>
        <a href="#" class="boton">boton1</a>
        <a href="#" class="boton">boton2</a>
        </div>
        <button class="btn btn-primary" type:"button" data-modal-close>Aceptar</button>
        <button class="btn btn-outlineprimary" type:"button" data-modal-close>Cerrar</button>
    `;
}