// in this file you can append custom step methods to 'I' object

const mainPageUrl = "http://opencart.qatestlab.net/index.php";

module.exports = function () {
  return actor({
    openMainPage() {
      this.amOnPage(mainPageUrl);
    },
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
  });
};
