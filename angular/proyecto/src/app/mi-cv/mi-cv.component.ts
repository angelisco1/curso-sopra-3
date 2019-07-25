import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cv',
  templateUrl: './mi-cv.component.html',
  styleUrls: ['./mi-cv.component.css']
})
export class MiCvComponent implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  foto: string = '';
  skills: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  cambiarDatos(event) {
    this[event.prop] = event.val;
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

}
