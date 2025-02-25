function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  else if (num % 3 === 0) {
    return "fizz";
  }
 
  else if (num % 5 === 0) {
    return "buzz";
  }
 
  else {
    return false;
  }
}

console.log(fizzBuzz(15));  
console.log(fizzBuzz(9));   
console.log(fizzBuzz(10));  
console.log(fizzBuzz(7));   


module.exports = fizzBuzz;
