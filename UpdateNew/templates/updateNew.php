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
<link rel="stylesheet" href="css/updatenew.css">
  <title>Редактирование статьи</title>
</head>
<body>
<?php include_once "../../wrapper/wrapper-header.php"; ?>

<main>
  <div class="container">

  </div>

</main>
<?php include_once "../../wrapper/wrapper-footer.php"; ?>

  <script src="../js/jsUpdateNew.js"></script>
</body>
</html>
