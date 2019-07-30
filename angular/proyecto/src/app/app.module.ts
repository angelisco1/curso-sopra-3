import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Routing } from './cmp-routing/app.routes';
import { Routing } from './ej-memes/memes.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { CardComponent } from './card/card.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { ContadorComponent } from './cmp-data-binding/contador/contador.component';
import { CmpComunicacionEntreCmpsComponent } from './cmp-comunicacion-entre-cmps/cmp-comunicacion-entre-cmps.component';
import { CmpLeiaComponent } from './cmp-comunicacion-entre-cmps/cmp-leia/cmp-leia.component';
import { CmpLukeComponent } from './cmp-comunicacion-entre-cmps/cmp-luke/cmp-luke.component';
import { MiCvComponent } from './mi-cv/mi-cv.component';
import { PreviewCvComponent } from './mi-cv/preview-cv/preview-cv.component';
import { FormCvComponent } from './mi-cv/form-cv/form-cv.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { CurrencyRightPipe } from './cmp-pipes/currency-right.pipe';
import { HideWordsPipe } from './cmp-pipes/hide-words.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { EjMemesComponent } from './ej-memes/ej-memes.component';
import { GeneradorMemesComponent } from './ej-memes/generador-memes/generador-memes.component';
import { FormComponent } from './ej-memes/form/form.component';
import { MemeComponent } from './ej-memes/meme/meme.component';
import { ListaMemesComponent } from './ej-memes/lista-memes/lista-memes.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { InicioComponent } from './cmp-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { ErrorComponent } from './cmp-routing/error/error.component';
import { UsuariosComponent } from './cmp-routing/usuarios/usuarios.component';
import { InfoUsuarioComponent } from './cmp-routing/usuarios/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './cmp-routing/usuarios/editar-usuario/editar-usuario.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { ObservablesComponent } from './cmp-http/observables/observables.component';
import { CardJobComponent } from './cmp-http/card-job/card-job.component';
import { JobListComponent } from './cmp-http/job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    CardComponent,
    CmpDataBindingComponent,
    ContadorComponent,
    CmpComunicacionEntreCmpsComponent,
    CmpLeiaComponent,
    CmpLukeComponent,
    MiCvComponent,
    PreviewCvComponent,
    FormCvComponent,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    CurrencyRightPipe,
    HideWordsPipe,
    FiltroPipe,
    CmpDirectivasComponent,
    MarcarDirective,
    BlinkDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    EjMemesComponent,
    GeneradorMemesComponent,
    FormComponent,
    MemeComponent,
    ListaMemesComponent,
    CmpFormulariosComponent,
    CmpRoutingComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    ErrorComponent,
    UsuariosComponent,
    InfoUsuarioComponent,
    EditarUsuarioComponent,
    CmpHttpComponent,
    ObservablesComponent,
    CardJobComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
