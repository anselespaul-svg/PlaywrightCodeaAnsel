import {test,expect} from '@playwright/test';
test('test', async ({browser}) => {

    const browsercontext = await browser.newContext();
    const page1 = await browsercontext.newPage();
    const page2 = await browsercontext.newPage();

    //await page.goto('${process.env.DEMO_QA_URL}');
    await page1.goto('https://demoqa.com/');
    await page1.getByRole('link', { name: 'Book Store Application' }).click();
    await page1.getByRole('button', { name: 'Login' }).click();
    await page1.getByRole('textbox', { name: 'UserName' }).click();
    await page1.getByRole('textbox', { name: 'UserName' }).fill('ansel123');
    await page1.getByRole('textbox', { name: 'Password' }).click();
    await page1.getByRole('textbox', { name: 'Password' }).fill('Ansel@12345');
    await page1.getByRole('button', { name: 'Login' }).click();
    await page1.getByRole('button', { name: 'Go To Book Store' }).click();
    await page1.getByRole('link', { name: 'Learning JavaScript Design' }).click();
    await page1.getByRole('button', { name: 'Add To Your Collection' }).click();
    
    await page2.goto('https://demoqa.com/');
    await page2.getByRole('link', { name: 'Book Store Application' }).click();
    await page2.getByRole('button', { name: 'Log out' }).click();
    await page2.getByRole('textbox', { name: 'UserName' }).click();
    await page2.getByRole('textbox', { name: 'UserName' }).fill('ansel123');
    await page2.getByRole('textbox', { name: 'Password' }).click();
    await page2.getByRole('textbox', { name: 'Password' }).fill('Ansel@12345');
    await page2.getByRole('button', { name: 'Login' }).click();
    expect(page2.getByRole('link', { name: 'Learning JavaScript Design' })).toBeVisible();


}
)