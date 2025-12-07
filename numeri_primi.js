function isPrime(intero) {
    //casi limite due e tre che controlliamo per primi
    if(intero === 2 || intero ===3) return true;
    //controlliamo che il numero non sia minore o uguale di 1 (fuori della definizione di numero primo)
    else if(intero < 2) return false;
    //scartiamo subito tutti i pari ad eccezione di 2 che abbiamo già gestito
    else if(intero % 2 === 0) return false;
    //non abbiamo più bisogno di condizioni if perchè tutti i prossimi numeri saranno dispari > 3
    //ciclo for che esce ogni volta che trova che un numero ha un divisore
    for (let progressivo = 3; progressivo * progressivo <= intero; progressivo += 2) {
        if(intero % progressivo === 0) return false
        //Se non trova divisori significa che il numero è primo, usciremo dal loop all'ultimo giro e troveremo il return true
    }
    return true;
}
console.log(isPrime(37));

function sumPrimes(number, funzioncina) {
  let accumulatore = 0;
  for (let i = 2; i<= number; i++){
  if (funzioncina(i)){accumulatore += i}
  }
  return accumulatore;
}

console.log(sumPrimes(5, isPrime))