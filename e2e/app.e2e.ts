import { Angularfire2IpponPage } from './app.po';

describe('angularfire2-ippon App', function() {
  let page: Angularfire2IpponPage;

  beforeEach(() => {
    page = new Angularfire2IpponPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angularfire2-ippon works!');
  });
});
