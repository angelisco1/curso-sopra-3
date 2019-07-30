import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, DoCheck {
  form: FormGroup;
  @Input() meme: Meme;

  constructor(private memesServ: MemesService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      textoArriba: this.formBuilder.control(this.meme.textoArriba, Validators.required),
      textoAbajo: this.formBuilder.control(this.meme.textoAbajo),
      color: this.formBuilder.control(this.meme.color),
      imagenUrl: this.formBuilder.control(this.meme.imagenUrl, Validators.required),
    });
  }

  ngDoCheck() {
    this.meme.textoArriba = this.form.value.textoArriba;
    this.meme.textoAbajo = this.form.value.textoAbajo;
    this.meme.color = this.form.value.color;
    this.meme.imagenUrl = this.form.value.imagenUrl;
  }

  guardar() {
    this.memesServ.addMeme(this.form.value.textoArriba, this.form.value.textoAbajo, this.form.value.color, this.form.value.imagenUrl);

    this.router.navigate(['/memes']);
  }

}
