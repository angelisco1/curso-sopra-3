// window.onload = function() {
//   console.log(document.getElementById('generos'));
// }

let select = document.getElementById('generos')
let listaPeliculas = document.getElementById('lista-peliculas');

// select.onchange = function() {
//   // Pedir las pelis
// }
select.addEventListener('change', (event) => {
  let generoSeleccionado = event.target.value;
  getPeliculasDeGenero(generoSeleccionado, (peliculas) => {
    let peliculasHTML = peliculas.map(pelicula => `<li>${pelicula}</li>`);
    listaPeliculas.innerHTML = peliculasHTML.join('');
  });
});

function getPeliculasDeGenero(genero, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);

  xhr.addEventListener('readystatechange', () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let datos = JSON.parse(xhr.responseText);
      cb(datos ? Object.values(datos) : []);
    }
  })

  xhr.send();
}

function getGeneros(cb) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

  xhr.addEventListener('readystatechange', () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let resp = JSON.parse(xhr.responseText);
      let generos = Object.values(resp);
      cb(generos);
    }
  })

  xhr.send();
}

getGeneros((generos) => {
  select.innerHTML = `<option value="-">----</option>`;
  // generos.forEach(genero => {
  //   select.innerHTML += `<option value="${genero}">${genero}</option>`
  // })

  let opciones = generos.map(genero => `<option value="${genero}">${genero}</option>`)
  select.innerHTML += opciones.join('');
});