import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  crear() {
    // mipagina.com/usuario/3/editar
    // mipagina.com/usuario/3/editar
    // this.router.navigate(['/usuario', 3, 'editar']);

    this.router.navigate(['/']);
  }

}
