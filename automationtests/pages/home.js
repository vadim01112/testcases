const { I } = inject();

module.exports = {
  myAccountLink: { xpath: '//span[text()="My Account"]' },
  myAccountRegisterLink: { xpath: '//a[text()="Register"]' },

  openRegistrationPage() {
    I.click(this.myAccountLink);
    I.click(this.myAccountRegisterLink);
  },
};
