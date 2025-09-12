const { ThisMonthInstance } = require("twilio/lib/rest/api/v2010/account/usage/record/thisMonth");

class BuyingTktPage{
    elements = {
    confirmBtnforBuytkts : () => $('//android.view.View[@content-desc="CONFIRM"]'),
    nextBtnforBuytkts: () => $('//android.view.View[@content-desc="NEXT"]'),
    buyBtnforBuytkts: () => $('//android.view.View[@content-desc="BUY"]'),
    payMentOtpField: () => $('//android.widget.EditText'),
    paymentOTPconfirmBtn: () => $('//android.view.View[@content-desc="CONFIRM"]'),
    closeBtnForSpinwheel: () => $('//android.view.View[@content-desc="CLOSE"]'),
    }

    randomlyElements = {
    buyTicketBtn: () => $('//android.view.View[@content-desc="BUY TICKET"]'),
    ticketAmount0MMK: () => $('//android.view.View[@content-desc="0 MMK"]'),
    ticketCount0: () => $('//android.view.View[@content-desc="0"]'),
    }


    async clickConfrimBtn(confirmBtnforBuytkts) {
        return this.elements.confirmBtnforBuytkts(confirmBtnforBuytkts);
    };

    async clickNextBtn(nextBtnforBuytkts) {
        return this.elements.nextBtnforBuytkts(nextBtnforBuytkts)
    };

    async clickBuyBtn(buyBtnforBuytkts) {
        return this.elements.buyBtnforBuytkts(buyBtnforBuytkts)
    };

    async fillOTPcode(payMentOtpField){
        return this.elements.payMentOtpField(payMentOtpField);
    };

    async clickPaymentConfirmBtn() {
        return this.elements.paymentOTPconfirmBtn();
    }

    async clickCloseBtnSpinWheel() {
        
    }

    async clickbuyTicketBtn() {
        return this.randomlyElements.buyTicketBtn();
    }

    async checkTicketAmount() {
        return this.randomlyElements.ticketAmount0MMK();
    }

    async checkTicketCount() {
        return this.randomlyElements.ticketCount0();
    }
}

module.exports = new BuyingTktPage();