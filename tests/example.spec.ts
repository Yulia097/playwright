import { test, expect } from '@playwright/test';
import { LoginPage } from '../tests-examples/Login_Page';
import { ProfilePage } from '../tests-examples/ProflePage';
import { License } from '../tests-examples/License';
import { LogoutPage } from '../tests-examples/LogoutPage';

// test('1', async ({ page }) => {
//   const login = new LoginPage(page);
//   const profile = new ProfilePage(page);
//   await login.goto();
//   await login.getLoginBtn.click();
//   await login.getEmailBtn.fill('juliamoiisenko0@gmail.com');
//   await login.getEmailBtn.press('Enter');
//   await login.getPassword.fill('12345qwe');
//   await login.getPassword.press('Enter');
//   await expect(profile.getProfileBtn).toBeVisible();
//   await profile.getProfileBtn.click();
//   await profile.myProfileBtn.click();
//   await expect(page).toHaveURL(/.*users/);
// });


//test('2', async ({ page }) => {
//   const login = new LoginPage(page);
//   const license = new License(page);
//   await login.goto();
//   await license.getLicense.click();
//   await expect(page).toHaveURL(/.*terms/);
//   await expect(license.TermsBtn).toBeEnabled();
// })

//test('3', async ({ page }) => {
//   const login = new LoginPage(page);
//   const logout = new LogoutPage(page);
//   const profile = new ProfilePage(page);
//   await login.goto();
//   await login.loginFunc();
//   await profile.getProfileBtn.click();
//   await logout.getLogoutBtn.click();
//   await expect(page).toHaveURL(/.*logout/);
//   await expect(page).toHaveTitle(/You are now logged out/);
// });
