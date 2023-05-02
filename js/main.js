 const contentitore = document.getElementById("container");


 const btn = document.getElementById("btn");


btn.addEventListener("click", bottone);


function bottone() {

    console.log("Campo minato attivo")
        for ( let contatore = 1; contatore < 101; contatore++){
            //console.log(contatore);
           contentitore.innerHTML += `<div class="box">${contatore}</div>`;
       }
       const numCelle = 100;
        let quantitaBombe = 16;
        let bombe = generaBombe(quantitaBombe, numCelle);
    }

function generaBombe(numeroDiBombe, numCelle) {
    console.log("Ci sono " + numeroDiBombe + " bombe in " + numCelle + " celle");
}

