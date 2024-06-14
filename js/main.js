// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// prendiamo il container da HTML
const containerGrid = document.querySelector(".grid-container");

// prendiamo il bottone da HTML
const playButton = document.querySelector("button");


// crea un evento al click del bottone
playButton.addEventListener("click", 
    function(){
        // elimina il bottone
        playButton.classList.add("none")
    
        // Ogni cella ha un numero progressivo, da 1 a 100.
        for (let i = 1; i <= 100; i++){
        let square = createElementWithClass("div", "box");
        square.textContent = i;
        containerGrid.append(square);

            // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
            square.addEventListener("click", 
                function (){
                this.classList.toggle("active");

                // ed emetto un messaggio in console con il numero della cella cliccata.
                console.log(`hai cliccato la cella con il numero ${i}`);
                }
            );
        }
    }
);



