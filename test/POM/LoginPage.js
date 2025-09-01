class LoginPage{
    elements = {
        phoneNumber : () => $('android=new UiSelector().className("android.widget.EditText").instance(0)'),
        passWord :() => $('android=new UiSelector().className("android.widget.EditText").instance(1)'),
        logInbtn :() => $('(//android.view.View[@content-desc="LOGIN"])[1]'),
        otpField: () => $('android=new UiSelector().className("android.widget.EditText").index(0)'),
        closeBtn: () => $('~CLOSE'),
        comfrimBtn: () => $('~CONFIRM'),
        mYBtn: () => $('~MY'),
        eNBtn: () => $('~EN'),
        popUp:() => $('//android.widget.ImageView[@content-desc]'),
        notiAllowBtn: () => $('id=com.android.permissioncontroller:id/permission_allow_button'),
        wrongOTPerrorMsg: () => $('//android.view.View[contains(@content-desc,"Your OTP is wrong")]'),
        timeElements: () => $('//android.view.View[contains(@content-desc,"Code expires in:")]'),
        resendOTPcode: () => $('//android.view.View[contains(@content-desc,"Resend code")]'),
        crossBtn: () => $('//android.widget.ImageView'),
        buyTicketBtn: () => $('//android.widget.ImageView[@content-desc="Buy Ticket"]'),

        
    }

    message ={
        invalidPhnoValidPw : "Opps !\nYour account is not exist. Please create new account and sign in. Thank you\nCLOSE",
        bothInvalidPhnoPw : "Opps ! Invalid phone number. CLOSE",
        validPhnoInvalidPw : "Opps !\nYour account or password is incorrect. Please try again.\nCLOSE",
        buyingTicket : "Buy Ticket"
    }
    
    async fillPhoneNumber(phoneNumber) {
       return this.elements.phoneNumber(phoneNumber);
    }

    async fillPassword(passWord) {
        return this.elements.passWord(passWord);
    }

    async clickLoginBtn() {
        return this.elements.logInbtn();
    }

    async fillOtpCode() {
        return this.elements.otpField();
    }

    async clickMyBtn() {
        return this.elements.mYBtn();
    }

    async clickEnBtn() {
        return this.elements.eNBtn();
    }

    async checkCloseBtn() {
        return this.elements.closeBtn();
    }

    async clickComfirmBtn() {
        return this.elements.comfrimBtn();
    }

    async checkPopup() {
        return this.elements.popUp();
    }

    async clickAllowBtn() {
        return this.elements.notiAllowBtn();
    }

    async checkWrongOtpMsg() {
        return this.elements.wrongOTPerrorMsg();
    }

    async checkTimerElements() {
        return this.elements.timeElements();
    }

    async checkResendOTPcode() {
        return this.elements.resendOTPcode();
    }

    async clickCrossBtn() {
        return this.elements.crossBtn();
    }

   async checkBuyingTicketBtn() {
        return this.elements.buyTicketBtn();
   }
}

module.exports = new LoginPage();