import { PrexPage } from './app.po';

describe('prex App', () => {
  let page: PrexPage;

  beforeEach(() => {
    page = new PrexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tk!!');
  });
});
