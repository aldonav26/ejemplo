import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent} from './cliente.component';
import { ModalNuevoComponent } from './modal-nuevo.component';
import { AdmClienteComponent } from './adm-cliente/adm-cliente.component';
import { MdDialogModule, MdInputModule, MdButtonModule} from '@angular/material';

const routes: Routes = [
  { path: '', component: ClienteComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MdDialogModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [ClienteComponent, ModalNuevoComponent, AdmClienteComponent],
  entryComponents: [ModalNuevoComponent, AdmClienteComponent]
})
export class ClienteModule { }
