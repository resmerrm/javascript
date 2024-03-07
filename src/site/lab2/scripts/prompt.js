//----- Об’єкту myTxt присвоїти значення селекторів 'h1.n2'
var myTxt = document.querySelector('h1.n2');
//----- Об’єкту myTxt присвоїти значення селекторів '.myclass'
var myFont = document.querySelectorAll('.myclass');
// ---- Завантажуємо цикл для зміни розміру шрифту об’єкту myFont[i]
for (var i = 0; i < myFont.length; i++) {
    myFont[i].style.fontSize = '35px';
}
// ---- Записуємо в об’єкт myTxt значення 'Привіт, студенте!'
myTxt.innerHTML = 'Привіт, cтуденте!';
// ---- Присвоюємо змінній person значення яке введе користувач з клавіатури
var person = prompt('Як Вас звати');
if (person != null) {
    myTxt.innerHTML = "Я вітаю Вас " + person + "!" + "<br>" + " ";
}
// ---- Змінємо колір обєкту  myTxt за допомогою DOM
myTxt.style.color = 'red';
