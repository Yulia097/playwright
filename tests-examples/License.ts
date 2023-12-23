import { expect, type Locator, type Page } from '@playwright/test';

export class License {
  readonly page: Page;
  readonly getLicense: Locator;
  readonly TermsBtn: Locator;

  constructor(page: Page) {
    this.getLicense = page.getByRole('link', { name: 'Content License' });
    this.TermsBtn = page.locator('#sidebar_menu').getByRole('link', {
      name: 'Terms of Service'
    });
  }

  async goto() {
    await this.page.goto('https://pixabay.com/service/terms/');
  }
}
