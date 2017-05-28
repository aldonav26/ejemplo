import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MaterializeModule } from 'angular2-materialize';
import 'hammerjs';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterializeModule,
    MaterialModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
