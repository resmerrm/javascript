Метод confirm дозволяє вивести діалогове вікно з повідомленням і двома кнопками – Оk і Відміна (Cancel). На відміну від методу alert цей метод повертає логічну величину, значення якої залежить від того, на якій з двох кнопок клацнув користувач. Якщо він клацнув на кнопці Оk, то повертається значення true (істина, так); якщо він клацнув на кнопці Скасування, то повертається значення false:
var r = confirm("Готові гризти граніт науки?");
if (r == true) {
    myTxt.innerHTML = "ВПЕРЕД ДО ЗНАНЬ!";
} else {
 	   myTxt.innerHTML = "Мені дуже сумно!";
}
var myImage = document.querySelector('img');
var j = 0;
myImage.onclick = function () {
    j++;
 	   var mySrc =  myImage.getAttribute('src');
 	   if (mySrc === 'images/firefox-icon.png') {
 	       myImage.setAttribute ('src', 'images/firefox-icon_bw.png');
 	   } else {
 	       myImage.setAttribute ('src', 'images/firefox-icon.png');
  	  }
  	  if (j == 3) {
  	      myImage.remove();
   	     document.write("<h1>Вітаю!</h1><h2>Завдання виконано!</h2>");
  	  }
}
myTxt.innerHTML += "<br>" + "  Клацніть мишею по емблемі FireFox!";
