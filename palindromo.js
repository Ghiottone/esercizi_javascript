function palindromo(stringa) {
    //Per controllare che frasi intere siano palindrome uso replaceAll per eliminare gli spazi
    //trasformiamo tutto in caratteri minuscoli per evitare che ci ritorni false se controlliamo
    //per esempio il nome Anna
    stringa = stringa.toLowerCase().replaceAll(" ", "");
    //controllare carattere per carattere per tutta la lunghezza è superfluo → siccome ci aspettiamo
    //che la prima meta sia uguale al contrario della seconda meta, basta solamente fare il controllo
    //che il primo carattere corrisponda all'ultimo, il secondo al penultimo... per metà stringa
    for (let i = 0; i<= stringa.length/2; i++){
        //siccome stringa è 0 based l'ultimo carattere è nell'indice length - 1
        //il primo giro i è 0 quindi la sottrazione alla fine ci restituirà l'indice dell'ultimo elemento
        //il secondo giro quello del penultimo elemento e così via
        if (stringa.charAt(i) != stringa.charAt(stringa.length - 1 - i)) return false;
        //se i caratteri sono diversi, esco subito dal loop
    }
    //se arrivo a questo punto è perchè il loop ha girato fino in fondo, i caratteri sono tutti uguali
    //e la stringa è palindroma, quindi la condizione si verifica e ritorno true.
    return true
}
