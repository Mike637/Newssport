<?php


require_once("../../registration_login/classes/Dbh.classes.php");

class DeleteComments extends Dbh
{
  public function commentsDelete()
  {
    

    $sql = "DELETE  FROM `sportcomments` WHERE `sportComments_id`=:sportComments_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["sportComments_id" => $_GET["id"]]);
    /*
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($data,JSON_UNESCAPED_UNICODE);
*/


    echo "Комментарий успешно удален";
  }
}

 ?>
