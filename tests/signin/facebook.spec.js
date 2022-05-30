require('dotenv').config()
const { test, expect } = require('@playwright/test')
test('Signin With Google', async ({ page }) => {
  await page.goto(process.env.URL)
  await page.locator('text=Sign In').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('button:has-text("Continue with Facebook")').click()
  ]);
  await page1.locator('[placeholder="Email address or phone number"]').fill(process.env.FACEBOOK_USERNAME);
  await page1.locator('[placeholder="Email address or phone number"]').press('Tab');
  await page1.locator('[placeholder="Password"]').fill(process.env.FACEBOOK_PASSWORD);
  await Promise.all([
    page1.locator('[placeholder="Password"]').press('Enter')
  ]);
  await page.locator('text=My wallet').click();
  await page.screenshot({ path: `./screenshots/${Date.now()}signin.png` })
})
