<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class ShowAccountNews extends Dbh {

  public function AccountNewsAdd()
  {
    session_start();
    $sql = "SELECT * FROM `img` WHERE `img_author`=:img_author";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["img_author" => $_SESSION["email"]]);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($data,JSON_UNESCAPED_UNICODE);



    echo $data;


  }
}

?>
