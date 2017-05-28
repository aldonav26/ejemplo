import { browser, element, by } from 'protractor';

export class EjemploPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mfi-root h1')).getText();
  }
}
