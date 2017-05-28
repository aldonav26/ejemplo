import { EjemploPage } from './app.po';

describe('ejemplo App', () => {
  let page: EjemploPage;

  beforeEach(() => {
    page = new EjemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mfi works!');
  });
});
