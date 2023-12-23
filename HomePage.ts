import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getPixabaylogo: Locator;
  readonly getSearchField: Locator;
  readonly getExplorebtn: Locator;
  readonly getLoginbtn: Locator;
  readonly getJoinbtn: Locator;
  readonly getUploadbtn: Locator;
  readonly getLicense: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getSearchField = page.getByPlaceholder('Search for all images on');
    this.getJoinbtn = page.getByRole('button', { name: 'Join' });
    this.getPixabaylogo = page.getByLabel('Pixabay', { exact: true });
    this.getExplorebtn = page.getByRole('button', { name: 'Explore ' });
    this.getUploadbtn = page.getByRole('button', { name: 'Upload' });
    this.getLoginbtn = page.getByRole('button', { name: 'Upload' });
  }

  async goto() {
    await this.page.goto('https://pixabay.com/');
  }
}
