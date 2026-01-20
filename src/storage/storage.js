const CONTACTS_KEY = 'agenda_telefonica';
const TASKS_KEY = 'lista_tareas';

const defaultContacts = [
    { nombre: "Juan", telefono: "12345678" },
    { nombre: "María", telefono: "87654321" },
    { nombre: "Pedro", telefono: "11223344" }
];

const defaultTasks = [
    {id: 1, title: "Aprender JS", dueDate: "2026-03-13", done: false},
    {id: 2, title: "Hacer ejercicio", dueDate: "2026-02-09", done: false}
];

function saveContactsToStorage(contactos) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    let stored = localStorage.getItem(CONTACTS_KEY);
    let parsed = JSON.parse(stored);

    if (!stored || parsed.length === 0) {
        saveContactsToStorage(defaultContacts);
        return defaultContacts;
    }
    return parsed;
}

function saveTasksToStorage(tareas) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tareas));
}

function getTasksFromStorage() {
    let stored = localStorage.getItem(TASKS_KEY);
    let parsed = JSON.parse(stored);

    if (!stored || parsed.length === 0) {
        saveTasksToStorage(defaultTasks);
        return defaultTasks;
    }
    return parsed;
}

let ContactList = getContactsFromStorage();
let TaskList = getTasksFromStorage();

export { 
    ContactList, 
    TaskList, 
    saveContactsToStorage, 
    saveTasksToStorage 
};