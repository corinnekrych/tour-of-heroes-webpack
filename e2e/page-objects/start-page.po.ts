import { browser, element, by } from 'protractor';

export class StartPage {
  async navigateTo() {
    return browser.get(browser.baseUrl);
  }


  async getTitle() {
    return element(by.css('app-root h1')).getText();
  }
}
