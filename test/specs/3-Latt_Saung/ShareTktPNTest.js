const LoginPage = require('../../POM/LoginPage');
const Credentials = require('../../../testData.env.json');
const readlineSync = require('readline-sync');
const BuyingTktPage = require('../../POM/BuyingTktPage');
const ShareTktPNPage = require('../../POM/ShareTktPNPage');
const { expect, assert } = require('chai');

describe("Latt-Saung Function",() => {
//      before(async () => {
//       console.log("Checking if login is required!");

//       //change Language
//       const MyBtn = await LoginPage.clickMyBtn();
//       await MyBtn.waitForDisplayed({timeout: 5000});
//       await MyBtn.click();

//       const EnBtn = await LoginPage.clickEnBtn();
//       await EnBtn.waitForDisplayed({timeout: 5000});
//       await EnBtn.click();

//       const phoneNumber =await LoginPage.fillPhoneNumber();
//       if(await phoneNumber.isDisplayed()){
//         console.log("Login page is detected. Running Login flow......");

//      //fill the phonenumber
//     await phoneNumber.waitForDisplayed({ timeout: 5000 });
//     await phoneNumber.click();
//     await phoneNumber.clearValue();
//     await phoneNumber.setValue(Credentials.phoneNumber);

//     //fill the password
//   const passWord = await LoginPage.fillPassword();
//     await passWord.waitForDisplayed({ timeout: 5000 });
//     await passWord.click();
//     await passWord.setValue(Credentials.passWord);

//     //click login button
//   const LoginBtn1 = await LoginPage.clickLoginBtn();
//     await LoginBtn1.waitForDisplayed({timeout: 5000});
//     await LoginBtn1.click();

//     //Input the OTP code to the terminal
//   const otpcode = readlineSync.question('Please enter OTP code: ');

//     //Fill the OTP code
//   const otpCodeField = await LoginPage.fillOtpCode();
//      await otpCodeField.waitForDisplayed({timeout: 5000});
//      await otpCodeField.click();
//      await otpCodeField.clearValue();
//      await otpCodeField.setValue(otpcode);

//     //click "Confrim" button
//    const conFirmBtn = await LoginPage.clickComfirmBtn();
//      await conFirmBtn.waitForDisplayed({timeout: 5000});
//      await conFirmBtn.click();

//     //click "Allow Notification" button
//     const allowNotiBtn = await LoginPage.clickAllowBtn();
//      await allowNotiBtn.waitForDisplayed({timeout: 5000});
//      await allowNotiBtn.click();

//      await driver.pause(8000); 
//       }
//     });

// //     it("TC-01 , Verify the Latt-Saung function is included at the UI." , async() => {
// //      const lattSaungIcon = await ShareTktPNPage.clickLattSaungIcon();
// //      const isDisplayed = await lattSaungIcon.isDisplayed();
// //      await lattSaungIcon.waitForDisplayed({timeout: 5000});
     
// //      //check Latt-saung icon is displayed at the Home Screen
// //      expect(isDisplayed).to.be.true;
// //      expect(lattSaungIcon).to.exist;
// //     })

// //     it("TC-02 , Verify the Latt-Saung Icon function." , async() => {
// //     // --- Step-1 : Click "Latt-Saung" icon at the Home Screen
// //     const lattSaungIcon = await ShareTktPNPage.clickLattSaungIcon();
// //     await lattSaungIcon.waitForDisplayed({timeout: 5000});
// //     await lattSaungIcon.click();

// //     // --- Assertion: "Share with QR Code" and "Share with Phone Number" are displayed at the Latt-Saung Screen.
// //     const shareQRcodeTab = await ShareTktPNPage.clickShareQRcodeTab();
// //     await shareQRcodeTab.waitForDisplayed({timeout: 5000});
// //     expect(await shareQRcodeTab.isDisplayed()).to.be.true;

// //     const sharePNTab = await ShareTktPNPage.clickSharePNTab();
// //     await sharePNTab.waitForDisplayed({timeout: 5000});
// //     expect(await sharePNTab.isDisplayed()).to.be.true;

// //     //click back arrow
// //   await driver.back();
// //   console.log('Pressed back button to close dialog');
// //     });

//     it("TC-03 , Verify click 'Share with Phone Number' tab." , async() => {
//     // --- Step-1 : Click "Latt-Saung" icon at the Home Screen
//     const lattSaungIcon = await ShareTktPNPage.clickLattSaungIcon();
//     await lattSaungIcon.waitForDisplayed({timeout: 5000});
//     await lattSaungIcon.click();

//     // --- Step-2 : Click "Share with Phone Number" tab
//     const sharePNTab = await ShareTktPNPage.clickSharePNTab();
//     await sharePNTab.waitForDisplayed({timeout: 5000});
//     await sharePNTab.click();

//     // --- Assertion: SendLotteryTicketsBtn , HistoryBtn and GuidelinesBtn are displayed at the Share ticket Screen
//     const sentLotteryTicketBtn = await ShareTktPNPage.clickSendLotteryTicketBtn();
//     await sentLotteryTicketBtn.waitForDisplayed({timeout: 5000});
//     expect(await sentLotteryTicketBtn.isDisplayed()).to.be.true;

//     // --- For HistoryBtn
//     const historyBtn = await ShareTktPNPage.clickHistorybtn();
//     await historyBtn.waitForDisplayed({timeout: 5000});
//     expect(await historyBtn.isDisplayed()).to.be.true;

//     // --- For Guidelines Btn
//     const guideLineBtn = await ShareTktPNPage.clickGuideLinesbtn();
//     await guideLineBtn.waitForDisplayed({timeout: 5000});
//     expect(await guideLineBtn.isDisplayed()).to.be.true;
//     });

    it("TC-04 , Verify the function of 'Share Ticket with Phone Number'.", async() => {
     // --- Step-2 : Click "Latt-Saung" icon at the Home Screen
    const lattSaungIcon = await ShareTktPNPage.clickLattSaungIcon();
    await lattSaungIcon.waitForDisplayed({timeout: 5000});
    await lattSaungIcon.click();

    // --- Step-3 : Click "Share with Phone Number" tab
    const sharePNTab = await ShareTktPNPage.clickSharePNTab();
    await sharePNTab.waitForDisplayed({timeout: 5000});
    await sharePNTab.click();

    // --- Step-4 : Click "Send Lottery Tickets" button
    const sentLotteryTicketBtn = await ShareTktPNPage.clickSendLotteryTicketBtn();
    await sentLotteryTicketBtn.waitForDisplayed({timeout: 5000});
    await sentLotteryTicketBtn.click();

    // --- Step-5 : Fill "Add Wish" field
    const addWishField = await ShareTktPNPage.fillAddWishField();
    await addWishField.waitForDisplayed({timeout: 5000});
    await addWishField.click();
    await addWishField.setValue("Good Luck");

    // --- Step-6 : Fill "Enter Phone Number Filed
    const phoneNumberField = await ShareTktPNPage.fillPhoneNumber();
    await phoneNumberField.waitForDisplayed({timeout: 5000});
    await phoneNumberField.click();
    await phoneNumberField.setValue('09457196485');

    // --- Step-7 : Click "Add" button
    const addBtn = await ShareTktPNPage.clickAddBtn();
    await addBtn.waitForDisplayed({timeout: 5000});
    await addBtn.click();

    // --- Step-6 : Fill "Enter Phone Number Filed
    const phoneNumberField1 = await ShareTktPNPage.fillPhoneNumber();
    await phoneNumberField1.waitForDisplayed({timeout: 5000});
    await phoneNumberField1.click();
    await phoneNumberField1.setValue('09685787224');

    // --- Step-7 : Click "Add" button
    const addBtn1 = await ShareTktPNPage.clickAddBtn();
    await addBtn1.waitForDisplayed({timeout: 5000});
    await addBtn1.click();

    // --- Step-8 : Click "Choose Ticket" button
    const chooseTicketBtn = await ShareTktPNPage.clickChooseTicketBtn();
    await chooseTicketBtn.waitForDisplayed({timeout: 5000});
    await chooseTicketBtn.click();

    await driver.pause(8000);

   // --- Step-9 : Click "Buy 30 Tickets" button
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
        const buyTicketBounds = [27, 1571, 362, 1666];

        // --- 3. Tap on Buy Ticket ---
        await tapByBounds(buyTicketBounds);

        await browser.pause(2000); // wait for next page to open
    });
});