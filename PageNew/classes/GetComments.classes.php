<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class GetComments extends Dbh {



  public function commentsGet()
  {

    $sql = "SELECT * FROM `sportcomments` WHERE `sportComments_New_id`=:sportComments_New_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["sportComments_New_id" => $_GET["id"]]);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($data,JSON_UNESCAPED_UNICODE);



    echo $data;


  }
}

?>
