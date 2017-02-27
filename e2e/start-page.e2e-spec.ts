import { StartPage } from './page-objects/start-page.po';
import { browser, element, by } from 'protractor';
import {} from 'jasmine';

describe('StartPage', () => {
  let page: StartPage;

  beforeEach(async() => {
    page = new StartPage();
    await page.navigateTo();
  });


  it('should display a title', async() => {
    expect(page.getTitle()).toEqual('Tour of Heroes');
  });
});
