import {Page, Locator} from '@playwright/test';


export class LoginPage {
readonly page: Page;
readonly emailInput: Locator;
readonly passwordInput: Locator;
readonly loginButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email address or mobile number' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Log In' });
}

async navigateToLoginPage() {
    await this.page.goto(`${process.env.BASE_URL}`);

}

async enterEmail(email: string) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
}

async enterPassword(password: string) {
    await this.passwordInput.click();
    await this.passwordInput.fill('password');
}

async clickLoginButton() {
    await this.loginButton.click();
}

}