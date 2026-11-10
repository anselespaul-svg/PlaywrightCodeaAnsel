import {test, expect} from '@playwright/test';
import {LoginPage} from '../../src/pages/LoginPage';

test('Login validation test', {tag: ['@PlaywrightWithJenkins']}, async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail('12345678');
    await loginPage.enterPassword('abc123');
    await loginPage.clickLoginButton();
});