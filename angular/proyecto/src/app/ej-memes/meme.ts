export class Meme {
  constructor(
    public id: string,
    public textoArriba: string,
    public textoAbajo: string,
    public imagenUrl: string,
    public color: string,
    public isFav: boolean,
    ) { }
}
