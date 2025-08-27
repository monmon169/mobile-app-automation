class LoginPage{
    elements = {
        phoneNumber : () => $('android=new UiSelector().className("android.widget.EditText").instance(0)'),
        passWord :() => $('android=new UiSelector().className("android.widget.EditText").instance(1)'),
        logInbtn :() => $('(//android.view.View[@content-desc="Login"])[3]'),
        otpField: () => $('android=new UiSelector().className("android.widget.EditText").index(0)'),
        closeBtn: () => $('~Close'),
        comfrimBtn: () => $('~Confirm'),
        mYBtn: () => $('~MY'),
        eNBtn: () => $('~EN'),
        popUp:() => $('//android.widget.ImageView[@content-desc]'),
        buyTicketBtn: () => $('android=new UiSelector().className("android.widget.ImageView").instance(13)'),
        notiAllowBtn: () => $('id=com.android.permissioncontroller:id/permission_allow_button'),
    }

    message ={
        invalidPhnoValidPw : "Opps !\nYour account is not exist. Please create new account and sign in. Thank you\nClose",
        bothInvalidPhnoPw : "Opps !\nInvalid phone number.\nClose",
        validPhnoInvalidPw : "Opps !\nYour account or password is incorrect. Please try again.\nClose",
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

    async clickBuyTicketBtn() {
        return this.elements.buyTicketBtn()
;    }
}

module.exports = new LoginPage();