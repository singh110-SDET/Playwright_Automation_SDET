const {test, expect} = require('@playwright/test');

test('capture the Title and validate the Title', async ({page})=>{
     const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInButton = page.locator('[type="submit"]');
    const allProductTiltleList = page.locator('.card');
    const count = allProductTiltleList.count();
    const errorMessage = page.locator('[style*="block"]');
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK');
    await signInButton.click();
    await errorMessage.textContent();
   await expect (errorMessage).toContainText('Incorrect');
    
    

});