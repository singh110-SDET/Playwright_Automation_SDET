const {test, expect} = require('@playwright/test');
test('Login using browser context', async ({browser}) => {
    // Test implementation
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  
});
test('Login using page', async ({page}) => {
    // Test implementation
   
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  
});
test.only('capture the Title and validate the Title', async ({page})=>{
     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
     const title = await page.title();
     console.log(title);
     await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy'); // Assertion to validate the title`
     expect(title).toBe('LoginPage Practise | Rahul Shetty Academy'); // Assertion to validate the title

});