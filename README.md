# Ramper Automated Testing with Playwright

A repository for automating test cases for ramper using Playwright.

## Installation

Installation of browsers ( Chromium, Firefox, and WebKit )

```bash
npm install playwright
```
Installing local dependencies

```bash
npm i
```

## Usage
Rename example.env by .evn having your credentials for testing
```
GOOGLE_EMAIL=
GOOGLE_PASSWORD=
FACEBOOK_USERNAME=
FACEBOOK_PASSWORD=
TWITTER_USERNAME=
TWITTER_PASSWORD=
```


## Runing test cases
```
# Login Ethereum with Google test case
npx playwright test tests/ethereum/google

```

## Headless mode

Change the headless:true in playwright.config.js to run the test in background 

## Run test on multiple browsers ( Firefox Webkit (safari))

Uncomment the browsers in playwright.config.js file
