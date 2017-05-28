import { Component } from "@angular/core";
import { MdDialogRef, MdDialog, MdButton } from "@angular/material";

import { Cliente } from "../cliente";
import { AfClienteService } from "../providers/af-cliente.service";

const emptyClient = {
	cc: '',
	name: '',
	phone: '',
	adress: '',
	email: ''
}

@Component({
  selector: 'mfi-modal-dialog-component',
  styles:[`
    /* label color */
    .input-field label {
        color: #000;
    }
    /* label focus color */
    .input-field input[type=text]:focus + label {
        color: #000;
    }
    /* label underline focus color */
    .input-field input[type=text]:focus {
        border-bottom: 1px solid green;
        box-shadow: 1px 1px 0 0 grey;
    }
    /* valid color */
    .input-field input[type=text].valid {
        border-bottom: 1px solid #000;
        box-shadow: 0 1px 0 0 #000;
    }
    /* invalid color */
    .input-field input[type=text].invalid {
        border-bottom: 1px solid #000;
        box-shadow: 0 1px 0 0 #000;
    }
    /* icon prefix focus color */
    .input-field .prefix.active {
        color: #000;
    }

    .input-field input[type=text]{
        height: 2em;
    }
  `],
  template: `
    <h4>Nuevo Cliente</h4>
    <div class="row">
      <div class="input-field col s3">
        <input type="text" class="validate" [(ngModel)]="addCliente.cc" placeholder="Cedula del Cliente">
      </div>
      <div class="input-field col s9">
        <input type="text" class="validate" [(ngModel)]="addCliente.name" placeholder="Nombre del Cliente">
      </div>
      <div class="input-field col s12">
        <input type="text" class="validate" [(ngModel)]="addCliente.adress" placeholder="Direccion del Cliente">
      </div>
      <div class="input-field col s3">
        <input type="text" class="validate" [(ngModel)]="addCliente.phone" placeholder="Telefono del Cliente">
      </div>
      <div class="input-field col s9">
        <input type="text" class="validate" [(ngModel)]="addCliente.email" placeholder="E-Mail del Cliente">
      </div>
    </div>
    <div class="center">
      <button class="btn waves-effect waves-light" type="submit" name="action" (click)="add(); dialogRef.close()">Aceptar
        <i class="material-icons right">thumb_up</i>
      </button>
      <button class="btn waves-effect waves-light" type="submit" name="action" (click)="clear(); dialogRef.close()">Cancelar
        <i class="material-icons right">thumb_down</i>
      </button>
    </div>
  `,
})
export class ModalNuevoComponent {
		addCliente: Cliente = emptyClient;
    constructor(public afService: AfClienteService, public dialogRef: MdDialogRef<ModalNuevoComponent>) { }
    
    add() {
			this.afService.create(this.addCliente);
			// this.addCliente = emptyClient;
			this.clear();
		}

		clear(){
			this.addCliente.cc='';
			this.addCliente.name='';
			this.addCliente.adress='';
			this.addCliente.phone='';
			this.addCliente.email=''; 
		}


}