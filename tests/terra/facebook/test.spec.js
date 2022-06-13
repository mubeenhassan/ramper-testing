require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { signIn, signOut } = require('../../blocks/reused')
test('Ethereum With Facebook', async ({ page }) => {
  await page.goto(process.env.URL)
  await page.locator('text=Terra').click()
  await signIn(page, async () => {
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
  })
  await signOut(page)
})