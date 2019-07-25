import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  cuenta: number = 0;
  constructor() { }

  ngOnInit() {
  }

  incrementar() {
    this.cuenta += 1;
  }

  decrementar() {
    this.cuenta -= 1;
  }

}
