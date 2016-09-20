import { WwBenefitsPage } from './app.po';

describe('ww-benefits App', function() {
  let page: WwBenefitsPage;

  beforeEach(() => {
    page = new WwBenefitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
