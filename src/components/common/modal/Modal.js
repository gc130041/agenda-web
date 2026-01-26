let Modal = (content) => {
    let overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    let modalBox = document.createElement("div");
    modalBox.className = "modal-box";

    let closeBtn = document.createElement("button");
    closeBtn.className = "modal-close";
    closeBtn.innerHTML = "&times;";
    
    closeBtn.addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });

    modalBox.appendChild(closeBtn);
    modalBox.appendChild(content);
    overlay.appendChild(modalBox);

    document.body.appendChild(overlay);
}

export { Modal };