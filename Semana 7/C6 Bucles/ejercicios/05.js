function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:´
  if (valor) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}
console.log(esVerdadero(true));  // Muestra "Soy verdadero"
console.log(esVerdadero(false)); // Muestra "Soy falso"


module.exports = esVerdadero;
