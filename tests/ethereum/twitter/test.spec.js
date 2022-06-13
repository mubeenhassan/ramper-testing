require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { signIn, signOut } = require('../../blocks/reused')
test('Ethereum With Twitter', async ({ page }) => {
  await page.goto(process.env.URL)
  await signIn(page, async () => {
    await page.frameLocator('iframe').locator('text=More options').click()
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page
        .frameLocator('iframe')
        .locator('button:has-text("Continue with Twitter")')
        .click(),
    ])
    await page1
      .locator('[placeholder="Username or email"]')
      .fill(process.env.TWITTER_USERNAME)
    await page1
      .locator('[placeholder="Password"]')
      .fill(process.env.TWITTER_PASSWORD)
    await Promise.all([page1.locator('text=Authorize app').click()])
  })
  await signOut(page)
})
