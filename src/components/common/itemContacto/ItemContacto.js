let ItemContacto = (imgContacto, nombre, telefono, onDelete) => {
    let div = document.createElement("div");
    div.className = "item-contacto";
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;


    let deleteBtn = document.createElement("img");
    deleteBtn.src = "./assets/icons/trash_can.svg";
    deleteBtn.className = "delete-contact-icon";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.marginLeft = "10px";


    deleteBtn.addEventListener("click", () => {
        if (onDelete) onDelete();
    });

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);
    div.appendChild(deleteBtn); 

    return div;
}
export { ItemContacto };