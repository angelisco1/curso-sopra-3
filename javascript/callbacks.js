
function fn1(cb) {
  setTimeout(() => {
    console.log(1)
    // fn2();
    cb()
  }, 2000);
}

function fn2() {
  setTimeout(() => {
    console.log(2)
    fn3();
  }, 1400);
}

function fn3() {
  setTimeout(() => {
    console.log(3)
  }, 1000);
}

// fn1((generos) => {
//   // Elige un genero
//   fn2(generos);
// });

fn1((generos) => {
  // TOdas las peliculas de todos los generos
  fn3(generos);
});
// fn2();
// fn3();