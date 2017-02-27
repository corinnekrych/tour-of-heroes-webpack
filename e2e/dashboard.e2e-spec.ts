import { Dashboard } from './page-objects/dashboard.po';
import { browser, element, by } from 'protractor';

describe('Dashboard', () => {
  let page: Dashboard;

  beforeEach(async() => {
    page = new Dashboard();
    await page.navigateTo();
  });


  it('should display a title', async() => {
    expect(page.getTitle()).toEqual('Top Heroes');
  });


  it('should display the top four heroes', async() => {
    let listElements = element.all(by.css('#top-heroes a'));
    expect(listElements.count()).toEqual(4);
  });
});
