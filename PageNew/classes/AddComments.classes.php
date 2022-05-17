<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class AddComments extends Dbh {

public $text;


  public function __construct($text)
  {
$this->text = $text;
  }

  public function addComment()
  {
    session_start();

    $sql = "INSERT INTO sportcomments(sportComment_author,sportComments_text,sportComments_New_id) VALUES(?,?,?)";
  $stmt = $this->connect()->prepare($sql);

  try {
    $stmt->execute(array($_SESSION["email"],$this->text,$_GET['id']));
    echo "Успех";
  }
  catch (Exception $e)
   {
  echo "Oшибка добавления  {$e->getMessage()}";
  exit();
  }

  $stmt = null;
  }
}

?>
