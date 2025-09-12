const LoginPage = require('../../POM/LoginPage');
const Credentials = require('../../../testData.env.json');
const readlineSync = require('readline-sync');
const BuyingTktPage = require('../../POM/BuyingTktPage');


describe("Buying Ticket", () => {
    before(async () => {
      console.log("Checking if login is required!");

      const phoneNumber =await LoginPage.fillPhoneNumber();
      if(await phoneNumber.isDisplayed()){
        console.log("Login page is detected. Running Login flow......");

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

     await driver.pause(8000); 
      }
    });

    it("Buying Ticket" , async() => {
     
     // --- 1. Tap by Bounds Helper Function ---
        async function tapByBounds(bounds) {
            const x = (bounds[0] + bounds[2]) / 2; // center X
            const y = (bounds[1] + bounds[3]) / 2; // center Y

            await driver.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: x, y: y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);

            await driver.releaseActions(); // release after tap
        }

        // --- 2. Bounds of Buy Ticket Button ---
        const buyTicketBounds = [445, 1938, 635, 2127];

        // --- 3. Tap on Buy Ticket ---
        await tapByBounds(buyTicketBounds);

        await browser.pause(2000); // wait for next page to open


        //click buying 5 tkts btn
        const bounds1 = [27,1683,362,1778];
        const x1 = (bounds1[0] + bounds1[2]) / 2;
        const y1 = (bounds1[1] + bounds1[3]) / 2;

await driver.performActions([{
  type: 'pointer',
  id: 'finger2',
  parameters: { pointerType: 'touch' },
  actions: [
    { type: 'pointerMove', duration: 0, x: x1, y: y1 }, // must be x and y
    { type: 'pointerDown', button: 0 },
    { type: 'pointerUp', button: 0 }
  ]
}]);
await driver.pause(2000);

//click "confirm"btn 
const confirmBtnforBuytkts = await BuyingTktPage.clickConfrimBtn();
await confirmBtnforBuytkts.waitForDisplayed({timeout: 5000});
await confirmBtnforBuytkts.click();

//click "confirm" btn at confirm phone number screen
const nextBtn = await BuyingTktPage.clickNextBtn();
await nextBtn.waitForDisplayed({timeout: 5000});
await nextBtn.click();

//click "Buy" btn
const buyBtnforBuytkts = await BuyingTktPage.clickBuyBtn();
await buyBtnforBuytkts.waitForDisplayed({timeout: 5000});
await buyBtnforBuytkts.click();

//click "confrim phone number btn
  // Get screen size dynamically
const windowSize = await driver.getWindowSize();
const screenWidth = windowSize.width;   // 1080
const screenHeight = windowSize.height; // 2280

// Calculate tap position (center of CONFIRM button area)
const x = Math.floor(screenWidth / 2);       // horizontal center (540)
const y = Math.floor(screenHeight * 0.63);   // about 63% of screen height (~1870px)

// Perform tap using W3C actions
await driver.performActions([{
  type: 'pointer',
  id: 'finger1',
  parameters: { pointerType: 'touch' },
  actions: [
    { type: 'pointerMove', duration: 0, x: x, y: y },
    { type: 'pointerDown', button: 0 },
    { type: 'pointerUp', button: 0 }
  ]
}]);

// Always release actions after
await driver.releaseActions();

//Input the OTP code to the terminal
const otpcode = readlineSync.question('Please enter OTP code: ');

//fill the otp code payment for the ticket buying
const otpCodeField = await BuyingTktPage.fillOTPcode();
     await otpCodeField.waitForDisplayed({timeout: 5000});
     await otpCodeField.click();
     await otpCodeField.clearValue();
     await otpCodeField.setValue(otpcode);


// click "confirm" btn
const paymentOTPconfirmBtn = await BuyingTktPage.clickPaymentConfirmBtn();
    await paymentOTPconfirmBtn.waitForDisplayed({timeout: 5000});
    await paymentOTPconfirmBtn.click();

//click close btn for spin wheels

   });
});