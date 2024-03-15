import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input('appHighlight') highlighColor = '';

  constructor(private _elementRef: ElementRef) { }

  //Conportamiento para mause enter en el componente
  @HostListener('mouseenter') onMouseEnter(){
    this._cambiarColor(this.highlighColor || this.defaultColor || 'tomato');
  }

  //Comportantimiento para mause leave en el comoponente
  @HostListener('mouseenter') onMouseLeave(){
    this._cambiarColor(null);//Quitamos el color de fondo
  }

  /**
   * Metodo encargado de cambiar el color de fondo de un component
   * @param color Color para el fondo del componente
   */
  private _cambiarColor(color: string | null){
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

}
