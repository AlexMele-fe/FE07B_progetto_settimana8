//interfaccia smartphone
interface Smartphone {
    //inserisco proprieta interfaccia
    credito: number;
    numerohiamate: number;
    // dichiaro i metodi 
    ricarica(credito: number, primaricarica: number): void;
    chiamata(credito: number, minutichiamata: number): void;
    numero404(): number;
    getNumeroChimate(): number;
    azzeraChiamate(): void;

}

// prima classe
class FristUser implements Smartphone {
    //modificatori di accesso sulle proprietà 
    public numerohiamate: number;
    public credito: number;
   
    // dichiarazione del costruttore 
    constructor(_credito: number, _numerochiamate: number) {
        this.credito = _credito;
        this.numerohiamate = _numerochiamate;
    }
    //implementazione metodo ricarica 
    ricarica(credito: number, primaricarica: number): void {
        this.credito += credito;
        this.credito += primaricarica;
        
    }
    //implementazione metodo chiamata
    chiamata(credito: number, minutichiamata: number): void {
        this.credito =credito;
        this.credito += minutichiamata;
    }
    //implementazione metodo numero404(return)
    numero404(): number {
        return this.credito
    }
    //implementazione metodo getNumeroChiamata(return)
    getNumeroChimate(): number {
        
    }
    //implementazione metodo azzeraChiamate
    azzeraChiamate(): void {

    }
}


//implementazione della classe

//utilizzo dei metodi giusti per effettuare DUE ricariche e DUE chiamate

//console.log():
/* 'primo utente'
valore carica disponibile -> metodo
'numero chiamate: -> metodo'
'dopo l'azzeramento'
'numero chiamate: -> metodo' */

//seconda classe e terza classe sono IDENTICHE alla prima 
