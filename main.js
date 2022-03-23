//chiedo all'utente il suo nome
const first_name = prompt("scrivi qui sotto il tuo nome");

//chiedi all'utente il suo cognome
const last_name = prompt("scrivi qui sotto il tuo cognome");

//chiedi all'utente il suo colore preferito
const color = prompt("scrivi qui sotto il tuo colore preferito");

document.getElementById("psw").innerHTML = `${first_name}${last_name}${color}` + "22";