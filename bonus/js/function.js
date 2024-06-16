// CREA ELEMENTO CON CLASSE
function createElementWithClass (tag, cssClass) {
    const element = document.createElement (tag);
    element.classList.add(cssClass);
    return element
}

// CREA NUMERO CASUALE IN UN RANGE
function randomNumberRange (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// GENERA NUMERI CASUALI IN UN RANGE DI NUMERI
function randomNumberGenerationRange (min, max, count){
    // Crea array vuoto
    const numberList = [];

    // Crea un ciclo che genera 16 numeri casuali
    while (numberList.length < count){
        let randomNumber = randomNumberRange (min, max);

        // inserisci il numero casuale solo se non è gia presente nell'array
        if(!numberList.includes(randomNumber)){
            numberList.push(randomNumber);
        }
    }
    return numberList
}
