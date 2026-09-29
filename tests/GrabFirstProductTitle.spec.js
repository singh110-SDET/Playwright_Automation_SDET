const {test, expect} = require('@playwright/test');
test('Grab First Product Title',async({page})=>{
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInButton = page.locator('[type="submit"]');
    const allProductTiltleList = page.locator('.card-body a');
    const count = allProductTiltleList.count();
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signInButton.click();
    console.log(await allProductTiltleList.first().textContent());
     console.log(await allProductTiltleList.nth(0).textContent());
 
    

});