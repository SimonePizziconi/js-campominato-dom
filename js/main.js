// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// prendiamo il container da HTML
const containerGrid = document.querySelector(".grid-container");

// prendiamo il bottone da HTML
const playButton = document.getElementById("play");

// Prendi contenitore bottone e select da HTML
const containerStart = document.getElementById("start-container");

// crea un evento al click del bottone
playButton.addEventListener("click", 
    function(){
        // elimina il bottone
        containerStart.classList.add("none")

        // Genera 16 numeri casuali
        const listBomb = randomNumberGenerationRange(1, 100, 16);
        console.log(listBomb);

        // Crea un numero di celle sicure sottraendo box sicuri - box bomba
        let totalBox = 100;
        let boxBomb = listBomb.length;
        let safeBox = totalBox - boxBomb;
        let clickBoxSafe = 0;
    
        // Ogni cella ha un numero progressivo, da 1 a 100.
        for (let i = 1; i <= totalBox; i++){
        let square = createElementWithClass("div", "box");
        square.textContent = i;
        containerGrid.append(square);
        
            // Quando l’utente clicca su ogni cella se c'é la boma diventa rosso senno bianco 
            square.addEventListener("click", 
                function (){
                if (listBomb.includes(i)) {
                    // Aggiungi classe BOMBA
                    this.classList.add("bomb")

                    // Manda messaggio che hai perso
                    const messageLose = document.getElementById("lose-or-win").innerHTML = "HAI PERSO...IL TUO PUNTEGGIO è DI " + clickBoxSafe;
                } else {
                    // Aggiugni classe SALVO
                    this.classList.add("active");

                    // Incrementa valore box sicuri
                    clickBoxSafe++;

                    // ed emetti un messaggio in console con il numero della cella cliccata.
                    console.log(`hai cliccato la cella con il numero ${i}`);

                    const messageWin = document.getElementById("lose-or-win").innerHTML = "STAI FACENDO UN PUNTEGGIO DI..." + clickBoxSafe;
                
                } if (clickBoxSafe === safeBox){
                    // Manda messaggio che hai vinto
                    const messageWin = document.getElementById("lose-or-win").innerHTML = "HAI VINTO E HAI FATTO UN PUNTEGGIO DI " + clickBoxSafe;
                }
                }
            );
        }
    }
);

// Prendi il bottone restart da HTML
const restartButton = document.getElementById("restart");

// Evento che al click ricarica la pagina
restartButton.addEventListener("click", 
    function (){
        window.location.href=window.location.href;
    }
)



