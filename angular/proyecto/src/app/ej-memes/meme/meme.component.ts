import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() meme: Meme = new Meme();
  @Input() creando: boolean = false;

  constructor(private memesServ: MemesService) { }

  ngOnInit() {
  }

  eliminar() {
    this.memesServ.deleteMeme(this.meme.id)
      .subscribe(() => {
        this.memesServ.pintamos.emit(true);
      });
    }

    toggleFav() {
      this.memesServ.favMeme(this.meme)
      .subscribe(() => {
        this.memesServ.pintamos.emit(true);
      });
  }

}
