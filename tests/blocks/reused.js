const { expect } = require('@playwright/test')
// Sign In Test 
const signIn = async (page, innerCall) => {
 await page.locator('text=Sign In').click()
 await innerCall()
 await expect(page.locator('text=Sign In Succeeded!').first()).toBeVisible()
 console.log('Sign In Success!')
}


// Can Copy Token To Clip Board 
const copyToken = async (page) => {
 await page.locator('text=My wallet').click();  
 // await page.frameLocator('iframe[name="ramper_signin"]').locator('button:has-text("0x60a366C7B9e7faE6735DcD2ae3B41af1a80D63DD")').click();

 await expect(page.locator('text=Copied to clipboard').first()).toBeVisible()
 console.log('Token Coppied Success!')
}

// Sign Out Test 
const signOut = async (page) => {
 await page.locator('text=Sign out').click()
 await expect(page.locator('text=Sign Out Succeeded!').first()).toBeVisible()
 console.log('Sign Out Success!')
}

module.exports = {signIn, copyToken, signOut}
