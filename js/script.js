// 1. Chiedere all'utente il numero di chilometri che vuole percorrere
var chilometri = parseInt(prompt("Quanti chilomentri desideri percorrere?"));

// 2. Chiedere all'utente l'età del passeggero
var età = parseInt(prompt("Quanti anni hai?"));

// 3. Calcolo prezzo biglietto in base ai chilomentri da percorrere
var prezzo = (chilometri * 0.21);
document.getElementById('biglietto').innerHTML += prezzo;

// 4. Applicazione sconto del 20% per i minorenni
var sconto = (prezzo / 100) * 20; 
var prezzoFinale = (prezzo - sconto);
document.getElementById('sconto-minorenni').innerHTML += prezzoFinale;

