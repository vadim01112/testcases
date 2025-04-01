const { I } = inject();

module.exports = {
  myAccountLink: { xpath: '//span[text()="My Account"]' }, //локатор ссылки My Account
  myAccountRegisterLink: { xpath: '//a[text()="Register"]' }, //локатор ссылки Register

  //открытие страницы регистрации
  openRegistrationPage() {
    I.click(this.myAccountLink);
    I.click(this.myAccountRegisterLink);
  },
};
