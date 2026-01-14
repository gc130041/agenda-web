import { Contactos } from "../../sections/contactos/Contactos";
import { Formulario } from "../../sections/formulario/Formulario";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let Formulario = function () {
    container.innerHTML = "";
    container.appendChild(Formulario());
}

export { viewContacts, Formulario };