class ShareTktPNPage{
    elements = {
    lattSaungIcon: () => $('~Latt Saung'),
    shareQRcodeTab: () => $('~Share with QR Code'),
    sharePNTab: () => $('~Share with Phone Number'),
    sentLotteryTicketBtn: () => $('~Send Lottery Tickets'),
    historyBtn: () => $('~History'),
    guideLineBtn: () => $('~Guideline'),
    addWishField: () => $('android=new UiSelector().className("android.widget.EditText").instance(0)'),
    phoneNumberField: () => $('android=new UiSelector().className("android.widget.EditText").instance(1)'),
    addBtn: () => $('~Add'),
    chooseTicketBtn: () => $('~Choose Ticket'),
    firstIcon: ( )=> $('android=new UiSelector().className("android.widget.ImageView").instance(4)'),
    buy30Btn: () => $('~30\nBuy 30 tickets'),
    };

    async clickLattSaungIcon(lattSaungIcon) {
        return this.elements.lattSaungIcon(lattSaungIcon)
    };

    async clickShareQRcodeTab(shareQRcodeTab) {
        return this.elements.shareQRcodeTab(shareQRcodeTab)
    };

    async clickSharePNTab(sharePNTab) {
        return this.elements.sharePNTab(sharePNTab)
    };

    async clickBackArrow(backArrowAtLattSaung) {
        return this.elements.backArrowAtLattSaung(backArrowAtLattSaung)
    };

    async clickSendLotteryTicketBtn(sentLotteryTicketBtn){
        return this.elements.sentLotteryTicketBtn(sentLotteryTicketBtn)
    };

    async clickGuideLinesbtn(guideLineBtn){
        return this.elements.guideLineBtn(guideLineBtn)
    };

    async clickHistorybtn(historyBtn){
        return this.elements.historyBtn(historyBtn)
    };

    async fillAddWishField(addWishField){
        return this.elements.addWishField(addWishField)
    };

    async fillPhoneNumber(phoneNumberField){
        return this.elements.phoneNumberField(phoneNumberField)
    };

    async clickAddBtn(addBtn){
        return this.elements.addBtn(addBtn)
    };

    async clickChooseTicketBtn(chooseTicketBtn){
       return this.elements.chooseTicketBtn(chooseTicketBtn)
    };

    async clickRotateIcon(rotateIcon) {
        return this.elements.rotateIcon(rotateIcon)
    };

    async clickFirstICon(firstIcon) {
        return this.elements.firstIcon(firstIcon)
    };

    async clickBuy30Btn(buy30Btn) {
        return this.elements.buy30Btn(buy30Btn)
    }
}

module.exports = new ShareTktPNPage();