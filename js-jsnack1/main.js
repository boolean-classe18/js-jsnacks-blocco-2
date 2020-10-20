// Generatore di “nomi cognomi” casuali:
// prendendo a caso un nome e un cognome da una lista di nomi e da una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// lista di nomi e lista di cognomi
            // 0       1           2         3         4        5
var nomi = ['Luca', 'Giovanni', 'Maria', 'Matteo', 'Marco', 'Silvia'];
//              0           1       2           3       4
var cognomi = ['Rossi', 'Verdi', 'Bianchi', 'Neri', 'Gialli'];
console.log(nomi);
console.log(cognomi);
var indice_max_nomi = nomi.length - 1; // indice massimo = 5
var indice_max_cognomi = cognomi.length - 1; // indice massimo = 4

var invitati = [];
var numero_invitati = 5;

while(invitati.length < numero_invitati) {
    // scelgo a caso un nome dall'array

    // genero una posizione random per il nome
    var pos_nome = Math.floor(Math.random() * (indice_max_nomi + 1));
    // genero una posizione random per il cognome
    var pos_cognome = Math.floor(Math.random() * (indice_max_cognomi + 1));

    console.log(pos_nome);
    console.log(pos_cognome);
    // recupero il nome e il cognome in posizione random
    var nome = nomi[pos_nome];
    var cognome = cognomi[pos_cognome];

    console.log(nome);
    console.log(cognome);
    // concateno il nome e il cognome per formare il nome completo
    var nome_completo = nome + ' ' + cognome;

    console.log(nome_completo);
    // inserisco tra gli invitati il nome solo se non è già presente
    if(!invitati.includes(nome_completo)) {
        invitati.push(nome_completo);
    }
}

console.log(invitati);
