function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  function doWhile(num) {
    let contador = 0;
    
    do {
      num += 5; 
      contador++; 
    } while (contador < 8); 
  
    return num; 
  }
}
console.log(doWhile(0));  
console.log(doWhile(10)); 

module.exports = doWhile;