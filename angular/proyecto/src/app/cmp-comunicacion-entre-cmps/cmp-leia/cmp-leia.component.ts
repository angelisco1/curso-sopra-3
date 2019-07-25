import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-leia',
  templateUrl: './cmp-leia.component.html',
  styleUrls: ['./cmp-leia.component.css']
})
export class CmpLeiaComponent implements OnInit {
  @Input() miNombre = '...';
  @Input() nombreHermano = '';
  @Output() nombreCambiado = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre() {
    // this.miNombre = 'Leiaaaaa';
    this.nombreCambiado.emit('Leiiaaaa');
  }
}
