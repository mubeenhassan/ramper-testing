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
```


## Runing test cases
```
# Login with Google running test in the background
npx playwright test ./tests/signin/google.spec.js

# Login with Google 
npx playwright test --headed ./tests/signin/google.spec.js
```
