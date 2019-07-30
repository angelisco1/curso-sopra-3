import { RouterModule, Routes } from '@angular/router';
import { GeneradorMemesComponent } from './generador-memes/generador-memes.component';
import { ListaMemesComponent } from './lista-memes/lista-memes.component';


const MEMES_ROUTES: Routes = [
  { path: '', component: GeneradorMemesComponent },
  { path: 'memes', component: ListaMemesComponent },
];

export const Routing = RouterModule.forRoot(MEMES_ROUTES);