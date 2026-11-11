import {test, expect} from '@playwright/test';
import { SwagLabsLoginPage } from '../../src/pages/swaglabslogin';
import items from '../../test-data/items.json';
test('test', async ({page}) => {

    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername(`${process.env.username_swaglab}`);
    await loginPage.enterPassword(`${process.env.password_swaglab}`);
    await loginPage.clickLoginButton();

    for (const item of items.expectedProducts) {
       await expect(page.getByText(item, { exact: true })).toBeVisible();
        console.log(`Item Name: ${item}`);
    }

    
    
}
)