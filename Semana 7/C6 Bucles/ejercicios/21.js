function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  function esPotenciaDeDos(numero) {
    if (numero < 1) return false;
    
    while (numero % 2 === 0) {
      numero = numero / 2;
    }

    return numero === 1;
  }
}
console.log(esPotenciaDeDos(4));   
console.log(esPotenciaDeDos(16));   
console.log(esPotenciaDeDos(10));   
console.log(esPotenciaDeDos(1));    

module.exports = esPotenciaDeDos;
