<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class ShowAccountData extends Dbh
{
  public function accountDataShow()
  {
      session_start();

    $sql = "SELECT * FROM `users` WHERE `users_email`=:users_email";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["users_email" => $_SESSION["email"]]);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($data,JSON_UNESCAPED_UNICODE);



    echo $data;

  }
}

?>
