"use strict";
class User {
    constructor(c, n) {
        this.carica = c;
        this.numeroChiamate = n;
        this.costoMinutoChiamata = 0.20;
    }
    ricarica(unaRicarica) {
        // ricarica il telefono
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        // effettua una chiamata di minutiDurata minuti
        // aggiorna la ricarica disponibile
        // incrementa il counter delle chiamate numeroChiamate
        let creditoResiduoDopoLaChiamata = this.carica - (minutiDurata * this.costoMinutoChiamata);
        if (creditoResiduoDopoLaChiamata >= 0) {
            this.carica = creditoResiduoDopoLaChiamata;
            this.numeroChiamate++;
        }
        else {
            // Error('Credito insufficiente');
            console.log('Credito insufficiente');
        }
    }
    numero404() {
        // restituisce la ricarica residua
        return this.carica;
    }
    getNumeroChiamate() {
        // restituisce il numero delle chiamate
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let FirstUser = new User(10, 2);
let SecondUser = new User(20, 3);
let ThirdUser = new User(25, 10);
//First User
console.log('----First User-----');
console.log("Credito residuo: " + FirstUser.numero404());
console.log("Numero chiamate: " + FirstUser.getNumeroChiamate());
FirstUser.ricarica(20);
console.log("Credito residuo: " + FirstUser.numero404());
FirstUser.chiamata(20);
console.log("Credito residuo: " + FirstUser.numero404());
console.log("Numero chiamate: " + FirstUser.getNumeroChiamate());
FirstUser.chiamata(40);
console.log("Credito residuo: " + FirstUser.numero404());
console.log("Numero chiamate: " + FirstUser.getNumeroChiamate());
FirstUser.chiamata(400);
console.log("Credito residuo: " + FirstUser.numero404());
console.log("Numero chiamate: " + FirstUser.getNumeroChiamate());
FirstUser.azzeraChiamate();
console.log("Credito residuo: " + FirstUser.numero404());
console.log("Numero chiamate: " + FirstUser.getNumeroChiamate());
//Second User
console.log('-----Second User------');
console.log("Credito residuo: " + SecondUser.numero404());
console.log("Numero chiamate: " + SecondUser.getNumeroChiamate());
SecondUser.ricarica(30);
console.log("Credito residuo: " + SecondUser.numero404());
SecondUser.chiamata(40);
console.log("Credito residuo: " + SecondUser.numero404());
console.log("Numero chiamate: " + SecondUser.getNumeroChiamate());
SecondUser.chiamata(50);
console.log("Credito residuo: " + SecondUser.numero404());
console.log("Numero chiamate: " + SecondUser.getNumeroChiamate());
SecondUser.chiamata(500);
console.log("Credito residuo: " + SecondUser.numero404());
console.log("Numero chiamate: " + SecondUser.getNumeroChiamate());
SecondUser.azzeraChiamate();
console.log("Credito residuo: " + SecondUser.numero404());
console.log("Numero chiamate: " + SecondUser.getNumeroChiamate());
//Third User
console.log('-----Third User------');
console.log("Credito residuo: " + ThirdUser.numero404());
console.log("Numero chiamate: " + ThirdUser.getNumeroChiamate());
ThirdUser.ricarica(10);
console.log("Credito residuo: " + ThirdUser.numero404());
ThirdUser.chiamata(60);
console.log("Credito residuo: " + ThirdUser.numero404());
console.log("Numero chiamate: " + ThirdUser.getNumeroChiamate());
ThirdUser.chiamata(70);
console.log("Credito residuo: " + ThirdUser.numero404());
console.log("Numero chiamate: " + ThirdUser.getNumeroChiamate());
ThirdUser.chiamata(100);
console.log("Credito residuo: " + ThirdUser.numero404());
console.log("Numero chiamate: " + ThirdUser.getNumeroChiamate());
ThirdUser.azzeraChiamate();
console.log("Credito residuo: " + ThirdUser.numero404());
console.log("Numero chiamate: " + ThirdUser.getNumeroChiamate());
