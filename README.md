# Mobile App Automation (Monorepo)

This repository hosts multiple mobile automation projects.
Each app lives in its own top-level folder.

## Structure
- aung_bar_lay_app/ - WebdriverIO + Appium tests (Login flow implemented)

## How to run
cd aung_bar_lay_app
npm install
npx wdio run wdio.conf.js

## Test data
- Copy testData.env.sample.json to testData.env.json and fill your secrets.
- testData.env.json is gitignored.

E0F
