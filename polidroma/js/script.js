/*
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedo la parola all'user
inputWord = prompt("Inserisci una parola");

// Creo la funzione per verificare se una parola è polidroma
function isPolidroma(word) {
  //faccio una piccola verifica se ci sono spazi
  if (word.match(" ")){
    console.error("non devi inserire più di una parola");
    return
  }
  //inverto la parola
  let result = "";
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  // restituisco il valore booleano sulla comparazione della parola con la sua stessa invertita
  return result === word ? true : false;
}

//stampo il messaggio
message = `La parola ${inputWord} è ${isPolidroma(inputWord)} sull'essere polidroma`;
console.log(message);