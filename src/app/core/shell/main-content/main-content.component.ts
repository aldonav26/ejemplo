import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfi-main-content',
  template: `
    <main class="app-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [``]
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
