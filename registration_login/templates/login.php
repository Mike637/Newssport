<!DOCTYPE HTML>
<html lang="ru">
  <head>

  <meta charset="utf-8"/>
<?php include_once "../../wrapper/wrapper-ConnectionCss.php"; ?>
<link rel="stylesheet" href="css/registration.css">
  <title>Главная страница</title>
</head>
<body>
<?php include_once "../../wrapper/wrapper-header.php"; ?>
<main>


<form class="" action="" method="post">



<p><label for="email">Введите email</label>
<input type="email" name="email" class="email" value=""></p>
<!------------------------------------------------->
<p><label for="password"> Введите пароль</label>
<input type="password" name="password" class="password" value=""></p>
<!------------------------------------------------->


<p><input type="button" name="" value="Login" class="button"></p>
<p>Нет аккаунта?<a href="registration.php">Зарегестрируйтесь</a></p>
</form>
</main>


<?php include_once "../../wrapper/wrapper-footer.php"; ?>
<script src="../JSregistration_login/JSlogin.js" type="text/javascript"></script>
</body>
</html>
