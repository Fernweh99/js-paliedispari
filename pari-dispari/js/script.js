/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
(usando una funzione). Sommiamo i due numer Stabiliamo se la
somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//funzione per generare un numero random
function getRandomNumber(min = 1, max = 5) {
  let number = Math.floor(Math.random() * (max + 1 - min) + min);
  return number;
}

//funzione per verificare la parità di un numero
function isEven(num){
  let result = num % 2 ? false : true;
  return result;
}

const computerNumber = getRandomNumber();
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Verifico il numero inserito dall'utente 
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
  if (isNaN(userNumber)) {
    alert("Non hai iserito un numero")
  }else {
    alert("Il numero che hai inserito non rientra nel range richiesto")
  }
  userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

let sum = computerNumber + userNumber;

//tramite un if e l'invocazione della funzione isEven faccio stabilire se pari o dispari
result = "dispari";
if (isEven(sum)) result = "pari";

console.log(`la somma dei numeri: ${userNumber} e ${computerNumber}, è ${result}`);