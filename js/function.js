// CREA ELEMENTO CON CLASSE
function createElementWithClass (tag, cssClass) {
    const element = document.createElement (tag);
    element.classList.add(cssClass);
    return element
}