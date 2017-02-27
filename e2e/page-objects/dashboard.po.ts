import { browser, element, by } from 'protractor';

export class Dashboard {
  async navigateTo() {
    return browser.get('/dashboard');
  }


  async getTitle() {
    return element(by.css('my-dashboard h3')).getText();
  }
}
