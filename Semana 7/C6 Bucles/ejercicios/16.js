function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  if (idioma === "aleman") {
    return "Guten Tag!";
  }
  else if (idioma === "mandarin") {
    return "Ni Hao!";
  }
  else if (idioma === "ingles") {
    return "Hello!";
  }
  else {
    return "Hola!";
  }
}

console.log(saludo("aleman"));   
console.log(saludo("mandarin")); 
console.log(saludo("ingles"));   
console.log(saludo("frances"));  
console.log(saludo());           


module.exports = saludo;
