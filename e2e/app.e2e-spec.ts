import { NameFormPage } from './app.po';

describe('name-form App', () => {
  let page: NameFormPage;

  beforeEach(() => {
    page = new NameFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
