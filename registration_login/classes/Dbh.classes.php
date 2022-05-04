<?php

class Dbh {

public $username = "root";

public $password = "";

public $dbname = "testing";

public $host = "localhost";




public function connect()
{
try {
  $dsn = "mysql:host={$this->host};dbname={$this->dbname}";
  return new PDO($dsn,$this->username,$this->password);
}
 catch (PDOException $e) {
echo "Ошибка подключения к базе данных {$e->getMessage()}";
die();
}


}

}


 ?>
