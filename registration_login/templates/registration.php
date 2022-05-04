<!DOCTYPE HTML>
<html lang="ru">
  <head>

  <meta charset="utf-8"/>
<?php include_once "../../wrapper/wrapper-ConnectionCss.php"; ?>
<link rel="stylesheet" href="css/registration.css">
  <title>Регистрация</title>
</head>
<body>
<?php include_once "../../wrapper/wrapper-header.php"; ?>
<main>


<form class="" action="index.html" method="post">

<p><label for="name">Введите имя</label>
<input type="text" name="name" value="" class="name"></p>
<!------------------------------------------------->
<p><label for="surname">Введите фамилию</label>
<input type="text" name="surname" class="surname" value=""></p>
<!------------------------------------------------->
<p><label for="email">Введите email</label>
<input type="email" name="email" class="email" value=""></p>
<!------------------------------------------------->
<p><label for="password"> Введите пароль</label>
<input type="password" name="password" class="password" value=""></p>
<!------------------------------------------------->

<p><label for="password_repeat">Повторите Пароль</label>
<input type="password" name="password" class="password_repeat" value=""></p>
<!------------------------------------------------->
<p><input type="button" name="" value="Click" class="button"></p>
<p>Уже есть аккаунт?<a href="login.php">Авторизируйтесь</a><p>
</form>
</main>

  <?php include_once "../../wrapper/wrapper-footer.php"; ?>
<script src="../JSregistration_login/JSregistration.js" type="text/javascript"></script>
</body>
</html>
