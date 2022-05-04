<?php
session_start();
?>





<header>
<div class="LOGO">
  <p id = "logo"><a href="../../Main/templates/main.php">Logo</a></p>
</div>
<div class="main">
  <p id="main"><a href="../../Main/templates/main.php">Главная</a></p>
</div>

<?php
if (!isset($_SESSION["email"]))
{
?>
<div class="reg_login">

<p id="reg"><a href="../../registration_login/templates/registration.php">Регистрация</a></p>
<p id="login"><a href="../../registration_login/templates/login.php">Войти</a></p>

</div>

<?php
}
else {
?>
<div class="account_exit">


<p id="account"><a href="../../AccountPage/templates/accountPage.php">Ваш аккаунт</a></p>
<p id="add_News"><a href="../../Add_News/templates/addNews.php">Добавить новость</a></p>
<p id="exit"><a href="">Выйти</a></p>
</div>
<?php

}
?>



</header>
