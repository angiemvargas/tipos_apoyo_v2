import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tipos_apoyo_v2';
  discapacidadSeleccionado: string  = '0';
  verSeleccion: string  = '';

  @ViewChild("myModalInfo", {static: false}) myModalInfo!: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  capturar() {
    this.verSeleccion = this.discapacidadSeleccionado;
  }

  mostrarTiposApoyo(){
   this.modalService.open(this.myModalInfo);
  }
}
