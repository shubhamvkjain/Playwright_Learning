const {test} = require("@playwright/test");

test('Browser context test',async ({browser})=>
{


 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 await page.locator("#username").fill("rahulshettyacademy");
 await page.locator("#password").fill("Learning");
 await page.locator("#signInBtn").click();
 console.log(await page.locator("[style*='block']").textContent());



});

//test('Page Playwright test',async ({page})=>
//{

// await page.goto("https://www.google.com/");


//});