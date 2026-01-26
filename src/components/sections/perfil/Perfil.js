let Perfil = () => {
    let section = document.createElement("section");
    section.className = "perfil-container";

    let h2 = document.createElement("h2");
    h2.textContent = "Perfil de Usuario";
    
    let card = document.createElement("div");
    card.className = "perfil-card";

    let img = document.createElement("img");
    img.src = "./assets/icons/account_circle.svg"; 
    img.className = "perfil-img";

    let infoDiv = document.createElement("div");
    infoDiv.className = "perfil-info";

    let labelUser = document.createElement("p");
    labelUser.className = "perfil-label";
    labelUser.textContent = "Usuario:";

    let valueUser = document.createElement("p");
    valueUser.className = "perfil-value";
    valueUser.textContent = "Invitado";

    let labelPass = document.createElement("p");
    labelPass.className = "perfil-label";
    labelPass.textContent = "Contraseña:";

    let valuePass = document.createElement("p");
    valuePass.className = "perfil-value";
    valuePass.textContent = "********";

    infoDiv.appendChild(labelUser);
    infoDiv.appendChild(valueUser);
    infoDiv.appendChild(labelPass);
    infoDiv.appendChild(valuePass);

    card.appendChild(img);
    card.appendChild(infoDiv);

    section.appendChild(h2);
    section.appendChild(card);

    return section;
}

export { Perfil };