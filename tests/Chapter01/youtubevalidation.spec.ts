import {test, expect} from '@playwright/test';
import { link } from 'node:fs';

test('test', async ({ page }) => {

    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' });
    await page.getByRole('combobox', { name: 'Search' }).fill('Youtube');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.waitForTimeout(15000);
    await page.locator('h3', { hasText: 'YouTube' }).click();
    await expect(page.getByTitle('YouTube')).toBeVisible();
    await page.getByTestId('53jzao_TA7CMseMP4s2P8Qo_75').click();

}
)