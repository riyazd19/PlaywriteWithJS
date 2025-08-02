const {test, expect}=require('@playwright/test')

test('HomePage',async({page})=>{

await page.goto('https://www.google.com/');
const pagetitle=await page.title();
const pageURL= page.url();
console.log("page title is ",pagetitle);
console.log("page URL is ",pageURL);

await expect(page).toHaveTitle('Google');
 await expect(page).toHaveURL('https://www.google.com/');
page.close();

})