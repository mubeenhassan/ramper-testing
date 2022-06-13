require('dotenv').config()
const { test, expect } = require('@playwright/test')
test('Signin and Signout With Google', async ({ page, browserName }) => {
  await page.goto(process.env.URL)
  await page.locator('text=Sign In').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('button:has-text("Continue with Google")').click()
  ]);
  await page1.locator('[aria-label="Email or phone"]').fill(process.env.GOOGLE_EMAIL);
  page1.locator('[aria-label="Email or phone"]').press('Enter')
  await page1.locator('[aria-label="Enter your password"]').fill(process.env.GOOGLE_PASSWORD);
  page1.locator('#passwordNext button:has-text("Next")').click()
  await page.locator('text=Sign out').click()
  await expect(page.locator('text=Sign Out Succeeded!').first()).toBeVisible()
  console.log("Browser Name : "+browserName)
})
