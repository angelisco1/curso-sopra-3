import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-generador-memes',
  templateUrl: './generador-memes.component.html',
  styleUrls: ['./generador-memes.component.css']
})
export class GeneradorMemesComponent implements OnInit {
  meme: Meme = new Meme('-1', 'Texto 1', 'Texto 2', 'https://i.imgflip.com/12dxv.jpg');

  constructor() { }

  ngOnInit() {
  }

}
