<?php

require_once("Dbh.classes.php");

class Log extends Dbh {

  public $email;

  public $pwd;




  public function __construct($email,$pwd)
  {


    $this->email = $email;

    $this->pwd = $pwd;

  }


  public function login() {
/*
$hashedPwd = password_hash($this->pwd,PASSWORD_DEFAULT);
*/
try {
  /*
  $sql = "SELECT * FROM users WHERE `users_email`=:? AND `users_pwd`=:?";

  $sql = "SELECT * FROM users WHERE users_email=:?"
  $sql="SELECT `id` FROM registration WHERE `email`=:email and `password`=:pass";
  $query->execute(["email" => $email, "pass" => $pass]);
  */

  $sql = "SELECT * FROM users WHERE `users_email`=:users_email AND `users_pwd`=:users_pwd";
$stmt = $this->connect()->prepare($sql);
/*
$stmt->execute(array($this->email,$this->pwd));
*/

$stmt->execute(["users_email" => $this->email, "users_pwd" => $this->pwd]);



if ($stmt->rowCount() == 0)
{
  echo "Такого пользователя не существует";
  exit();
}

session_start();
$_SESSION["email"] = $this->email;
$_SESSION["pwd"] = $this->pwd;
$stmt = null;
echo "Вы успешно вошли в систему";
} catch (\Exception $e) {
echo "Ошибка авторизации {$e->getMessage()}";
exit();
}
$stmt = null;
  }


}




 ?>
