// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Stampo in pagina 5 numeri che spariscono dopo 30 secondi
    // - Creo un arrayComputer vuoto
    let arrayComputer = [];
    // - Creo l'elemento del DOM in cui stampare i numeri
    const arrayNumber = document.querySelector('#numbers-array');
    // - Genero numeri casuali da 1 a 100 e li inserisco nell'arrayComputer
        // solo se non sono già presenti nell'array e se non ho raggiunto i 5 numeri totali
        while (arrayComputer.length < 5){
            let randomNumber = Math.floor((Math.random() * 100) + 1);
            if(!arrayComputer.includes(randomNumber)){
                arrayComputer.push(randomNumber);
            }
        }
    // - Popolo l'elemento del DOM con l'array
    arrayNumber.innerHTML = arrayComputer;
    // - Dopo 30 secondi i numeri spariscono
        // - svuoto l'array
        // - popolo l'elemento del DOM con una stringa vuota
        setTimeout(function(){
            arrayNumber.innerHTML = '';
        }, 30000)
// Dopo che i numeri sono scompari chiedo all'utente i 5 numeri con 5 prompt
    // - Creo un arrayUser vuoto in cui salvo i numero che chiedo all'utente
    let arrayUser = [];
    // Stampo quanti e quali numeri l'utente ha indovinato
    // - Creo un arrayResult vuoto
    let arrayResult = [];
    // - Dopo 30 secondi dal caricamento della pagina per 5 volte devo chiedere all'utente di inserire uno dei numeri che ha visto precedentemente
        // - Pusho i numeri che l'utente ha inserito nell'arrayUser
        setTimeout(function(){
            for (let i = 0; i < 5; i++) {
                let userNumber = parseInt(prompt('Dimmi uno dei numeri indicati prima!'));
                arrayUser.push(userNumber);
            // - pusho nell'arrayResult i numeri inseriti dall'utente solo se sono presenti sia nel arrayComputer e nell' arrayUser
            if (arrayComputer.includes(userNumber) && arrayUser.includes(userNumber)){
                arrayResult.push(userNumber);
            }
            // - popolo l'elemento del DOM con arrayResult e la lunghezza dell'arrayResult per indicare quanti sono stati indovinati
            arrayNumber.innerHTML = `${arrayResult} Hai indovinato ${arrayResult.length} numeri su 5!!!`;
            }
        }, 30500)

        