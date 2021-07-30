// 1. Chiedere all'utente il numero di chilometri che vuole percorrere
var chilometri = parseInt(prompt("Quanti chilomentri desideri percorrere?"));

// 2. Chiedere all'utente l'età del passeggero
var eta = parseInt(prompt("Quanti anni hai?"));

// 3. Calcolo prezzo biglietto in base ai chilomentri da percorrere
var prezzo = (chilometri * 0.21);

// 4. Applicazione sconto del 20% per i minorenni 
// (oppure: var sconto = 100 * 0.20)
var sconto20 = (prezzo / 100) * 20; 
// (oppure: (prezzo -= sconto))
var prezzoFinaleMinorenne = (prezzo - sconto20).toFixed(2);

// 5. Applicazione sconto del 40% se over 65
var sconto40 = (prezzo / 100) * 40; 
var prezzoFinale = (prezzo - sconto40).toFixed(2);

// 6. Aggiunta condizione 
if( eta < 18){
    document.getElementById('biglietto').innerHTML += prezzoFinaleMinorenne;
} else if ( eta > 65){
    document.getElementById('biglietto').innerHTML += prezzoFinale;
} else {
    document.getElementById('biglietto').innerHTML += prezzo;
}
