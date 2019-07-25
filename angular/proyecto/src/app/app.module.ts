import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    HideWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
