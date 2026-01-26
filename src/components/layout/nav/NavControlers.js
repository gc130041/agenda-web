import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario as FormularioComponent } from "../../sections/formulario/Formulario.js";
import { ToDoList, ToDoForm } from "../../sections/toDoList/ToDoList.js";
import { Favoritos } from "../../sections/favoritos/Favoritos.js";
import { Perfil } from "../../sections/perfil/Perfil.js";

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

let viewToDoList = function () {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(ToDoList());
}

let viewCreateTask = function () {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(ToDoForm());
}

let viewFavoritos = function () {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Favoritos());
}

let viewPerfil = function () {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Perfil());
}

export { viewContacts, viewFormulario, viewToDoList, viewCreateTask, viewFavoritos, viewPerfil };