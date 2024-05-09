<!DOCTYPE html>
<html>
<head>
  <title>Працюючий годинник</title>
  <script language="JavaScript">
        <!--
        var timeStr, dateStr;
        function clock() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            timeStr = "" + hours;
            timeStr += ((minutes < 10) ? ":0" : ":") + minutes;
            timeStr += ((seconds < 10) ? ":0" : ":") + seconds;
            document.clock.time.value = timeStr;

            var date = now.getDate();
            var month = now.getMonth() + 1;
            var year = now.getFullYear();
            dateStr = "" + month;
            dateStr += ((date < 10) ? "/0" : "/") + date;
            dateStr += "/" + year;
            document.clock.date.value = dateStr;

            Timer = setTimeout("clock()", 1000);
        }
        // -->
    </script>
</head>
<body onLoad="clock()">
<form name="clock">
  Час:
  <input type="text" name="time" size="8" value=""><br>
  Дата:
  <input type="text" name="date" size="8" value="">
</form>
</body>
</html>
