const { openRegistrationPage } = require("../../pages/home");

Feature("store");

Scenario("test registration", ({ I, homePage }) => {
  I.openMainPage(); //использование метода openMainPage
  homePage.openRegistrationPage(); //использование метода openRegistrationPage объекта homePage
  I.see("Register Account");
  I.fillField({ xpath: '//input[@name="firstname"]' }, "Oleg");
  I.fillField({ xpath: '//input[@name="lastname"]' }, 5);
  I.fillField({ xpath: '//input[@name="email"]' }, "s11fg@gmail.com");
  //pause();
  I.fillField({ xpath: '//input[@name="telephone"]' }, 83247);
  I.fillField({ xpath: '//input[@name="password"]' }, 987456);
  I.fillField({ xpath: '//input[@name="confirm"]' }, 987456);
  I.click({ xpath: '//label[@for="newsletter1"]' });
  I.click({ xpath: '//input[@name="agree"]' });
  I.click({ xpath: '//input[@class="btn btn-primary"]' });
  I.see("Your Account Has Been Created!");
});
