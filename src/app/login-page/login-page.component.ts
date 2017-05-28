import { Component } from '@angular/core';
import { AfClienteService } from './../providers/af-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mfi-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public error: any;

  constructor(public af: AfClienteService, private router: Router) {}

  loginWithEmail(event, email, password) {
    event.preventDefault();
    this.af.loginWithEmail(email, password).then(() => {
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }
}
