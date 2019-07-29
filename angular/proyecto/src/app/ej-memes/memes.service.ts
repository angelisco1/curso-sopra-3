import { Injectable } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  memes: Array<Meme> = [
    new Meme('0', 'Texto 1', 'Texto 2', 'https://i.imgflip.com/12dxv.jpg'),
    new Meme('1', 'Texto 1.1', 'Texto 2.2', 'https://i.imgflip.com/12dxv.jpg', '#ff1111', true)
  ];
  nextId: string = '2';

  constructor() { }

  getMemes(): Array<Meme> {
    return this.memes;
  }

  addMeme(textoArriba: string, textoAbajo: string, color: string, imagenUrl: string, isFav: boolean = false): void {
    const meme = new Meme(this.nextId, textoArriba, textoAbajo, imagenUrl, color, isFav);
    this.memes.push(meme);
    this.nextId += 1;
  }

  deleteMeme(id: string): void {
    const pos = this.memes.findIndex(meme =>  meme.id === id)
    this.memes.splice(pos, 1);
  }

  favMeme(id: string) {
    const meme = this.memes.find(meme => meme.id === id);
    meme.isFav = !meme.isFav;
  }
}
