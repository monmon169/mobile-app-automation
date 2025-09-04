class LogoutPage{
    elements = {
        profileTab : () =>  $('~Profile\nTab 3 of 3'),
        logOutBtn : () => $(`android=new UiScrollable(new UiSelector().scrollable(true))
    .scrollIntoView(new UiSelector().description("Log Out"))`),
    }

    async clickProfileTab() {
        return this.elements.profileTab();
    }

    async clickLogOutBtn() {
        return this.elements.logOutBtn();
    }
}

module.exports = new LogoutPage();