import { Button } from "./components/common/button/Button.js";
import { viewContacts, viewFormulario } from "./components/layout/nav/NavControlers.js";

let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda", "perm_contact_calendar.svg", viewContacts));
nav.appendChild(Button("+", "plus", "add.svg", viewFormulario));
nav.appendChild(Button("ToDoList", "todoList", "list_alt_check.svg", () => console.log("ToDoList")));
nav.appendChild(Button("Crear tarea", "plus", "add.svg", () => console.log("Crear Tarea")));

let container = document.getElementById("container");

viewContacts();