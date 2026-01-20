const LOCAL_STORAGE_KEY = 'agenda_telefonica';

function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

let ContactList = getContactsFromStorage();

let TaskList = [
    {id: 1, title: "Aprender JS", dueDate: "2026-03-13", done: false},
    {id: 2, title: "Hacer ejercicio", dueDate: "2026-02-09", done: false}
];

export { ContactList, TaskList, saveContactsToStorage };