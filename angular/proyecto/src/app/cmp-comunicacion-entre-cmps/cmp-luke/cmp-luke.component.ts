import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-luke',
  templateUrl: './cmp-luke.component.html',
  styleUrls: ['./cmp-luke.component.css']
})
export class CmpLukeComponent implements OnInit {
  @Input() miNombre = '???';
  @Input() nombreHermana = '...';

  constructor() { }

  ngOnInit() {
  }

}
