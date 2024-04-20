const {test} = require("@playwright/test");

test('Browser context test',async ({browser})=>
{


 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://rahulshettyacademy.com/locatorspractice/");


});

test.only('Page Playwright test',async ({page})=>
{

 await page.goto("https://www.google.com/");


});