// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// prendiamo il container da HTML
const containerGrid = document.querySelector(".grid-container");

// prendi il bottone da HTML
const playButton = document.getElementById("play");

// Prendi contenitore bottone e select da HTML
const containerStart = document.getElementById("start-container");

// crea un evento al click del bottone
playButton.addEventListener("click", 
    function(){
        // elimina il contenitore
        containerStart.classList.add("none")

        // Prendi la select da HTML
        let levelSelect = document.getElementById("level").value;
        console.log(levelSelect);

        // Crea variabile per il totale delle celle
        let totalBox;

        // Crea condizione in base al livello per totale delle celle
        if(levelSelect === "level1"){
            totalBox = 100;
        } else if (levelSelect === "level2"){
            totalBox = 81; 
        } else if (levelSelect === "level3"){
            totalBox = 49;
        }

        // Genera 16 numeri casuali
        const listBomb = randomNumberGenerationRange(1, totalBox, 16);
        console.log(listBomb);

        // Crea un numero di celle sicure sottraendo box sicuri - box bomba
        let boxBomb = listBomb.length;
        let safeBox = totalBox - boxBomb;
        let clickBoxSafe = 0;
    
        // Ogni cella ha un numero progressivo, da 1 a 100.
        for (let i = 1; i <= totalBox; i++){
        let square = createElementWithClass("div", "box");

        // Crea condizione per assegnare classe a square
        if (totalBox === 100){
            square.classList.add("box-100");
        } else if(totalBox === 81){
            square.classList.add("box-81");
        } else if (totalBox === 49){
            square.classList.add("box-49");
        }
        square.textContent = i;
        containerGrid.append(square);
        
            // Quando l’utente clicca su ogni cella se c'é la boma diventa rosso senno bianco 
            square.addEventListener("click", 
                function (){
                if (listBomb.includes(i)) {
                    // Aggiungi classe BOMBA
                    this.classList.add("bomb");

                    // Manda messaggio che hai perso
                    const messageLose = document.getElementById("lose-or-win").innerHTML = "HAI PERSO...IL TUO PUNTEGGIO è DI " + clickBoxSafe;

                    // Se clicchi su una bomba si toglie la funzione click
                    const allSquares = document.querySelectorAll(".box");
                    allSquares.forEach(function(square) {
                        square.classList.add("disabled");
                    });

                    // Se clicchi su una bomba si mostrano tutte le bombe
                    allSquares.forEach(function(square){
                        let squareNumber = parseInt(square.textContent);

                        if (listBomb.includes(squareNumber)){
                            square.classList.add("bomb");
                        }
                    });

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



