<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class PageNewView extends Dbh {

  public function viewNew()
  {

    $sql = "SELECT * FROM `img` WHERE `img_id`=:img_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["img_id" => $_GET["id"]]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    $data = json_encode($data,JSON_UNESCAPED_UNICODE);



    echo $data;


  }
}

?>
