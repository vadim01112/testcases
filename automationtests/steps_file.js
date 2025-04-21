const mainPageUrl = "http://opencart.qatestlab.net/index.php";

const openSignIn = { xpath: '//a[text()="Sign In"]' };
const emailField = { xpath: '//input[@name="email"]' };
const passwordField = { xpath: '//input[@name="password"]' };
const clickLogin = { xpath: '//input[@class="btn btn-primary"]' };
const confirmLoadPage = "My Account";

module.exports = function () {
  return actor({
    
    //метод загрузка главной страницы
    openMainPage() {
      this.amOnPage(mainPageUrl);
    },

    //метод авторизация на сайте
    login(user) {
      this.openMainPage();
      this.click(openSignIn);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(clickLogin);
      this.see(confirmLoadPage);
    },
  });
};
