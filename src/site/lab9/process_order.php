<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Підтвердження замовлення</title>
</head>
<body>
    <h2>Ваше замовлення прийнято</h2>
    <?php
    $product = $_POST['product'];
    $material = $_POST['material'];
    $quantity = $_POST['quantity'];
    ?>
    <p>Замовлено виріб: <?php echo $product; ?></p>
    <p>Матеріал: <?php echo $material; ?></p>
    <p>Кількість: <?php echo $quantity; ?></p>
    <p><a href="order.html">Повернутися назад</a></p>
</body>
</html>
