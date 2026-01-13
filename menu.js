let menu = function () {
    //Ejercicio 2
    let div = document.createElement("div");
    div.className = "div-padre";

    let div1 = document.createElement("div");
    div1.className = "div-1";
    div.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className = "div-2";
    div.appendChild(div2);

    return div;
}

export { menu };