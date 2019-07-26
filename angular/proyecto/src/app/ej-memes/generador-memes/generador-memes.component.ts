import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-generador-memes',
  templateUrl: './generador-memes.component.html',
  styleUrls: ['./generador-memes.component.css']
})
export class GeneradorMemesComponent implements OnInit {
  meme: Meme = new Meme();

  constructor() { }

  ngOnInit() {
  }

}
