Feature("store");

Scenario("test authorization", ({ I }) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php");
  I.click({ xpath: '//a[text()="Sign In"]' });
  I.see("Returning Customer");
  I.fillField({ xpath: '//input[@name="email"]' }, "s11fg@gmail.com");
  I.fillField({ xpath: '//input[@name="password"]' }, 987456);
  I.click({ xpath: '//input[@class="btn btn-primary"]' });
  I.see("My Account");
  //pause();
});
