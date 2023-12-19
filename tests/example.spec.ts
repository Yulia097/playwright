import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

test('has title 1', async ({ page }) => {
  await page.goto('https://pixabay.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pixabay/);
});

// test 1
test('1', async ({ page }) => {
  await page.goto('https://pixabay.com/');

  await expect(
    page.getByRole('heading', { name: 'Stunning royalty-free images' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Over 4.2 million+ high' })
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: "Editor's Choice " })
  ).toBeVisible();
});

//test 2

test('2', async ({ page }) => {
  await page.goto('https://pixabay.com/');

  const getStarted = page
    .getByRole('link', { name: 'nature', exact: true })
    .first();

  await getStarted.click();
  await expect(page).toHaveTitle(/Nature/);
  await expect(page).toHaveURL(/.*nature/);
  await expect(page).not.toHaveURL('error');
});

// test 3
test('3', async ({ page }) => {
  await page.goto('https://pixabay.com/');

  const getStarted = page
    .getByRole('link', { name: 'nature', exact: true })
    .first();

  await getStarted.click();
  await expect(
    page.getByRole('heading', { name: 'Nature Images & Pictures' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Most relevant ' })
  ).toBeVisible();
  await expect(page).not.toHaveURL('error');
});
//test 4
test('4', async ({ page }) => {
  await page.goto('https://pixabay.com/');
  await page.getByPlaceholder('Search for all images on').click();
  await page.getByPlaceholder('Search for all images on').fill('Forest');
  await page.getByPlaceholder('Search for all images on').press('Enter');
});
//test 5
test('5', async ({ page }) => {
  await page.goto('https://pixabay.com/');
  await page
    .getByRole('link', { name: 'Free Bird Tit photo and' })
    .first()
    .click();
  await expect(page).toHaveTitle(/Bird/);
  await expect(page).toHaveURL(/.*bird/);
});
