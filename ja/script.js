// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.

var randomNumeri = [];

function numeriRandom(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);

}

// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

