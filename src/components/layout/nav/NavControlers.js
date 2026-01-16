import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario as FormularioComponent } from "../../sections/formulario/Formulario.js";

let viewContacts = function () {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewFormulario = function () {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(FormularioComponent());
}

export { viewContacts, viewFormulario };