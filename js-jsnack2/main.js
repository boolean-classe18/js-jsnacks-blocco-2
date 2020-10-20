// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

// definisco un array di numeri interi
// indici:    0  1  2  3   4   5  6   7   8
var numeri = [1, 5, 9, 12, 30, 6, 10, 13, 4];
console.log(numeri);

// soluzione A: scorro tutti i numeri e sommo solo quelli in posizione dispari
// variabile in cui accumulare la somma
var somma = 0;
// scorro l'array
for (var i = 0; i < numeri.length; i++) {
    console.log('indice corrente = ' + i);
    // verifico se l'indice corrente è dispari
    if(i % 2 != 0) {
        // i è un numero dispari
        console.log('posizione dispari');
        // recupero il numero in posizione i
        var elemento_corrente = numeri[i];
        console.log('elemento corrente = ' + elemento_corrente);
        // accumulo la somma dei numeri visti finora
        somma = somma + elemento_corrente;
    }
}

console.log('La somma dei numeri in posizione dispari è: ' + somma);

// soluzione B: partendo da 1, recupero gli elementi di 2 in 2 e li sommo tutti!
// variabile in cui accumulare la somma
var somma = 0;
for (var i = 1; i < numeri.length; i = i + 2) {
    console.log('indice corrente = ' + i);
    // i è sempre un numero dispari (perché parte da 1 e va di 2 in 2)
    console.log('posizione dispari');
    // recupero il numero in posizione i
    var elemento_corrente = numeri[i];
    console.log('elemento corrente = ' + elemento_corrente);
    // accumulo la somma dei numeri visti finora
    somma = somma + elemento_corrente;
}
console.log('La somma dei numeri in posizione dispari è: ' + somma);
