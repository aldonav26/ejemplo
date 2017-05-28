import { Title } from '@angular/platform-browser/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfi-shell',
  template: `
    <section>
      <mfi-top-bar></mfi-top-bar>
      <mfi-main-content></mfi-main-content>
      <mfi-footer-content></mfi-footer-content>
    </section>
  `,
  styles: []
})
export class ShellComponent implements OnInit {
  title = 'MegaFiestas Infantiles';
  constructor() { }

  ngOnInit() {
  }
}
