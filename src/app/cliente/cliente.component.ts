import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MdDialog, MdButton, MdIcon, MdTab } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';

import { Cliente } from '../cliente';
import { AfClienteService } from '../providers/af-cliente.service';
import { ModalNuevoComponent } from '../cliente/modal-nuevo.component';
import { AdmClienteComponent } from '../cliente/adm-cliente/adm-cliente.component';


@Component({
  selector: 'mfi-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  clientes: Observable<any>;
  cliente: FirebaseListObservable<any>;
  selectedCliente: Cliente;
  public filterInput = new FormControl();
  private _subscription: Subscription;

  constructor(public afService: AfClienteService, private router: Router, public dialog: MdDialog) {
    const filter$ = Observable.of('').merge(this.filterInput.valueChanges.debounceTime(400));
    this.clientes = Observable.combineLatest(this.afService.clientes, filter$, (clientes, filter) => {
      return clientes.filter(cliente => cliente.cc.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      || cliente.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      || cliente.adress.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      || cliente.phone.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      || cliente.email.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
    });
  }

  ngOnInit(): void {
    console.log(this.clientes.toArray.length);
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

  delete(cliente: FirebaseListObservable<any>) {
    this.afService.delete(cliente);
  }

  //openModalEditar(cliente: any) {
   // const dialogRef = this.dialog.open(ModalEditarComponent).componentInstance.cliente = cliente;
  //}

  openModalNuevo() {
    const dialogRef = this.dialog.open(ModalNuevoComponent);
  }

  openModalVer(cliente: any) {
    const dialogRef = this.dialog.open(AdmClienteComponent, {
      disableClose: true,
      width: '800px',
      height: '500px'
    }).componentInstance.cliente = cliente;
  }
}