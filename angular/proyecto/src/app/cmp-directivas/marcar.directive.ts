import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  @Input('appMarcar') colorFondo = 'yellow';
  colorInicial = 'white';

  @HostBinding('style.backgroundColor') color;
  @HostListener('mouseover') onMouseOver() {
      this.color = this.colorFondo;
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.color = this.colorInicial;
  }


  // constructor() {
  //   console.log('CONSTRUCTOR')
  //   console.log(this.colorFondo);
  //   // this.color = this.colorFondo;
  // }

  ngOnInit() {
    // console.log('ONINIT')
    // console.log(this.colorFondo);
    this.colorFondo = this.colorFondo ? this.colorFondo : 'yellow';
  }

}
