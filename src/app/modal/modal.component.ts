import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() discapacidadSeleccionado: string  = '0';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
