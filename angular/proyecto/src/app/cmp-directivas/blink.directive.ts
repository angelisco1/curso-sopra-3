import { Directive, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit, OnDestroy {
  @Input('appBlink') colorLetra;
  @HostBinding('style.color') color;
  intervalId = null;

  ngOnInit() {
    if (!this.colorLetra) {
      this.colorLetra = 'yellow';
    }
    let i = 0;
    this.intervalId = setInterval(() => {
      console.log(i)
      i++;
      this.color = this.color === 'black' ? this.colorLetra : 'black';
    }, 300);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }
}
