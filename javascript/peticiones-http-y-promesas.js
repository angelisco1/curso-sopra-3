// Callbacks
// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 0)
// console.log(3)

function getGenerosPeliculas(cb) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

  xhr.addEventListener('readystatechange', () => {
    console.log(xhr.status)
    if (xhr.status === 200 && xhr.readyState === 4) {
      let resp = JSON.parse(xhr.responseText);
      // console.log(resp);
      let generos = getArrayFromObject(resp);
      // return generos;
      // let genero = elegirGenero(generos);
      // getPeliculasDeGenero(genero);
      cb(generos);
    }
  })

  xhr.send();
}

function getArrayFromObject(obj) {
  // const valores = [];
  // for (let key in obj) {
  //   let val = obj[key];
  //   valores.push(val);
  // }
  const valores = Object.values(obj);
  return valores;
}

function getPeliculasDeGenero(genero) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);

  xhr.addEventListener('readystatechange', () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const datos = JSON.parse(xhr.responseText);
      console.log(datos)
    }
  })

  xhr.send();
}

function elegirGenero(generos) {
  // return generos[0];
  let genero = prompt(`Elige un género de los siguientes:
  ${generos}`);
  return genero;
}

getGenerosPeliculas((generos) => {
  let genero = elegirGenero(generos);
  console.log(genero)
  getPeliculasDeGenero(genero);
});

// getGenerosPeliculas((generos) => {
//   console.log(`Hay ${generos.length} generos`);
// });
