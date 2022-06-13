require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { signIn, copyToken, signOut } = require('../../blocks/reused')
test('Ethereum With Google', async ({ page }) => {
  await page.goto(process.env.URL)
  await page.locator('text=Terra').click()
  await signIn(page, async () => {
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page
        .frameLocator('iframe')
        .locator('button:has-text("Continue with Google")')
        .click(),
    ])
    await page1
      .locator('[aria-label="Email or phone"]')
      .fill(process.env.GOOGLE_EMAIL)
    page1.locator('[aria-label="Email or phone"]').press('Enter')
    await page1
      .locator('[aria-label="Enter your password"]')
      .fill(process.env.GOOGLE_PASSWORD)
    page1.locator('#passwordNext button:has-text("Next")').click()
  })
  await copyToken(page)
  await signOut(page)
  // await page.pause();
})
