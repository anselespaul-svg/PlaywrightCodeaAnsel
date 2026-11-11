import {test,expect} from '@playwright/test';
test('test', async ({page}) => {

    //await page.goto('${process.env.DEMO_QA_URL}');
    await page.goto('https://demoqa.com/');

    await page.getByRole('link', { name: 'Book Store Application' }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'New User' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Ansel');
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Santhosh');
    await page.getByRole('textbox', { name: 'UserName' }).click();
    await page.getByRole('textbox', { name: 'UserName' }).fill('ansel123');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123@abc');
    //await page.getByRole('button', { name: 'Register' }).click();



}
)