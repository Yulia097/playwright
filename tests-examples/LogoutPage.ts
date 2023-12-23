import { expect, Locator, Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;
  readonly getLogoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getLogoutBtn = page.locator('div').filter({ hasText: /^Logout$/ });
  }

  async goto() {
    await this.page.goto('https://pixabay.com/accounts/logout/');
  }
}
