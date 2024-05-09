<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Реакція на подію</title>
    <style>
        h1 {
            color: #ff00ff;
        }
        #outerRect {
            position: absolute;
            left: 50px;
            top: 200px;
            width: 300px;
            height: 100px;
            background-color: blue;
        }
        #innerRect {
            position: relative;
            left: 50px;
            top: 25px;
            width: 200px;
            height: 50px;
            background-color: yellow;
        }
    </style>
</head>
<body id="B" bgcolor="AAAAAA" onclick="rodEl()" style="height: 600px">
    <h1 id="HH" onclick="H_l()">КОЛІР</h1>
    <div id="outerRect" onclick="D_l()">
        <div id="innerRect" style="background-color: yellow;" onclick="D_2(this)"></div>
    </div>

    <script>
        function rodEl() {
            var z = document.all.B.bgColor;
            if (z !== "#777777") {
                z = "#777777";
            } else {
                z = "AAAAAA";
            }
            document.all.B.bgColor = z;
        }

        function D_l() {
            var z = document.all.outerRect.style.backgroundColor;
            if (z !== "red") {
                z = "red";
            } else {
                z = "green";
            }
            document.all.outerRect.style.backgroundColor = z;
            window.event.cancelBubble = true;
        }

        function D_2(thi) {
            var z = thi.style.backgroundColor;
            if (z === "#ff00ff" || z === 'rgb(255, 0, 255)') {
                z = "#00ffff";
            } else {
                z = "#ff00ff";
            }
            thi.style.backgroundColor = z;
            window.event.cancelBubble = true;
        }

        function H_l() {
            var z = document.all.HH.style.color;
            if (z === "#aa00aa" || z === 'rgb(170, 0, 170)') {
                z = "#00ffff";
            } else {
                z = "#aa00aa";
            }
            document.all.HH.style.color = z;
            window.event.cancelBubble = true;
        }
    </script>
</body>
</html>
