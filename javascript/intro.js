// VAR, LET (ES6) y CONST (ES6)

var a = 1;
let b = 2;
const c = 5;
// c = 9;

if (true) {
  var a = 3;
  let b = 4;
  console.log(a)
  console.log(b)
}

console.log(a)
console.log(b)

// FOR IN
let colores = ['blanco', 'negro', 'gris'];

console.log('FOR...')
for (var i = 0; i < colores.length; i++) {
  console.log(colores[i])
}

console.log('FOR IN...')
for (let i in colores) {
  console.log(i, colores[i])
}

// FOR OF (ES6)
console.log('FOR OF...')
for (let color of colores) {
  console.log(color);
}

// forEach
console.log('FOREACH...')
function muestraColor(color, pos) {
  console.log(pos, color);
}

colores.forEach(muestraColor);

colores.forEach(function(color, pos) {
  console.log(pos, color);
})

// Arrow functions (ES6)
colores.forEach((color, pos) => {
  console.log(pos, color);
})

colores.forEach(() => console.log('Hay un color'))

let suma = (n1, n2) => n1 + n2;
let suma1 = (n1, n2) => {
  return n1 + n2
};

let res = suma(1, 2);
let res1 = suma1(4, 2);
console.log(res, res1);

// Funciones recursivas
function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num-1)
  }
}

let f5 = factorial(5)
console.log(f5);

// Objetos y Arrays
let mascotas = ['pez', 'perro', 'gato', 'periquito']

let pelicula = {
  titulo: 'The Expendables',
  duracion: 120,
  descripcion: 'Descripción de la pelicula'
}

let prop = 'titulo';

console.log(pelicula.titulo);
console.log(pelicula['titulo']);
// console.log(pelicula.prop);
console.log(pelicula[prop]);


// Añadir un nuevo elemento al final del array
mascotas.push('ninfa');
console.log(mascotas);

// Sacar el último elemento del array
let ultimaMascota = mascotas.pop();
console.log(mascotas);
console.log(ultimaMascota);

// Sacar el primer elemento del array
let primeraMascota = mascotas.shift();
console.log(mascotas);
console.log(primeraMascota);

// Añadir un nuevo elemento al principio del array
mascotas.unshift(ultimaMascota);
console.log(mascotas);


let mascotasDelMedio = mascotas.splice(1, 2, primeraMascota);
console.log(mascotas)
console.log(mascotasDelMedio)

let copiaMascotas = mascotas;
copiaMascotas.push('perro');
console.log(copiaMascotas)
console.log(mascotas)

// Metodo 1 para copiar un array sin apuntar a la misma referencia (concat)
let copiaMascotas1 = [].concat(mascotas);
copiaMascotas1.push('serpiente');
console.log(mascotas)
console.log(copiaMascotas1)

// Metodo 2 para copiar un array sin apuntar a la misma referencia (spread operator (ES6))
let copiaMascotas2 = [...mascotas];
ultimaMascota = mascotas.pop();
console.log(mascotas)
console.log(copiaMascotas2)

// Desestructuracion de arrays y objetos

// let titulo = pelicula.titulo;
// let descripcion = pelicula.descripcion;
// let duracion = pelicula.duracion;

let { titulo: t, descripcion, duracion } = pelicula;

console.log('Titulo: ' + t + ', descripcion: ' + descripcion + ', duracion: ' + duracion);

let [ninfa, p, ...resto] = copiaMascotas2;
// console.log(ninfa, p, periquito);
console.log(resto);


// Metodo 1 para copiar un objeto sin apuntar a la misma referencia (assign)
let peli1 = Object.assign({}, pelicula, {duracion: 130});

// {
//   titulo: 'The Expendables',
//   duracion: 130,
//   descripcion: '...'
// }

peli1.titulo = 'Los mercenarios 2';
console.log(pelicula);
console.log(peli1);

// Metodo 2 para copiar un objeto sin apuntar a la misma referencia (spread operator (ES6))
let peli2 = {...pelicula, descripcion: 'Una descripcion'};
pelicula.duracion = 100;
console.log(pelicula);
console.log(peli2);

let arrPeliculas = [
  {titulo: 'p1', duracion: 100},
  {titulo: 'p2', duracion: 100},
  {titulo: 'p3', duracion: 100}
]

let [pelicula1, pelicula2, pelicula3] = arrPeliculas;
let { titulo: t1, duracion: d1 } = pelicula1;
let { titulo: t2, duracion: d2 } = pelicula2;
let { titulo: t3, duracion: d3 } = pelicula3;

// String Interpolation (ES6)
console.log(`
Titulo: ${t},
descripcion: ${descripcion},
duracion: ${duracion}
`);

// Funciones constructoras y Prototype
function Pelicula(titulo, descripcion, duracion, estreno) {
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.duracion = duracion;
  this.estreno = estreno;
  // this.estaEstrenada = function() {
  //   return new Date().getFullYear() >= this.estreno;
  // }
}

Pelicula.prototype.estaEstrenada = function() {
  return new Date().getFullYear() >= this.estreno;
}

let peli100 = new Pelicula('Pelicula 100', 'Una descripcion', 100, 2000);
let peli101 = new Pelicula('Pelicula 101', 'Otra descripcion', 101, 2020);

console.log(peli100)
console.log(peli100.estaEstrenada())
console.log(peli101)
console.log(peli101.estaEstrenada())

// 'Penny...'.repeat(3) => Penny...Penny...Penny...

String.prototype.repeat = function(num) {
  // let res = this;
  // for (let i = 0; i < num-1; i++) {
  //   res += this;
  // }
  // return res;
  return new Array(num+1).join(this);
}

let txt = 'Penny...'.repeat(6);
console.log(txt);

// Class (ES6)
class Serie {
  constructor(titulo, episodios, descripcion, episodiosVistos = 0) {
    this.titulo = titulo;
    this.episodios = episodios;
    this.descripcion = descripcion;
    this.episodiosVistos = episodiosVistos;
  }

  episodiosPorVer() {
    return this.episodios - this.episodiosVistos;
  }
}

let twd = new Serie('The Walking Dead', 200, 'Una serie', 190);
let leftovers = new Serie('The Leftovers', 40, 'Una serie', 40);
let got = new Serie('Game of Thrones', 140, 'Una serie', 40);
let banshee = new Serie('Banshee', 240, 'Una serie', 240);

const series = [twd, leftovers, got, banshee];

function seriesVistas(misSeries) {
  // ['The leftovers', 'Banshee']
  let seriesVistas = misSeries.filter(serie => serie.episodiosPorVer() === 0);
  let nombresSeriesVistas = seriesVistas.map(serie => serie.titulo);
  return nombresSeriesVistas;
}

console.log(seriesVistas(series));


console.log(twd.episodiosPorVer())

// Map/Filter/Reduce
const nums = [2, 4, 5, 5, 9, 10];

const tripleNums = nums.map((n) => n * 3);
console.log(tripleNums);

const numsPares = tripleNums.filter(n => n % 2 === 0)
console.log(numsPares);

const sumaNumsPares = numsPares.reduce((acc, n) => {
  return acc += n;
}, 10);
console.log(sumaNumsPares);

// DOM
// Ej Ingresos Gastos con DOM + AJAX