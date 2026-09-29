const { test, expect } = require('@playwright/test')
test('Handling UI Elements', async ({ page }) => {
    //radio button selection
    const userName = page.locator("input[type='text']");
    const password = page.locator("input[type='password']");
    const userRodioBox = page.locator('.radiotextsty');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await userRodioBox.last().click();
    await page.locator('#okayBtn').click();

    // drop down selection
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    await expect(dropdown).toHaveValue('consult');

})
test.only('Child Window Handling', async ({ browser }) => {
    //radio button selection.
    const context = await browser.newContext();
    const page = await context.newPage();
    //child tab handling
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const BlinkLink = page.locator("a[href*='documents-request']");
    await expect(BlinkLink).toHaveAttribute('class', 'blinkingText');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        BlinkLink.click()

    ]);
    const text = await newPage.locator('.red').textContent();
    console.log(text);
   const arraytext= text.split("@")
   const domain = arraytext[1].split(" ")[0];
   console.log(domain);





})