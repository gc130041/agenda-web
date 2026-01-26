import { Modal } from "../modal/Modal.js";

let ItemContacto = (imgContacto, nombre, telefono, isFavorite, onDelete, onToggleFavorite) => {
    let div = document.createElement("div");
    div.className = "item-contacto";
    div.style.cursor = "pointer";
    
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

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (onDelete) onDelete();
    });

    div.addEventListener("click", () => {
        let formContainer = document.createElement("div");
        formContainer.className = "contact-form"; 
        formContainer.style.boxShadow = "none";
        formContainer.style.border = "none";
        formContainer.style.padding = "0";
        formContainer.style.margin = "0";

        let title = document.createElement("h3");
        title.textContent = "Detalles del Contacto";
        title.style.textAlign = "center";
        title.style.marginBottom = "20px";
        title.style.color = "var(--text-color)";

        let imgPreview = document.createElement("img");
        imgPreview.src = `./assets/icons/${imgContacto}`;
        imgPreview.style.width = "80px";
        imgPreview.style.display = "block";
        imgPreview.style.margin = "0 auto 20px auto";
        imgPreview.style.backgroundColor = "#e0e7ff";
        imgPreview.style.borderRadius = "50%";
        imgPreview.style.padding = "10px";

        let labelName = document.createElement("label");
        labelName.className = "contact-form__label";
        labelName.textContent = "Nombre";
        
        let inputName = document.createElement("input");
        inputName.className = "contact-form__input";
        inputName.value = nombre;
        inputName.disabled = true;

        let labelPhone = document.createElement("label");
        labelPhone.className = "contact-form__label";
        labelPhone.textContent = "Teléfono";
        labelPhone.style.marginTop = "10px";

        let inputPhone = document.createElement("input");
        inputPhone.className = "contact-form__input";
        inputPhone.value = telefono;
        inputPhone.disabled = true;

        formContainer.appendChild(title);
        formContainer.appendChild(imgPreview);
        formContainer.appendChild(labelName);
        formContainer.appendChild(inputName);
        formContainer.appendChild(labelPhone);
        formContainer.appendChild(inputPhone);

        Modal(formContainer);
    });

    div.appendChild(etiquetaImg);
    div.appendChild(divInfo);
    div.appendChild(favBtn);
    div.appendChild(deleteBtn); 

    return div;
}
export { ItemContacto };