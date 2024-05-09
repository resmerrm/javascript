<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Переміщення квадрата всередині сірого квадрата</title>
    <style>
        #container {
            width: 500px;
            height: 500px;
            background-color: lightgray;
            position: relative;
        }

        #square {
            width: 50px;
            height: 50px;
            background-color: red;
            position: absolute;
            top: 225px; /* Початкове положення квадрата по середині по вертикалі */
            left: 225px; /* Початкове положення квадрата по середині по горизонталі */
            border-radius: 5px;
            cursor: pointer; /* Змінює курсор на пальцевий, щоб підказати можливість переміщення */
        }
    </style>
</head>
<body>
    <div id="container">
        <div id="square"></div>
    </div>
    <script>
        let flag = false; // Змінна для визначення стану перетягування

        // Функція для переміщення квадрата
        function moveSquare(evt) {
            if (flag) {
                const square = document.getElementById('square');
                square.style.left = evt.clientX - 25 + 'px'; // Встановлення нової позиції квадрата по горизонталі
                square.style.top = evt.clientY - 25 + 'px'; // Встановлення нової позиції квадрата по вертикалі
            }
        }

        // Функція, яка визначає можливість перетягування
        function allowDragging() {
            flag = true;
        }

        // Функція, яка вимикає можливість перетягування
        function disableDragging() {
            flag = false;
        }

        // Зв'язування подій з функціями
        const square = document.getElementById('square');
        square.addEventListener('mousedown', allowDragging);
        document.addEventListener('mouseup', disableDragging);
        document.addEventListener('mousemove', moveSquare);
    </script>
</body>
</html>
