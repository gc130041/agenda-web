let login = function () {

    let login = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Inicio de Sesión";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    let button = document.createElement("button");
    button.innerHTML = "Iniciar Sesión";

    button.addEventListener("click", () => {
        window.location.href = "src/app.html";
    });

    login.appendChild(h3);
    login.appendChild(user);
    login.appendChild(password);
    login.appendChild(button);

    return login;
    
}

export { login };