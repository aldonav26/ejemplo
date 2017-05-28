import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { AfClienteService } from '../../../providers/af-cliente.service';

@Component({
  selector: 'mfi-footer-content',
  templateUrl: './footer-content.component.html',
  styles: [`
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }

    a:link,  a:hover {   
      text-decoration:none;
      color: greenyellow; 
    }
  `]
})

export class FooterContentComponent {
  public isLoggedIn: boolean = true;

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