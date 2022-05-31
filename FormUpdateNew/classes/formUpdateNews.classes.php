<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class FormUpdateNews extends Dbh {

  public function UpdateNew()
  {
    $sql = "SELECT * FROM `img` WHERE `img_id`=:img_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["img_id" => $_GET["id"]]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    /*
    $data = json_encode($data,JSON_UNESCAPED_UNICODE);
  */
    var_dump($data["img_id"]);
  }
}

 ?>
