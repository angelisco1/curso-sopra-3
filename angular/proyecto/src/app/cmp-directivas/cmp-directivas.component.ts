import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  items = ['Uno', 'Dos', 'Tres'];
  color = 'black'
  negrita = false;
  mostrarItem = true;

  constructor() { }

  toggleMostrarItem() {
    this.mostrarItem = !this.mostrarItem;
  }

  ngOnInit() {
  }

}
