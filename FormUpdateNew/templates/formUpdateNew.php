<!DOCTYPE HTML>
<html lang="ru">
  <head>

  <meta charset="utf-8"/>
<?php include_once "../../wrapper/wrapper-ConnectionCss.php"; ?>
<link rel="stylesheet" href="css/formupdatenew.css">
  <title>Главная страница</title>
</head>
<body>
<?php include_once "../../wrapper/wrapper-header.php"; ?>

<main>
  <form class="form"  >
    <br>
<label for="title">Редактируйте заголовок</label>
<input type="text" name="title" class="title" value="">
<br>
<br>
<label for="text">Редактируйте текст</label>
<textarea name="text" class="text" rows="8" cols="80"></textarea>
<br>
<br>
<input type="file" name="" value="http://localhost/Newssport/Add_News/img/1651088886CriRo.jpg" >
<br>
<p class="pictureName"></p>
<br>
<button class="button" type="button" name="button">Click</button>
  </form>

</main>
<?php include_once "../../wrapper/wrapper-footer.php"; ?>

  <script src="../js/jsFormUpdateNew.js"></script>
</body>
</html>
