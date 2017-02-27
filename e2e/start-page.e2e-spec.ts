import { browser, element, by } from 'protractor';
import {} from 'jasmine';

describe('StartPage', () => {
  beforeEach(async() => {
    browser.get(browser.baseUrl, 60000);
  });


  it('should display a title', () => {
    let title = element(by.css('app-root h1'));
    expect(title.getText()).toContain('Tour of Heroes');
  });
});
