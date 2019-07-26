import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  mostrar(msg: string): void {
    console.log('MSG: ' + msg);
  }
}
