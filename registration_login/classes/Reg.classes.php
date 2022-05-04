<?php
require_once("Dbh.classes.php");

class Reg extends Dbh {

public $name;

public $surname;

public $email;

public $pwd;




public function __construct($name,$surname,$email,$pwd)
{
  $this->name = $name;

  $this -> surname = $surname;

  $this->email = $email;

  $this->pwd = $pwd;


}


public function register() {

  $sql = "INSERT INTO users(users_name,users_surname,users_email,users_pwd) VALUES(?,?,?,?)";
$stmt = $this->connect()->prepare($sql);
/*
$hashedPwd = password_hash($this->pwd,PASSWORD_DEFAULT);
*/
try {
  $stmt->execute(array($this->name,$this->surname,$this->email,$this->pwd));
  echo "Регистрация прошла успешно";
}
catch (Exception $e)
 {
echo "Oшибка добавления записи {$e->getMessage()}";
exit();
}

$stmt = null;

/*
echo "{$this->name};{$this->surname};{$this->email};{$this->pwd}";
*/
}



}

 ?>
