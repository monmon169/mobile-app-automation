const LoginPage = require('../../POM/LoginPage');
const Credentials = require('../../../testData.env.json');
const { expect } = require('chai');
const { log, error } = require('console');  
const readlineSync = require('readline-sync');
const { AwsInstance } = require('twilio/lib/rest/accounts/v1/credential/aws');
const { click } = require('appium-uiautomator2-driver/build/lib/commands/element');

describe("Login to the App", () => {
//Negative Case
//   it("TC-01 , Verify unsuccessfully login with invalid 'Phone Number'", async() => {
//   //fill the phone number
//   const phoneNumber = await LoginPage.fillPhoneNumber();
//     await phoneNumber.waitForDisplayed({ timeout: 5000 });
//     await phoneNumber.click();
//     await phoneNumber.clearValue();
//     await phoneNumber.setValue(Credentials.phoneNumber);

//     //check login button is disabled
//     const LoginBtn = await LoginPage.clickLoginBtn();
//     await LoginBtn.waitForDisplayed({timeout: 5000});
//     const clickableAttr = await LoginBtn.getAttribute('clickable');
//     const isClickable = clickableAttr === 'true'; //converting string => boolean
//     expect(isClickable).to.be.false;
//   });

//   it("TC-02 , Verify unsuccessfully login with invalid 'Password'", async() => {
//   //fill the phone number
//   const phoneNumber = await LoginPage.fillPhoneNumber();
//     await phoneNumber.waitForDisplayed({ timeout: 5000 });
//     await phoneNumber.click();
//     await phoneNumber.clearValue();

//   //fill the password
//   const passWord = await LoginPage.fillPassword();
//     await passWord.waitForDisplayed({ timeout: 5000 });
//     await passWord.click();
//     await passWord.clearValue();
//     await passWord.setValue(Credentials.passWord);

//     //check login button is disabled
//     const LoginBtn = await LoginPage.clickLoginBtn();
//     await LoginBtn.waitForDisplayed({timeout: 5000});
//     const clickableAttr = await LoginBtn.getAttribute('clickable');
//     const isClickable = clickableAttr === 'true'; //converting string => boolean
//     expect(isClickable).to.be.false;
//   });


//     it("TC-03 , Verify unsuccessful login when both phone number and password are invalid.", async() => {
//     //fill the phone number
//     const phoneNumber = await LoginPage.fillPhoneNumber();
//       await phoneNumber.waitForDisplayed({ timeout: 5000 });
//       await phoneNumber.click();
//       await phoneNumber.clearValue();
//       await phoneNumber.setValue(Credentials.invalid_phoneNumber);

//     //fill the password
//     const passWord = await LoginPage.fillPassword();
//       await passWord.waitForDisplayed({ timeout: 5000 });
//       await passWord.click();
//       await passWord.clearValue();
//       await passWord.setValue(Credentials.invalid_password);

//     //Expected Result-1 : Check the 'Login' btn is enabled
//     const LoginBtn = await LoginPage.clickLoginBtn();
//       await LoginBtn.waitForDisplayed({timeout: 5000});
//       const clickableAttr = await LoginBtn.getAttribute('clickable');
//       const isClickable = clickableAttr === 'true'; //converting string => boolean
//       expect(isClickable).to.be.true;

//     //click login button
//     const LoginBtn1 = await LoginPage.clickLoginBtn();
//     await LoginBtn1.waitForDisplayed({timeout: 5000});
//     await LoginBtn1.click();

//     //Expected Result-2 : Check the error pop up displayed
//     const errorPopup = await LoginPage.checkPopup();
//     await errorPopup.waitForDisplayed({timeout: 5000});
//     const popUpText = await errorPopup.getAttribute('content-desc');
//     expect(popUpText).to.include(LoginPage.message.bothInvalidPhnoPw);

//    // The back button might close it
//   await driver.back();
//   console.log('Pressed back button to close dialog');
// });

//   it("TC-04 , Verify unsuccessfully login with valid 'Phone Number' and invalid 'Password'.", async() => {
//   //fill the phone number
//   const phoneNumber = await LoginPage.fillPhoneNumber();
//     await phoneNumber.waitForDisplayed({ timeout: 5000 });
//     await phoneNumber.click();
//     await phoneNumber.clearValue();
//     await phoneNumber.setValue(Credentials.phoneNumber);

//   //fill the password
//   const passWord = await LoginPage.fillPassword();
//     await passWord.waitForDisplayed({ timeout: 5000 });
//     await passWord.click();
//     await passWord.clearValue();
//     await passWord.setValue(Credentials.invalid_password);

//   //Expected Result-1 : Check the 'Login' btn is enabled
//   const LoginBtn = await LoginPage.clickLoginBtn();
//     await LoginBtn.waitForDisplayed({timeout: 5000});
//     const clickableAttr = await LoginBtn.getAttribute('clickable');
//     const isClickable = clickableAttr === 'true'; //converting string => boolean
//     expect(isClickable).to.be.true;

//   //click login button
//   const LoginBtn1 = await LoginPage.clickLoginBtn();
//   await LoginBtn1.waitForDisplayed({timeout: 5000});
//   await LoginBtn1.click();

//   //Expected Result-2 : Check the error pop up displayed
//   const errorPopup = await LoginPage.checkPopup();
//    await errorPopup.waitForDisplayed({timeout: 5000});
//    const popUpText = await errorPopup.getAttribute('content-desc');
//    expect(popUpText).to.include(LoginPage.message.validPhnoInvalidPw);

//   //The back button might close it
//   await driver.back();
//   console.log('Pressed back button to close dialog');
//   });

//   it("TC-05 , Verify to get the OTP when both phone number and password are valid when click the Cancle' button.", async() => {
//      //fill the phone number
//     const phoneNumber = await LoginPage.fillPhoneNumber();
//       await phoneNumber.waitForDisplayed({ timeout: 5000 });
//       await phoneNumber.click();
//       await phoneNumber.clearValue();
//       await phoneNumber.setValue(Credentials.phoneNumber);

//     //fill the password
//     const passWord = await LoginPage.fillPassword();
//       await passWord.waitForDisplayed({ timeout: 5000 });
//       await passWord.click();
//       await passWord.clearValue();
//       await passWord.setValue(Credentials.passWord);

//     //click login button
//     const LoginBtn1 = await LoginPage.clickLoginBtn();
//     await LoginBtn1.waitForDisplayed({timeout: 5000});
//     await LoginBtn1.click();

//     //Input the OTP code to the terminal
//     const otpcode = readlineSync.question('Please enter OTP code: ');

//     //Fill the OTP code
//     const otpCodeField = await LoginPage.fillOtpCode();
//      await otpCodeField.waitForDisplayed({timeout: 5000});
//      await otpCodeField.click();
//      await otpCodeField.clearValue();
//      await otpCodeField.setValue(otpcode);

//     //click "Cancle" button
//      const conFirmBtn = await LoginPage.checkCloseBtn();
//       await conFirmBtn.waitForDisplayed({timeout: 5000});
//       await conFirmBtn.click();

//     //assertion the phone number field must be displayed
//    const isDisplayed = await phoneNumber.isDisplayed();
//    expect(isDisplayed).to.equal(true);
//   });


// Happy Case
  it("TC-06 , Verify to get the OTP when both phone number and password are valid when click the 'Confrim' button.", async() => {
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

    // //Input the OTP code to the terminal
    // const otpcode = readlineSync.question('Please enter OTP code: ');

    // //Fill the OTP code
    // const otpCodeField = await LoginPage.fillOtpCode();
    //  await otpCodeField.waitForDisplayed({timeout: 5000});
    //  await otpCodeField.click();
    //  await otpCodeField.clearValue();
    //  await otpCodeField.setValue(otpcode);

    // //click "Confrim" button
    //  const conFirmBtn = await LoginPage.clickComfirmBtn();
    //   await conFirmBtn.waitForDisplayed({timeout: 5000});
    //   await conFirmBtn.click();

    // //Assertion with 'Buy Ticket' button is displayed at the Home Screen
    // const notiAllowBtn = await LoginPage.clickAllowBtn();
    // await notiAllowBtn.waitForDisplayed({timeout: 5000});
    // await notiAllowBtn.click();

    const buyTicketBtn = await LoginPage.clickBuyTicketBtn();
    const isDisplayed = await buyTicketBtn.isDisplayed({timeout: 5000});
    expect(isDisplayed).to.equal(true);
  });
});