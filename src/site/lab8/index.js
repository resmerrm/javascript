<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>П'ять подій з мишкою</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        #clickMe {
            font-size: 24pt;
            background-color: lightblue;
            width: max-content;
            padding: 10px;
            margin: 20px;
        }
        #holdMe {
            background-color: yellow;
            width: max-content;
            padding: 10px;
            margin: 20px;
        }
        #slowMove {
            background-color: blue;
            color: white;
            width: max-content;
            padding: 10px;
            margin: 20px;
        }
    </style>
    <script>
        function changeSizeAndColor() {
            var element = document.getElementById("clickMe");
            if (element.style.fontSize === "24pt") {
                element.style.fontSize = "48pt";
                element.style.color = "white";
                element.style.backgroundColor = "blue";
            } else {
                element.style.fontSize = "24pt";
                element.style.color = "black";
                element.style.backgroundColor = "lightblue";
            }
        }

        function changeBackground(color) {
            var element = document.getElementById("holdMe");
            element.style.backgroundColor = color;
        }

        function changeColorOnHover() {
            var element = document.getElementById("slowMove");
            element.addEventListener("mouseover", function() {
                element.style.backgroundColor = "red";
            });
            element.addEventListener("mouseout", function() {
                element.style.backgroundColor = "lightblue";
            });
        }
    </script>
</head>
<body>
    <h1>П'ять подій з мишкою</h1>
    <p id="clickMe" onclick="changeSizeAndColor()">Клацніть на мене мишкою</p>
    <p id="holdMe" onmousedown="changeBackground('green')" onmouseup="changeBackground('yellow')">На цьому тексті натисніть, потримайте і відпустіть ліву кнопку мишки</p>
    <p id="slowMove" onmousemove="changeColorOnHover()">Повільно проведіть курсором мишки по цій написи</p>
</body>
</html>
