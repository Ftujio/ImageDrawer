import { ImageDrawerPage } from './app.po';

describe('image-drawer App', () => {
  let page: ImageDrawerPage;

  beforeEach(() => {
    page = new ImageDrawerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
