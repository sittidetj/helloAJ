import { HelloAJPage } from './app.po';

describe('hello-aj App', () => {
  let page: HelloAJPage;

  beforeEach(() => {
    page = new HelloAJPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
