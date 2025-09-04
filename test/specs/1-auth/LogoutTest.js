const LoginPage = require('../../POM/LoginPage');
const LogoutPage = require('../../POM/LogoutPage');
const Credentials = require('../../../testData.env.json');
const readlineSync = require('readline-sync');


describe("Logout from the App", () => {
    it("TC-08 , Verify users successfully logout from the applications.", async() => {
  //fill the phone number
  const phoneNumber = await LoginPage.fillPhoneNumber();
    await phoneNumber.waitForDisplayed({ timeout: 5000 });
    await phoneNumber.click();
    await phoneNumber.clearValue();
    await phoneNumber.setValue(Credentials.phoneNumber);

    //fill the password
  const passWord = await LoginPage.fillPassword();
    await passWord.waitForDisplayed({ timeout: 5000 });
    await passWord.click();
    await passWord.clearValue();
    await passWord.setValue(Credentials.passWord);

    //click login button
  const LoginBtn1 = await LoginPage.clickLoginBtn();
    await LoginBtn1.waitForDisplayed({timeout: 5000});
    await LoginBtn1.click();

    //Input the OTP code to the terminal
  const otpcode = readlineSync.question('Please enter OTP code: ');

    //Fill the OTP code
  const otpCodeField = await LoginPage.fillOtpCode();
     await otpCodeField.waitForDisplayed({timeout: 5000});
     await otpCodeField.click();
     await otpCodeField.clearValue();
     await otpCodeField.setValue(otpcode);

    //click "Confrim" button
   const conFirmBtn = await LoginPage.clickComfirmBtn();
     await conFirmBtn.waitForDisplayed({timeout: 5000});
     await conFirmBtn.click();

    //click "Allow Notification" button
    const allowNotiBtn = await LoginPage.clickAllowBtn();
     await allowNotiBtn.waitForDisplayed({timeout: 5000});
     await allowNotiBtn.click();

     await driver.pause(8000); // give UI time to settle

   //click "profile tab" 
    const centerX = 900;
    const centerY = 2105;

    // Use W3C actions (async) instead of old touchAction
    await browser.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: centerX, y: centerY },
            { type: 'pointerDown', button: 0 },
            { type: 'pointerUp', button: 0 }
        ]
    }]);

    await browser.pause(1000); // wait for Profile page to open

    // Swipe up a few times to make sure Logout button is visible
async function swipeUp() {
    const { width, height } = await driver.getWindowRect();
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: width / 2, y: height * 0.8 },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 200 },
            { type: 'pointerMove', duration: 800, x: width / 2, y: height * 0.2 },
            { type: 'pointerUp', button: 0 },
        ],
    }]);
}

async function tapByBounds(bounds) {
    const x = (bounds[0] + bounds[2]) / 2;
    const y = (bounds[1] + bounds[3]) / 2;

    await driver.performActions([{
        type: 'pointer',
        id: 'finger2',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: x, y: y },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 100 },
            { type: 'pointerUp', button: 0 },
        ],
    }]);
}

// Logout button bounds
const logoutBounds = [51, 1540, 1029, 1678];

// Swipe 3 times just in case
for (let i = 0; i < 3; i++) {
    await swipeUp();
    await browser.pause(500);
}

// Tap the Logout button
await tapByBounds(logoutBounds);
  });
})