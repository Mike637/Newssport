<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class DeleteNews extends Dbh
{
  public function NewsDelete()
  {
    $sql = "DELETE FROM `img` WHERE `img_id`=:img_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["img_id" => $_GET["id"]]);

    echo "Новость успешно удалена";
  }
}


 ?>
