import { Button } from "./components/common/button/Button.js";
import { Contactos } from  "./components/sections/contactos/Contactos.js";

//App
let app = document.getElementById("app");

//section menú
let nav = document.getElementById("nav");
//agregar botones
nav.appendChild(Button("Agenda", "agenda", "perm_contact_calendar.svg"));
nav.appendChild(Button("+", "plus", "add.svg"));
nav.appendChild(Button("ToDoList", "todoList", "list_alt_check.svg"));
nav.appendChild(Button("Crear tarea", "plus", "add.svg"))

//section container
let container = document.getElementById("container");
container.appendChild(Contactos());

//cargar el DOM
app.appendChild(nav); 
app.appendChild(container);