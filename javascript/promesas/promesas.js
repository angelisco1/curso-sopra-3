const axios = require('axios');

function getGeneros() {
  return axios.get('https://ejemplos-dc1c1.firebaseio.com/generos.json')
}

function getPeliculas(genero) {
  return axios.get(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
}

// getGeneros()
//   .then((resp) => {
//     const datos = resp.data;
//     const generos = Object.values(datos);
//     // console.log(generos);
//     let genero = 'sci-fi';
//     return getPeliculas(genero);
//   })
//   .then((resp) => {
//     const peliculas = Object.values(resp.data);
//     console.log(peliculas)
//   })


// getGeneros()
//   .then(resp => {
//     console.log(resp.data.lenght)
//   })

  // axios.get(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
  // axios.get(`https://ejemplos-dc1c1.firebaseio.com/peliculas/sci-fi.json`)
    // .then((resp) => {
    //   const peliculas = Object.values(resp.data);
    //   console.log(peliculas)
    // })



new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000)
})
  .then((resp) => {
    console.log(resp);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 1400)
    })
      // .then((resp) => console.log(resp))
  })
  .then((resp) => {
    console.log(resp)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3);
      }, 1000)
    })
  })
  .then((resp) => {
    console.log(resp)
  })



// function fn1() {
//   setTimeout(() => {
//     console.log(1);
//   }, 2000)
// }

// function fn2() {
//   setTimeout(() => {
//     console.log(2);
//   }, 1400)
// }

// function fn3() {
//   setTimeout(() => {
//     console.log(3);
//   }, 1000)
// }


function promesaSiTePortasBienTeComproElJuguete(portadoBien) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (portadoBien) {
        console.log('Me he portado bien');
        resolve(true);
      } else {
        console.log('No me he portado bien');
        reject(false);
      }
    }, 1000);
  })
}

promesaSiTePortasBienTeComproElJuguete(false)
  .then(resp => console.log('Vamos a comprarte el juguete'))
  .catch(err => console.log('No hay juguete, malo'));