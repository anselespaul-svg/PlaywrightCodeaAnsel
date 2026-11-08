import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Create new account' }).click();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});