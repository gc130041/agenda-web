import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList, saveContactsToStorage } from "../../../storage/storage.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";
    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    ContactList.forEach((contact) => {

        let item = ItemContacto(
            "account_circle.svg",
            contact.nombre,
            contact.telefono,
            () => {
                
                let index = ContactList.indexOf(contact);
                if (index > -1) {
                    ContactList.splice(index, 1); 
                    saveContactsToStorage(ContactList);
                }
                item.remove();
            }
        );
        sectionContactos.appendChild(item);
    });

    return sectionContactos;
}
export { Contactos }