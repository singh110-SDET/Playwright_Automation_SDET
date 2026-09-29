const{test,expect}=require('@playwright/test');
test('First Opening browser test',async({browser})=>{
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto('https://www.google.com/');
 

})