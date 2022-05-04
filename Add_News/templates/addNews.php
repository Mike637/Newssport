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
 <link rel="stylesheet" href="css/addNews.css">
  <title>Добавление новости</title>

<body>
  <?php include_once "../../wrapper/wrapper-header.php"; ?>
  <main>
  
  <form class="" action="index.html" method="post">
<p><label for="title">Добавить заголовок</label>
<input type="text" name="title"  class="title"></p>

<p><label for="text">Введите текст</label>
<textarea name="text" class="text" rows="8" cols="80"></textarea></p>


<p class="file"><input type="file" name="photo" class="photo" accept="image/*">
<label for="photo">Добавить фото</label>
</p>

<p><input type="button" name="button" class="button" value="Click"></p>
  </form>
</main>
  <?php include_once "../../wrapper/wrapper-footer.php"; ?>
  <script src="../JSaddNews/JSaddNews.js"></script>

</body>
</html>
