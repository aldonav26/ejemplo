import { Router } from '@angular/router';
import { AfClienteService } from '../../../providers/af-cliente.service';
import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular/material';

@Component({
  selector: 'mfi-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  title = 'MegaFiestas Infantiles';
  public isLoggedIn: boolean;

  constructor(public afService: AfClienteService, private router: Router) {
    this.afService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
          this.isLoggedIn = false;
          this.router.navigate(['login']);

        } else {
          console.log('Successfully Logged in.');
          if (auth.google) {
            this.afService.displayName = auth.google.displayName;
            this.afService.email = auth.google.email;
          } else {
            this.afService.displayName = auth.auth.email;
            this.afService.email = auth.auth.email;
          }

          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.afService.logout();
  }

}
