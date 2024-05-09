<!DOCTYPE html>
<html>
<head>
    <title>ВАСЬКА</title>
    <script>
        var flag = true;

        function bm() {
            if (flag) {
                document.images[0].src = 'VaskaB.jpg';
                flag = false;
                document.forms[0].bot.value = "Зменшити";
                document.forms[0].bot.style.background = 'red';
                document.all.bot.style.color = 'black';
            } else {
                document.getElementById("Vas").src = 'VaskaM.jpg';
                document.forms[0].bot.value = "Збільшити";
                document.forms[0].bot.style.background = 'green';
                document.all.bot.style.color = 'white';
                flag = true;
            }
        }
    </script>
</head>
<body>
    <center>
        <h1 id='zag'>ВАСЬКА</h1>
        <p>Варіант, сумісний з Mozilla</p>
        <form name='f1'>
            <input type=button name="bot" onclick=bm() value='Збільшити'>
        </form>
        <p>
            <img src="VaskaM.jpg" id='Vas' onclick=bm()>
        </p>
    </center>
</body>
</html>
