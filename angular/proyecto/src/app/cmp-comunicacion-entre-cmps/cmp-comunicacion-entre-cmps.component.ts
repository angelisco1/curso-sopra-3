import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-comunicacion-entre-cmps',
  templateUrl: './cmp-comunicacion-entre-cmps.component.html',
  styleUrls: ['./cmp-comunicacion-entre-cmps.component.css']
})
export class CmpComunicacionEntreCmpsComponent implements OnInit {
  nombreLuke = 'Luke';
  nombreLeia = 'Leia';

  constructor() { }

  ngOnInit() {
  }

  cambiarNombreLeia(event) {
    console.log(event);
    this.nombreLeia = event;
  }

}
