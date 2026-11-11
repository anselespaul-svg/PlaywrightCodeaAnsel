import {test, expect} from '@playwright/test';
import { SwagLabsLoginPage } from '../../src/pages/swaglabslogin';
test('test', async ({page}) => {

    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername(`${process.env.username_swaglab}`);
    await loginPage.enterPassword(`${process.env.password_swaglab}`);
    await loginPage.clickLoginButton();
    await expect(page.getByText('Swag Labs')).toBeVisible();

}
)

    