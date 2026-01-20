import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario as FormularioComponent } from "../../sections/formulario/Formulario.js";
import { ToDoList, ToDoForm } from "../../sections/toDoList/ToDoList.js";

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

export { viewContacts, viewFormulario, viewToDoList, viewCreateTask };