let ItemContacto = (imgContacto, nombre, telefono, isFavorite, onDelete, onToggleFavorite) => {
    let div = document.createElement("div");
    div.className = "item-contacto";
    
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}`;

    let divInfo = document.createElement("div");
    divInfo.style.flex = "1";
    divInfo.style.marginLeft = "16px";

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;
    etiquetaNombre.style.fontWeight = "600";
    etiquetaNombre.style.margin = "0";

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;
    etiquetaTelefono.style.color = "var(--text-secondary)";
    etiquetaTelefono.style.fontSize = "0.9rem";
    etiquetaTelefono.style.margin = "4px 0 0 0";

    divInfo.appendChild(etiquetaNombre);
    divInfo.appendChild(etiquetaTelefono);

    let favBtn = document.createElement("img");
    favBtn.className = "fav-icon";
    favBtn.style.width = "24px";
    favBtn.style.cursor = "pointer";
    favBtn.style.marginRight = "10px";
    favBtn.style.transition = "transform 0.2s ease";

    favBtn.src = isFavorite ? "./assets/icons/star_shine.svg" : "./assets/icons/star.svg";

    favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        
        if (onToggleFavorite) onToggleFavorite();
        
        if (favBtn.src.includes("star_shine.svg")) {
            favBtn.src = "./assets/icons/star.svg";
            favBtn.style.transform = "scale(1)";
        } else {
            favBtn.src = "./assets/icons/star_shine.svg";
            favBtn.style.transform = "scale(1.2)";
            setTimeout(() => {
                favBtn.style.transform = "scale(1)";
            }, 200);
        }
    });

    let deleteBtn = document.createElement("img");
    deleteBtn.src = "./assets/icons/trash_can.svg";
    deleteBtn.className = "delete-contact-icon";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
        if (onDelete) onDelete();
    });

    div.appendChild(etiquetaImg);
    div.appendChild(divInfo);
    div.appendChild(favBtn);
    div.appendChild(deleteBtn); 

    return div;
}
export { ItemContacto };