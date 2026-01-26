import { TaskList, saveTasksToStorage } from "../../../storage/storage.js";
import { Modal } from "../../common/modal/Modal.js";

let ToDoList = () => {
    let section = document.createElement("section");
    section.className = "todo-list";

    let h2 = document.createElement("h2");
    h2.textContent = "Lista de Tareas";
    section.appendChild(h2);

    let ul = document.createElement("ul");
    ul.className = "todo-list__container";

    TaskList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    TaskList.forEach((task) => {
        let li = document.createElement("li");
        
        let today = new Date();
        let dueDate = new Date(task.dueDate);
        let timeDiff = dueDate - today;
        let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        let urgencyClass = "";
        let urgencyText = "";

        if (task.done) {
            urgencyClass = "done";
        } else if (daysDiff < 0) {
            urgencyClass = "expired";
            urgencyText = "Vencida";
        } else if (daysDiff <= 3) {
            urgencyClass = "urgent";
            urgencyText = "Urgente";
        } else {
            urgencyClass = "pending";
            urgencyText = "Pendiente";
        }

        li.className = `todo-item ${urgencyClass}`;

        let checkbox = document.createElement("div");
        checkbox.className = "todo-item__checkbox";
        if (task.done) checkbox.textContent = "✔";

        let contentDiv = document.createElement("div");
        contentDiv.className = "todo-item__content";

        let p = document.createElement("p");
        p.textContent = task.title;
        
        let statusSpan = document.createElement("span");
        statusSpan.className = "todo-item__status";
        statusSpan.textContent = urgencyText;

        contentDiv.appendChild(p);
        contentDiv.appendChild(statusSpan);

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
            
            if (task.done) {
                statusSpan.textContent = "Completada";
            } else {
                statusSpan.textContent = urgencyText;
            }

            saveTasksToStorage(TaskList);
        });

        let actionsDiv = document.createElement("div");
        actionsDiv.className = "todo-item__actions";

        let editBtn = document.createElement("img");
        editBtn.src = "./assets/icons/edit.svg";
        editBtn.className = "todo-item__edit";
        editBtn.style.cursor = "pointer";
        editBtn.style.width = "20px";

        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            
            let formContainer = document.createElement("form");
            formContainer.className = "todo-form";
            formContainer.style.boxShadow = "none";
            formContainer.style.border = "none";
            formContainer.style.padding = "0";
            formContainer.style.margin = "0";

            let legend = document.createElement("h3");
            legend.textContent = "Editar Tarea";
            legend.style.textAlign = "center";
            legend.style.marginBottom = "15px";

            let inputTitle = document.createElement("input");
            inputTitle.type = "text";
            inputTitle.value = task.title;
            inputTitle.required = true;
            inputTitle.className = "todo-form__input";
            inputTitle.style.marginBottom = "10px";

            let inputDate = document.createElement("input");
            inputDate.type = "date";
            inputDate.value = task.dueDate;
            inputDate.className = "todo-form__input";
            inputDate.required = true;
            inputDate.style.marginBottom = "15px";

            let saveBtn = document.createElement("button");
            saveBtn.textContent = "Guardar Cambios";
            saveBtn.type = "submit";
            saveBtn.className = "todo-form__button";

            formContainer.appendChild(legend);
            formContainer.appendChild(inputTitle);
            formContainer.appendChild(inputDate);
            formContainer.appendChild(saveBtn);

            formContainer.addEventListener("submit", (ev) => {
                ev.preventDefault();
                task.title = inputTitle.value;
                task.dueDate = inputDate.value;
                saveTasksToStorage(TaskList);
                
                let closeBtn = document.querySelector(".modal-close");
                if(closeBtn) closeBtn.click();

                let container = document.getElementById("container");
                container.innerHTML = "";
                container.appendChild(ToDoList());
            });

            Modal(formContainer);
        });

        let deleteBtn = document.createElement("img");
        deleteBtn.src = "./assets/icons/trash_can.svg";
        deleteBtn.className = "todo-item__delete";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.width = "20px";

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 

            let index = TaskList.indexOf(task);
            if (index > -1) {
                TaskList.splice(index, 1);
                saveTasksToStorage(TaskList);
            }

            li.remove();
        });

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(checkbox);
        li.appendChild(contentDiv);
        li.appendChild(actionsDiv); 
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
    inputDate.required = true;

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
        saveTasksToStorage(TaskList);

        alert("Tarea guardada con éxito");
        input.value = "";
        inputDate.value = "";
    });

    return form;
}
export { ToDoList, ToDoForm };