//объект loginUser
let loginUser = {
  email: "s11fg@gmail.com",
  password: 987456,
};

Feature("buy");

Scenario.only("test buyProduct", ({ I }) => {
  I.login(loginUser); //вызываем метод авторизации и поддтягиваем данные объекта loginUser
I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40');
I.


  //pause();
});
