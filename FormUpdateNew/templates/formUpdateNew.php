
<?php

session_start();
if (!isset($_SESSION['email']))
{
  header("Location:    ../../registration_login/templates/login.php");
  exit();

}

 ?>
<!DOCTYPE HTML>
<html lang="ru">
  <head>

  <meta charset="utf-8"/>
<?php include_once "../../wrapper/wrapper-ConnectionCss.php"; ?>
<link rel="stylesheet" href="css/formupdatenew.css">
  <title>Форма редактирования статьи</title>
</head>
<body>
<?php include_once "../../wrapper/wrapper-header.php"; ?>

<main>
  <div class="imgContent">

  </div>
  <div class="formContent">


    <form class="form"  >
    <br>
<label for="title">Редактируйте заголовок</label>
<input type="text" name="title" class="title" value="">
<br>
<br>
<label for="text">Редактируйте текст</label>
<textarea name="text" class="text" rows="8" cols="80"></textarea>

<p class="file"><input type="file" name="file">
<label for="photo">Выберете фото</label>
</p>

<button class="button" type="button" name="button">Редактировать</button>
  </form>
</div>
</main>
<?php include_once "../../wrapper/wrapper-footer.php"; ?>

  <script src="../js/jsFormUpdateNew.js"></script>
    <script src="../js/jsGetContentOfNew.js"></script>
</body>
</html>
