import { AfClienteService } from '../providers/af-cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router/';
import { AngularFireModule } from 'angularfire2';
import { MdButtonModule } from '@angular/material';

import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { FooterContentComponent } from './shell/footer-content/footer-content.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: '/cliente', pathMatch: 'full' },
  { path: '', loadChildren: './../home/home.module#HomeModule'},
  { path: 'cliente', loadChildren: './../cliente/cliente.module#ClienteModule'},
  { path: 'about', loadChildren: './../about/about.module#AboutModule'},
  { path: 'login', loadChildren: './../login-page/login-page.module#LoginPageModule' },
  { path: 'register', loadChildren: './../registration-page/registration-page.module#RegistrationPageModule' }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAcMVC6ivg-kpF8pWs2mqcfSZ3v3ZrNDV8',
  authDomain: 'my-app-mfi.firebaseapp.com',
  databaseURL: 'https://my-app-mfi.firebaseio.com',
  projectId: 'my-app-mfi',
  storageBucket: 'my-app-mfi.appspot.com',
  messagingSenderId: '292917393427'
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdButtonModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [
    ShellComponent
  ],
  providers: [AfClienteService],
  declarations: [
    ShellComponent,
    TopBarComponent,
    FooterContentComponent,
    MainContentComponent
  ]
})
export class CoreModule { }
