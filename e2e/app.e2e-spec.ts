import { PrintForAngular2Page } from './app.po';

describe('print-for-angular2 App', () => {
  let page: PrintForAngular2Page;

  beforeEach(() => {
    page = new PrintForAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
