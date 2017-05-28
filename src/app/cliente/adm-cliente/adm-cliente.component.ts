import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Cliente } from '../../cliente';
import { AfClienteService } from '../../providers/af-cliente.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'mfi-modal-ver-component',
  templateUrl: './adm-cliente.component.html',
  styleUrls: ['./adm-cliente.component.css']
})
export class AdmClienteComponent {
  cliente: FirebaseListObservable<any>;
  bandera: boolean;
  accion: string;
  boton: string;
  icon: string;
  constructor(public afService: AfClienteService, public dialogRef: MdDialogRef<AdmClienteComponent>) {
    this.bandera = true;
    this.accion = 'ver';
    this.boton = 'Cerrar';
    this.icon = 'clear';
  }
  update() {
    this.afService.update(this.cliente);
  }
  editCliente() {
    this.bandera = false;
    this.accion = 'editar';
    this.boton = 'Guardar';
    this.icon = 'save';
  }
  ejecutar() {
    if (this.accion === 'editar') {
      this.afService.update(this.cliente);
      this.bandera = true;
      this.accion = 'ver';
      this.boton = 'Cerrar';
      this.icon = 'clear';
    }
  }
}