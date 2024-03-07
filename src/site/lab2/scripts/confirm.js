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
