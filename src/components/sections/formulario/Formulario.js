let Formulario = () => {
    let form = document.createElement("form");
    form.className = "formulario";

    let titulo = document.createElement("h3");
    titulo.textContent = "Nuevo Contacto";
    form.appendChild(titulo);

    let divNombre = document.createElement("div");
    divNombre.className = "input-group";
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";
    divNombre.appendChild(inputNombre);
    form.appendChild(divNombre);

    let divTelefono = document.createElement("div");
    divTelefono.className = "input-group";
    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Número de teléfono";
    divTelefono.appendChild(inputTelefono);
    form.appendChild(divTelefono);

    let button = document.createElement("button");
    button.type = "submit";
    button.className = "btn-agregar";
    button.textContent = "Agregar Contacto";

    button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Nombre:", inputNombre.value, "Teléfono:", inputTelefono.value);
    });

    form.appendChild(button);

    return form;
}

export { Formulario };