<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Скрипт SELECT</title>
</head>
<body>
    <h2>Підбір відтінків кольору</h2>
    <p>У першому полі потрібно ввести шістнадцятковий код кольору. <br>Наприклад, червоний колір має код FF0000.<br> Зі списку в другому полі вибирається для порівняння один з основних кольорів (червоний, зелений, синій)</p>
    <p>Введіть код кольору <input type="text" name="Kod"> </p>
    <p>Виберіть колір <select name="Gor">
        <option value="red">Червоний</option>
        <option value="yellow">Жовтий</option>
        <option value="maroon">Каштановий</option>
        <option value="green">Зелений</option>
        <option value="blue">Синій</option>
    </select></p>
    <button onclick="select_()">Виконати</button>
    <p><b id="alfa"></b><br><b id="beta"></b></p>

    <script>
        function select_() {
            var a = document.getElementsByName("Kod")[0].value; // Отримання значення поля з кодом кольору
            var b = document.getElementsByName("Gor")[0].selectedIndex; // Отримання індексу вибраного елемента списку
            var c = document.getElementsByName("Gor")[0].options[b].text; // Отримання тексту вибраного елемента списку
            var d = document.getElementsByName("Gor")[0].options[b].value; // Отримання значення вибраного елемента списку

            // Формування HTML-рядка для виведення коду кольору
            var e = "<font size='7' color='" + a + "'>" + a + "</font>";
            document.getElementById("alfa").innerHTML = e; // Виведення коду кольору на екран

            // Формування HTML-рядка для виведення назви кольору
            var f = "<font size='7' color='" + d + "'>" + c + "</font>";
            document.getElementById("beta").innerHTML = f; // Виведення назви кольору на екран
        }
    </script>
</body>
</html>
