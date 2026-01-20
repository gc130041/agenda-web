import { ContactList, saveContactsToStorage } from "../../../storage/storage.js";

let Formulario = function () {

    let form = document.createElement("form");
    form.className = "contact-form";

    let fieldset = document.createElement("fieldset");
    fieldset.className = "contact-form__fieldset";

    let legend = document.createElement("legend");
    legend.className = "contact-form__legend";
    legend.textContent = "Formulario de Contacto";

    let labelNombre = document.createElement("label");
    labelNombre.className = "contact-form__label";
    labelNombre.textContent = "Nombre";
    labelNombre.setAttribute("for", "nombre");

    let inputNombre = document.createElement("input");
    inputNombre.className = "contact-form__input";
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.placeholder = "Ingrese su nombre";
    inputNombre.required = true;

    let labelTelefono = document.createElement("label");
    labelTelefono.className = "contact-form__label";
    labelTelefono.textContent = "Teléfono";
    labelTelefono.setAttribute("for", "telefono");

    let inputTelefono = document.createElement("input");
    inputTelefono.className = "contact-form__input";
    inputTelefono.type = "tel";
    inputTelefono.id = "telefono";
    inputTelefono.name = "telefono";
    inputTelefono.placeholder = "Ingrese su teléfono";
    inputTelefono.required = true;

    let button = document.createElement("button");
    button.className = "contact-form__button";
    button.type = "submit";
    button.textContent = "Enviar";

    fieldset.appendChild(legend);
    fieldset.appendChild(labelNombre);
    fieldset.appendChild(inputNombre);
    fieldset.appendChild(labelTelefono);
    fieldset.appendChild(inputTelefono);
    fieldset.appendChild(button);

    form.appendChild(fieldset);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let contacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };

        ContactList.push(contacto);
        saveContactsToStorage(ContactList);

        alert("Contacto guardado correctamente");
        inputNombre.value = "";
        inputTelefono.value = "";
    });

    return form;
}

export { Formulario };