import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../job-list/job-list.component';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})
export class CardJobComponent implements OnInit {
  @Input() oferta: Oferta;

  constructor() { }

  ngOnInit() {
  }
}
