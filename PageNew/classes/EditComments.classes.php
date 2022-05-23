<?php


require_once("../../registration_login/classes/Dbh.classes.php");

class EditComments extends Dbh
{

public $text;

public function __construct($text)
{

  $this->text = $text;
}




  public function commentsEdit($text)
  {


    $sql = "UPDATE  `sportcomments` SET `sportComments_text`=:sportComments_text WHERE `sportComments_id`=:sportComments_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["sportComments_text" => $text,"sportComments_id" => $_GET["id"]]);


    echo "Комментарий успешно редактирован";
  }
}

 ?>
