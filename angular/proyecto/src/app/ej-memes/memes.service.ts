import { Injectable, EventEmitter } from '@angular/core';
import { Meme } from './meme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  pintamos = new EventEmitter<boolean>()
  // memes: Array<Meme> = [
  //   new Meme('0', 'Texto 1', 'Texto 2', 'https://i.imgflip.com/12dxv.jpg'),
  //   new Meme('1', 'Texto 1.1', 'Texto 2.2', 'https://i.imgflip.com/12dxv.jpg', '#ff1111', true)
  // ];
  // nextId: string = '2';

  URL: string = 'https://ejemplos-dc1c1.firebaseio.com/memes';

  constructor(private http: HttpClient) { }

  // getMemes(): Array<Meme> {
  //   return this.memes;
  // }

  getMemes(): Observable<any> {
    return this.http.get(`${this.URL}.json`)
      .pipe(
        map(resp => {
          let memes: Array<Meme> = Object.entries(resp).map(entry => {
            let infoMeme: any = entry[1];
            return new Meme(entry[0], infoMeme.textoArriba, infoMeme.textoAbajo, infoMeme.imagenUrl, infoMeme.color, infoMeme.isFav);
          })
          return memes;
        })
      );
  }

  addMeme(textoArriba: string, textoAbajo: string, color: string, imagenUrl: string, isFav: boolean = false): Observable<any> {
    // const meme = new Meme(this.nextId, textoArriba, textoAbajo, imagenUrl, color, isFav);
    // this.memes.push(meme);
    // this.nextId += 1;
    const meme = {
      textoArriba,
      textoAbajo,
      color,
      imagenUrl,
      isFav,
    };
    return this.http.post(`${this.URL}.json`, JSON.stringify(meme));
  }

  deleteMeme(id: string): Observable<any> {
    // const pos = this.memes.findIndex(meme =>  meme.id === id)
    // this.memes.splice(pos, 1);
    return this.http.delete(`${this.URL}/${id}.json`);
  }

  favMeme(meme: Meme): Observable<any> {
    // const meme = this.memes.find(meme => meme.id === id);
    // meme.isFav = !meme.isFav;
    const memeActualizado = {...meme, isFav: !meme.isFav};
    return this.http.put(`${this.URL}/${meme.id}.json`, JSON.stringify(memeActualizado));
  }
}
