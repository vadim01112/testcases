Feature("store authorization");

xScenario("test authorization", ({ I }) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php"); //открытие главной страницы
  I.click({ xpath: '//a[text()="Sign In"]' }); //клик по Sign In
  I.see("Returning Customer"); //подтверждение загрузки страницы
  I.fillField({ xpath: '//input[@name="email"]' }, "s11fg@gmail.com"); // заполнение поля Email
  I.fillField({ xpath: '//input[@name="password"]' }, 987456); //заполнение поля Password
  I.click({ xpath: '//input[@class="btn btn-primary"]' }); // клик login
  I.see("My Account"); //подтверждение авторизации
  //pause();
});
