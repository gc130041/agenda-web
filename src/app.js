import { Button } from "./components/common/button/Button.js";
import { viewContacts, viewFormulario, viewToDoList, viewCreateTask } from "./components/layout/nav/NavControlers.js";

let app = document.getElementById("app");
let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda", "perm_contact_calendar.svg", viewContacts));
nav.appendChild(Button("+ Contacto", "plus", "add.svg", viewFormulario));
nav.appendChild(Button("ToDoList", "todoList", "list_alt_check.svg", viewToDoList));
nav.appendChild(Button("Crear tarea", "plusTask", "add.svg", viewCreateTask));

let container = document.getElementById("container");

viewContacts();

async function tareas() {
	try{
        let data = await fetch("https://jsonplaceholder.typicode.com/")
        let r = await data.json();
        console.log(r);

    }catch (error){
        console.log(error);
	}
}

tareas();

console.log("Completado")