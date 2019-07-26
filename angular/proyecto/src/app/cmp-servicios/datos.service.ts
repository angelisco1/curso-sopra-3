import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datos: Array<string> = ['a'];
  datoEnviado = new EventEmitter<string>();

  constructor(private logService: LogService) { }

  getDatos(): Array<string> {
    return this.datos;
  }

  addDato(dato: string): void {
    this.datos.push(dato);
    this.logService.mostrar('Se ha guardado ' + dato)
  }

  enviar(dato: string): void {
    this.datoEnviado.emit(dato);
  }
}
