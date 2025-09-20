const LoginPage = require('../../POM/LoginPage');
const Credentials = require('../../../testData.env.json');
const readlineSync = require('readline-sync');
const BuyingTktPage = require('../../POM/BuyingTktPage');
const { expect } = require('chai');
const { back } = require('appium-uiautomator2-driver/build/lib/commands/navigation');
const { AssistantsKnowledgePage } = require('twilio/lib/rest/assistants/v1/assistant/assistantsKnowledge');
const { AwsInstance } = require('twilio/lib/rest/accounts/v1/credential/aws');
const { LogInstance } = require('twilio/lib/rest/serverless/v1/service/environment/log');


describe("Buying Ticket", () => {
    before(async () => {
      console.log("Checking if login is required!");

      //change Language
      const MyBtn = await LoginPage.clickMyBtn();
      await MyBtn.waitForDisplayed({timeout: 5000});
      await MyBtn.click();

      const EnBtn = await LoginPage.clickEnBtn();
      await EnBtn.waitForDisplayed({timeout: 5000});
      await EnBtn.click();

      const phoneNumber =await LoginPage.fillPhoneNumber();
      if(await phoneNumber.isDisplayed()){
        console.log("Login page is detected. Running Login flow......");

     //fill the phonenumber
    await phoneNumber.waitForDisplayed({ timeout: 5000 });
    await phoneNumber.click();
    await phoneNumber.clearValue();
    await phoneNumber.setValue(Credentials.phoneNumber);

    //fill the password
  const passWord = await LoginPage.fillPassword();
    await passWord.waitForDisplayed({ timeout: 5000 });
    await passWord.click();
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

//     it("TC-01 , Verify the UI that doesn't doing any action at the Buying Tickets Screen." , async() => {
//         // go to the Buy Ticket screen
//          async function tapByBounds(bounds) {
//             const x = (bounds[0] + bounds[2]) / 2; // center X
//             const y = (bounds[1] + bounds[3]) / 2; // center Y

//             await driver.performActions([{
//                 type: 'pointer',
//                 id: 'finger1',
//                 parameters: { pointerType: 'touch' },
//                 actions: [
//                     { type: 'pointerMove', duration: 0, x: x, y: y },
//                     { type: 'pointerDown', button: 0 },
//                     { type: 'pause', duration: 100 },
//                     { type: 'pointerUp', button: 0 }
//                 ]
//             }]);

//             await driver.releaseActions(); // release after tap
//         }

//         // --- 2. Bounds of Buy Ticket Button ---
//         const buyTicketBounds = [445, 1938, 635, 2127];

//         // --- 3. Tap on Buy Ticket ---
//         await tapByBounds(buyTicketBounds);

//         await browser.pause(2000); // wait for next page to open

//         //check "Buy Ticket" is disable
//         const buyTicketBtn = await BuyingTktPage.clickbuyTicketBtn();
//         await buyTicketBtn.waitForDisplayed({timeout: 5000});
//         const clickableAttr = await buyTicketBtn.getAttribute('clickable');
//         const isClickable = clickableAttr === false;
//         expect(isClickable).to.be.false;

//         //check total amount counts when don't any action
//         const totalAmount = await BuyingTktPage.checkTicketAmount();
//         await totalAmount.waitForDisplayed({timeout: 5000});
        
//         //Get text
//         let totalAmountText = await totalAmount.getText();

//         //Fallback to content-desc if empty
//         if(!totalAmountText) {
//           totalAmountText = await totalAmount.getAttribute("content-desc")
//         }

//         expect(totalAmountText).to.equal("0 MMK");

//         //check totalticket when don't any action
//         const totalCount = await BuyingTktPage.checkTicketCount();
//         await totalCount.waitForDisplayed({timeout: 5000});

//         //Get text
//         let totalCountText = await totalCount.getText();

//         //Fallback to content-desc if empty
//         if(!totalCountText) {
//           totalCountText = await totalCount.getAttribute("content-desc")
//         }

//         expect(totalCountText).to.equal("0");

//         // --- click back key button ---
//         const backKey = await BuyingTktPage.clickBackKey();
//         await backKey.waitForDisplayed({timeout: 5000});
//         await backKey.click();
//    });

//    it("TC-02 , Verify click 'Back Arrow' at the Buy Ticket screen." , async() => {
//     // --- helper to tap by bounds ---
//     async function tapByBounds(bounds) {
//         const x = (bounds[0] + bounds[2]) / 2; 
//         const y = (bounds[1] + bounds[3]) / 2;

//         await driver.performActions([{
//             type: 'pointer',
//             id: 'finger1',
//             parameters: { pointerType: 'touch' },
//             actions: [
//                 { type: 'pointerMove', duration: 0, x, y },
//                 { type: 'pointerDown', button: 0 },
//                 { type: 'pause', duration: 100 },
//                 { type: 'pointerUp', button: 0 }
//             ]
//         }]);

//         await driver.releaseActions();
//     }

//     // --- bounds for Buy Ticket button ---
//     const buyTicketBounds = [445, 1938, 635, 2127];

//     // --- tap on Buy Ticket button ---
//     await tapByBounds(buyTicketBounds);

//     // --- click back key button ---
//     const backKey = await BuyingTktPage.clickBackKey();
//     await backKey.waitForDisplayed({timeout: 5000});
//     await backKey.click();

//     // --- assertion with "Buy Ticket" visible again ---
//     const buyTicketBtn = await $('~Buy Ticket');   // use locator if available
//     const isDisplayed = await buyTicketBtn.isDisplayed();

//     expect(isDisplayed).to.be.true;
// });

it("TC-03 , Verify the successfully random buy 3 tickets at the 'Buy Ticket' screen.", async() => {
  // go to the Buy Ticket screen
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


        //click randomly icon
        const rotateIcon = await BuyingTktPage.clickRotateIcon();
        await rotateIcon.waitForDisplayed({timeout: 5000});

        //loop throught 3 icons and click 
        for(let i = 0 ; i < 3 ; i++){
          await rotateIcon[i].click();
        }
});
}); 