// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Controlla se parola in input è palindroma
function isPalindroma(parola){
  var result = true; // true se parola palindroma

  // Controlla lunghezza parola
  if (parola.length < 1 ){
    result = false;
  }


  // Controllo incrociato tra inizio e fine parola
  // Termina controllo a metà parola + 1
  for (var i = 0; i < (parola.length / 2) + 1 && (result === true); i++) {
    if(parola.charAt(i) !== parola.charAt(parola.length - 1 - i)){
      result = false;
    }
  }

  return result;
}

// Controlla se numero in input è compreso fra min e max
function checkMinMax(num, min, max) {
  var result = true; // true == numero compreso fra min e max
  num = parseInt(num);
  if(num < min || num > max){
    result = false;
  }
  return result;
}

// Funzione random custom
function randomCustom(min, max){
  return parseInt(Math.random() * (max-min) + min);
}

// Controlla se numero è pari o meno
function isPari(num){
  var result;
  num = parseInt(num);
  if (num % 2 === 0 ){
    result = true;
  }else {
    result = false;
  }

  return result;
}


// Palindroma
var input = prompt('Inserisci parola');
var esito = false;

esito = isPalindroma(input);
if (esito){
  console.log('La parola inserita è palindroma: ' + input);
}else{
  console.log('La parola inserita non è palindroma: ' + input);
}


// GIOCO PARI E DISPARI
var utentePari = false;
var input = '';
var numUtente = 0;
var numCPU = 0;
var numFinale = 0;

// Scegli pari o dispari
do{
  input = prompt('Seleziona pari (p) oppure dispari (d)');
  if (input ==='p'){
    utentePari = true;
    console.log('Utente: pari');
    console.log('CPU   : dispari');
  }

  if(input ==='d'){
    utentePari = false;
    console.log('Utente: dispari');
    console.log('CPU   : pari');
  }
}while( input !== 'p' && input !== 'd' )


// Scegli un numero da 1 a 5
do{
  numUtente = prompt('Scegli numero da 1 a 5');
}while(!checkMinMax(numUtente, 1, 5));

console.log('Utente: ' + numUtente);

// Genera numero casuale per l'avversario
numCPU = randomCustom(1, 5);
console.log('CPU   : ' + numCPU);

// Stabilisci vincitore
console.log("The winner is...");

// Somma numeri giocatori
numFinale = parseInt(numUtente) + parseInt(numCPU);
console.log('NumFinale: ' + numFinale);

// Stabilisci vincitore
if (isPari(numFinale) && utentePari){
  console.log('Utente vince');
}else{
  console.log('CPU vince');
}
