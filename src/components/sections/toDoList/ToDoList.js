import { TaskList } from "../contactos/db.js";
let ToDoList = () => {
    let section = document.createElement("section");
    section.className = "todo-list";

    let h2 = document.createElement("h2");
    h2.textContent = "Lista de Tareas";
    section.appendChild(h2);

    let ul = document.createElement("ul");
    ul.className = "todo-list__container";

    TaskList.forEach((task) => {
        let li = document.createElement("li");
        li.className = task.done ? "todo-item done" : "todo-item";

        let checkbox = document.createElement("div");
        checkbox.className = "todo-item__checkbox";
        if (task.done) checkbox.textContent = "✔";

        let contentDiv = document.createElement("div");
        contentDiv.className = "todo-item__content";

        let p = document.createElement("p");
        p.textContent = task.title;
        contentDiv.appendChild(p);

        if (task.dueDate) {
            let dateSpan = document.createElement("span");
            dateSpan.className = "todo-item__date";
            dateSpan.textContent = `📅 ${task.dueDate}`;
            contentDiv.appendChild(dateSpan);
        }

        li.addEventListener("click", () => {
            task.done = !task.done;
            li.classList.toggle("done");
            checkbox.textContent = task.done ? "✔" : "";
        });

        let deleteBtn = document.createElement("img");
        deleteBtn.src = "./assets/icons/trash_can.svg";
        deleteBtn.className = "todo-item__delete";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.marginLeft = "auto";
        deleteBtn.style.width = "20px";

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 

            let index = TaskList.indexOf(task);
            if (index > -1) {
                TaskList.splice(index, 1);
            }


            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(contentDiv);
        li.appendChild(deleteBtn); 
        ul.appendChild(li);
    });

    section.appendChild(ul);
    return section;

}
let ToDoForm = () => {
    let form = document.createElement("form");
    form.className = "todo-form";

    let fieldset = document.createElement("fieldset");

    let legend = document.createElement("legend");
    legend.textContent = "Nueva Tarea";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "¿Qué tienes que hacer?";
    input.required = true;
    input.className = "todo-form__input";

    let inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.className = "todo-form__input";

    let button = document.createElement("button");
    button.textContent = "Guardar Tarea";
    button.type = "submit";
    button.className = "todo-form__button";

    fieldset.appendChild(legend);
    fieldset.appendChild(input);
    fieldset.appendChild(inputDate);
    fieldset.appendChild(button);
    form.appendChild(fieldset);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newTask = {
            id: Date.now(),
            title: input.value,
            dueDate: inputDate.value,
            done: false
        };
        TaskList.push(newTask);
        alert("Tarea guardada con éxito");
        input.value = "";
        inputDate.value = "";
    });

    return form;

}
export { ToDoList, ToDoForm };
