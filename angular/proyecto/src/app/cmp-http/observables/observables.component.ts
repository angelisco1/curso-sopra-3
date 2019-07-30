import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  subscripciones: Array<Subscription> = [];

  constructor() { }

  ngOnInit() {
    // this.getNums();
    // this.miInterval();
    // this.conError();
    this.obsNumsPares();
  }

  getNums() {
    const numsObs = interval(500);

    const s = numsObs.subscribe((num) => {
      console.log(num);
    })

    this.subscripciones.push(s);
  }

  miInterval() {
    const miIntervalObs = Observable.create((observer: Observer<number>) => {
      let i = 0;
      setInterval(() => {
        observer.next(i);
        i++;
      }, 500)
    })

    const s = miIntervalObs.subscribe((n) => {
      console.log('Mi Interval: ', n);
    })
    this.subscripciones.push(s);
  }

  conError() {
    const obsConError = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Mensaje 1')
      }, 300);
      setTimeout(() => {
        observer.next('Mensaje 2')
      }, 700);
      // setTimeout(() => {
      //   observer.error('Error...')
      // }, 1300);
      setTimeout(() => {
        observer.complete();
      }, 2000);
    })

    const s = obsConError.subscribe(
      msg => console.log('Mi msg: ', msg),
      err => console.log('Mi error: ', err),
      () => console.log('El observable ha terminado...')
    )
    this.subscripciones.push(s);
  }

  obsNumsPares() {
    const obsNumsPares = Observable.create((observer: Observer<number>) => {
      setInterval(() => {
        const num = Math.floor(Math.random()*101);
        observer.next(num);
      }, 200);
    });

    const s = obsNumsPares
      .pipe(
        filter((n: number) => n % 2 === 0),
        map((n: number) => n / 2)
      )
      .subscribe((n) => {
        console.log('Num par: ',  n);
      })
    this.subscripciones.push(s);
  }

  ngOnDestroy() {
    this.subscripciones.forEach(sub => sub.unsubscribe());
  }
}
