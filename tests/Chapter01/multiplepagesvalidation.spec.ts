import {test, expect} from '@playwright/test';

test('multiplepagesvalidation', async ({ browser }) => {

    const context = await browser.newContext();

    await test.step('Open facebook page', async () => {
    const page1 = await context.newPage();
    await page1.goto(`${process.env.BASE_URL}`);
    });

    await test.step('Open github page', async () => {
        const page2 = await context.newPage();
        await page2.goto('https://www.github.com/');
    });

}
)