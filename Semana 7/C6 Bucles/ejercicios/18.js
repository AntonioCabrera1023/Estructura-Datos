function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  return producto;
}

console.log(productoEntreNúmeros(1, 4));  
console.log(productoEntreNúmeros(3, 5));  
console.log(productoEntreNúmeros(5, 3));  
console.log(productoEntreNúmeros(6, 6));  


module.exports = productoEntreNúmeros;