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

try {


  $sql = "SELECT * FROM users WHERE `users_email`=:users_email";
$stmt = $this->connect()->prepare($sql);


$stmt->execute(["users_email" => $this->email]);



if ($stmt->rowCount() == 0)
{
  $stmt = null;
  echo "Такого пользователя не существует";
  exit();
}

$note = $stmt->fetchAll();
$users_pwd = $note[0]['users_pwd'];
/*
$checkpwd = password_verify($this->pwd,$users_pwd);
*/
if ($this->pwd != $users_pwd)
{


print_r("Неверный пароль");
$stmt = null;
exit();
}

session_start();
$_SESSION["email"] = $this->email;
$stmt = null;
echo "Вы успешно вошли в систему";

}
catch (\Exception $e) {
echo "Ошибка авторизации {$e->getMessage()}";
exit();
}
$stmt = null;

  }


}




 ?>
