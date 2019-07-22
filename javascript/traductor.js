const Traductor = (function() {

  const EN = {
    'hola': 'hello',
    'adios': 'bye bye'
  }

  const FR = {
    'hola': 'salut',
    'adios': 'adieu'
  }

  const IT = {
    'hola': 'ciao',
    'adios': 'addio'
  }

  const IDIOMAS = {
    IT: IT,
    EN: EN,
    FR: FR,
  }

  function traducir(texto, idioma) {
    return IDIOMAS[idioma.toUpperCase()][texto]
    // switch(idioma.toUpperCase()) {
    //   case 'EN':
    //     return EN[texto];
    //   case 'FR':
    //     return FR[texto];
    //   case 'IT':
    //     return IT[texto];
    //   default:
    //     return 'No tenemos traducciones para ese idioma';
    // }

  }

  return {
    traducir: traducir,
    translate: traducir
  }

})();

console.log(Traductor.traducir('hola', 'en'))
// 'hello'
console.log(Traductor.translate('hola', 'fr'))
// 'salut'
console.log(Traductor.traducir('adios', 'it'))
// 'addio'