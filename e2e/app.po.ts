export class Angularfire2IpponPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angularfire2-ippon-app h1')).getText();
  }
}
