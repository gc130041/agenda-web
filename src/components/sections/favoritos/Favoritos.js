import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList, saveContactsToStorage } from "../../../storage/storage.js";

let Favoritos = () => {
    let section = document.createElement("section");
    section.className = "favoritos";
    
    let h2 = document.createElement("h2");
    h2.textContent = "Favoritos";
    section.appendChild(h2);

    let container = document.createElement("div");
    container.className = "favoritos-list";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "16px";

    let favList = ContactList.filter(contact => contact.isFavorite === true);

    if (favList.length === 0) {
        let emptyMsg = document.createElement("p");
        emptyMsg.textContent = "No tienes contactos favoritos.";
        emptyMsg.style.color = "var(--text-secondary)";
        emptyMsg.style.textAlign = "center";
        emptyMsg.style.marginTop = "20px";
        container.appendChild(emptyMsg);
    } else {
        favList.forEach((contact) => {
            let item = ItemContacto(
                "account_circle.svg",
                contact.nombre,
                contact.telefono,
                true,
                () => { 
                    let index = ContactList.indexOf(contact);
                    if (index > -1) {
                        ContactList.splice(index, 1); 
                        saveContactsToStorage(ContactList);
                    }
                    item.remove();
                    checkEmpty();
                },
                () => { 
                    contact.isFavorite = false;
                    saveContactsToStorage(ContactList);
                    item.remove();
                    checkEmpty();
                }
            );
            container.appendChild(item);
        });
    }

    function checkEmpty() {
        if(container.querySelectorAll('.item-contacto').length === 0){
             let emptyMsg = document.createElement("p");
             emptyMsg.textContent = "No tienes contactos favoritos.";
             emptyMsg.style.color = "var(--text-secondary)";
             emptyMsg.style.textAlign = "center";
             emptyMsg.style.marginTop = "20px";
             container.appendChild(emptyMsg);
        }
    }

    section.appendChild(container);
    return section;
}

export { Favoritos };