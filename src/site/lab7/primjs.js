<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мережа магазинів</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
    <script>
        function changeColor(id) {
            var element = document.getElementById(id);
            if (element.style.color === "black") {
                element.style.color = "white";
                element.style.backgroundColor = "blue";
            } else {
                element.style.color = "black";
                element.style.backgroundColor = "yellow";
            }
        }
    </script>
</head>
<body>
    <h2 id="propertyAccess" onclick="changeColor('propertyAccess')" style="background-color: yellow; color: black;">Доступ до властивостей і методів</h2>
    <p id="allCollection" onclick="changeColor('allCollection')" style="background-color: white; color: red;">Колекція all</p>
    <div id="getElementById" onclick="changeColor('getElementById')" style="background-color: white; color: black;">Метод getElementById ()</div>
</body>
</html>
