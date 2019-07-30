import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { InfoUsuarioComponent } from './usuarios/info-usuario/info-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes';
import { ErrorComponent } from './error/error.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: 'inicio', component: InicioComponent },
  // { path: ':id', component: InfoUsuarioComponent },
  { path: '**', component: ErrorComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);