<?php
session_start();
?>
<script type="text/javascript">
var sessionEmail = "<?php echo $_SESSION['email'] ?>";

</script>
<!DOCTYPE HTML>
<html lang="ru">
  <head>

  <meta charset="utf-8"/>
<?php include_once "../../wrapper/wrapper-ConnectionCss.php"; ?>
<link rel="stylesheet" href="css/pagenew.css">
<title>Подробнее</title>
</head>
<body>
<?php include_once "../../wrapper/wrapper-header.php"; ?>
<main>
<div class="container">

</div>



<h1>Добавить комментарий</h1>
   <form  action="index.html" method="post">
<textarea class="addComment" name="commentText" rows="8" cols="80" placeholder = "Добавить комментарий...."></textarea>
   </form>
<div class="comments">

</div>

  </main>

<?php include_once "../../wrapper/wrapper-footer.php"; ?>

<script type="text/javascript" src="../JSpageNew/JSpageNew.js"></script>
<script type="text/javascript" src="../JSpageNew/addComment.js"></script>
</body>
</html>
