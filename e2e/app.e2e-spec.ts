import { MenuManagerPage } from './app.po';

describe('menu-manager App', () => {
  let page: MenuManagerPage;

  beforeEach(() => {
    page = new MenuManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
