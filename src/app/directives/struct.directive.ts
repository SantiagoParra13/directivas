import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rolCorrecto]'
})
export class StructDirective {

  private _mostrado: boolean = false;

  constructor(private _templateRef: TemplateRef<any>, private _viewConteinerRef: ViewContainerRef) { }

  @Input() set rolCorrecto(condicion:boolean){
    if(condicion && !this._mostrado){
      this._viewConteinerRef.createEmbeddedView(this._templateRef);
      this._mostrado = true;
    }else{
      this._viewConteinerRef.clear(); //Eliminamos el elemento
      this._mostrado = false;
    }
  }

}
