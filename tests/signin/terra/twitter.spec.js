require('dotenv').config()
const { test, expect } = require('@playwright/test')
test('Signin With Twitter', async ({ page }) => {
  await page.goto(process.env.URL)
  await page.locator('text=Terra').click();
  await page.locator('text=Sign In').click();
  await page.frameLocator('iframe').locator('text=More options').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('button:has-text("Continue with Twitter")').click()
  ]);
  await page1.locator('[placeholder="Username or email"]').fill(process.env.TWITTER_USERNAME);
  await page1.locator('[placeholder="Password"]').fill(process.env.TWITTER_PASSWORD);
  await Promise.all([
    page1.locator('text=Authorize app').click()
  ]);
  await page.locator('text=My wallet').click();
  await page.screenshot({ path: `./screenshots/${Date.now()}signin.png` })
})

