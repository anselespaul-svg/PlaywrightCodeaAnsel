import {Page, Locator} from '@playwright/test';

export class SwagLabsLoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');

}

async navigateToLoginPage() {
    await this.page.goto(`${process.env.swaglab_URL}`);
}

async enterUsername(username: string) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
}

async enterPassword(password: string) {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
}
async clickLoginButton() {
    await this.loginButton.click();
}

}