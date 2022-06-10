<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class DeleteNews extends Dbh
{

  private function SelectNew()
  {
    $sql = "SELECT * FROM `img` WHERE `img_id`=:img_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["img_id" => $_GET["id"]]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    return $data["img_photoname"];
  }

  private function DeletePicture()
  {
   unlink("../../Add_News/img/".$this->SelectNew());
  }

  public function NewsDelete()
  {
    $this->DeletePicture();
    $sql = "DELETE FROM `img` WHERE `img_id`=:img_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["img_id" => $_GET["id"]]);
    $stmt = null;
    echo "Новость успешно удалена";
  }
}


 ?>
