import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() meme: Meme;
  constructor() { }

  ngOnInit() {
  }

  guardar() {

  }

}
