import { TheaterGroupPage } from './app.po';

describe('theater-group App', function() {
  let page: TheaterGroupPage;

  beforeEach(() => {
    page = new TheaterGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
