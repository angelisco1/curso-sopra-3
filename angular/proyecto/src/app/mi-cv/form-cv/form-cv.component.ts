import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

interface MiEvento {
  prop: string,
  val: string
}

// const obj: MiEvento = {
//   val: 2,
//   prop: 'ss'
// }

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  @Input() nombre: string;
  @Input() apellidos: string;
  @Input() email: string;
  @Input() foto: string;
  @Input() skills: Array<string>;
  @Output() propCvCambiada = new EventEmitter<MiEvento>();
  @Output() skillAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  cambiarPropCv(event) {
    const miEvento: MiEvento = {
      prop: event.target.name,
      val: event.target.value
    }
    // console.log(miEvento);
    this.propCvCambiada.emit(miEvento);
  }

  addSkill(refSkill) {
    // Emitimos la nueva skill
    this.skillAdded.emit(refSkill.value);
    // Vaciamos el campo
    refSkill.value = '';
  }

}
