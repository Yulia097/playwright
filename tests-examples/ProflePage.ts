import { expect, Locator, Page } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly getProfileBtn: Locator;
  readonly myProfileBtn: Locator;
  readonly profileName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getProfileBtn = page.getByRole('button', { name: 'u_wws3wu9p8o' });
    this.myProfileBtn = page.getByRole('link', { name: 'My profile' });
    this.profileName = page.getByRole('heading', { name: 'u_wws3wu9p8o' });
  }

  async goto() {
    await this.page.goto('https://pixabay.com/users/u_wws3wu9p8o-41404537/');
  }
}
