function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   function sumarHastaNConBreak(n) {
      let suma = 0;
      
      for (let i = 1; i <= n; i++) {
        suma += i; 
        
        if (suma > 100) {
          break; 
        }
      }
      
      return suma; 
    }
}
console.log(sumarHastaNConBreak(10));   
console.log(sumarHastaNConBreak(15));   
module.exports = sumarHastaNConBreak;
