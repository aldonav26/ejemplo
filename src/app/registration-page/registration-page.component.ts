import { Component } from '@angular/core';
import {AfClienteService} from './../providers/af-cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'mfi-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  public error: any;

  constructor(private afService: AfClienteService, private router: Router) { }

  register(event, displayName, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {
      this.afService.saveUserInfoFromForm(user.uid, displayName, email).then(() => {
        this.router.navigate(['']);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }
}


