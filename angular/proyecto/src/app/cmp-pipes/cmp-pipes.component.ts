import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  precio: number = 10;
  nombreProducto: string = 'Auriculares malos';
  descripcionProducto: string = 'Unos auriculares que no valen para nada...';
  fechaCompra: Date = new Date(2019, 1, 12);


  constructor() { }

  ngOnInit() {
  }

}
