var deportes = {
   conBalon: ['Futbol', 'Basketball', 'Golf'],
   sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };


// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos.manos);


// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos) { 
   comidas[propUno] = ["Frutas", "Vegetales"]; 
   comidas[propDos] = ["Hamburguesa", "Papas Fritas"]; 
};
diferenciaDeNotaciones("saludable","noSaludable");
console.log(comidas);


// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}

//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: () => {
      console.log('Mi perro es un  ' + this.raza);
   },
};