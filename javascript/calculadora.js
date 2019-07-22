
// var micalculadora =

var micalculadora = (function() {
  function suma(n1, n2) {
    return n1 + n2;
  }
  function resta(n1, n2) {
    return n1 - n2;
  }
  function multiplica(n1, n2) {
    return n1 * n2;
  }
  function divide(n1, n2) {
    return n1 / n2;
  }
  console.log('Función autoejecutable');

  return {
    suma: suma,
    resta: resta,
    multiplica: multiplica,
    divide: divide,
  }
})()

console.log(micalculadora);
micalculadora.suma(1, 2)
micalculadora.resta(1, 2)
