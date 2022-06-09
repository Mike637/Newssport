<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class ShowNews extends Dbh {

  public function NewsAdd()
  {
    $sql = "SELECT * FROM `img` ORDER BY `img_time` DESC";
    $stmt = $this->connect()->query($sql);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($data,JSON_UNESCAPED_UNICODE);
    /*
JSON_UNESCAPED_UNICODE
*/
    echo $data;
  }
}

?>
