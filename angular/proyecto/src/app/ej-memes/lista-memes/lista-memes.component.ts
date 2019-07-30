import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-lista-memes',
  templateUrl: './lista-memes.component.html',
  styleUrls: ['./lista-memes.component.css']
})
export class ListaMemesComponent implements OnInit {
  memes: Array<Meme> = [];
  mostrarFavoritos: boolean = false;

  constructor(private memesServ: MemesService) { }

  ngOnInit() {
    // this.memes = this.memesServ.getMemes();
    this.memesServ.pintamos.subscribe(() => {
      this.pintaOtraVez();
    })
    this.pintaOtraVez();
  }

  muestraFavs() {
    this.mostrarFavoritos = !this.mostrarFavoritos;
    this.pintaOtraVez();
  }

  pintaOtraVez() {
    this.memesServ.getMemes()
    .subscribe((memes) => {
      this.memes = this.mostrarFavoritos ? memes.filter(meme => meme.isFav) : memes;
    })
  }

}
