<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class FormUpdateNews extends Dbh {

private $title;

private $text;

public function __construct($title,$text)

{
  $this->title = $title;
  $this->text = $text;
}

  public function UpdateNew($title,$text)
  {/*
    $sql = "SELECT * FROM `img` WHERE `img_id`=:img_id";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute(["img_id" => $_GET["id"]]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    var_dump($data["img_id"]);
    */

$update_columns = array();
$arrayKeys = array();
$arrayValues = array();
if (!empty($this->title))
{
  $update_columns[] ="img_title= :img_title";
  $arrayKeys[] ="img_title";
  $arrayValues[] =$this->title;
}
if (!empty($this->text))
{
  $update_columns[] ="img_text= :img_text";
  $arrayKeys[] ="img_text";
  $arrayValues[] =$this->text;
}


if (empty($this->text) && empty($this->title))
{
  echo "Новость осталась без изменений";
  die();
}

$arrayKeysValues = array_combine($arrayKeys,$arrayValues);


    $sql = "UPDATE img SET " .implode(",",$update_columns). " WHERE img_id= :img_id";
    $stmt = $this->connect()->prepare($sql);



    $stmt->execute(["img_id" => $_GET["id"]] + $arrayKeysValues);
    echo "Новость успешно обновлена";

    $stmt = null;

  }
}


 ?>
