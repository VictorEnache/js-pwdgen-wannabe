//chiedo all'utente il suo nome
const first_name = prompt("scrivi qui sotto il tuo nome");

//chiedi all'utente il suo cognome
const last_name = prompt("scrivi qui sotto il tuo cognome");

//chiedi all'utente il suo colore preferito
const color = prompt("scrivi qui sotto il tuo colore preferito");

//Scrivo sulla pagina il risultato + il numero 22
document.getElementById("psw").innerHTML = `${first_name}${last_name}${color}` + "22";