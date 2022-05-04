<?php

require_once("Dbh.classes.php");

class AddNews extends Dbh  {

  public $title;

public  $text;

public  $photoname;

public  $phototmp_name;

public function __construct($title,$text,$photoname,$phototmp_name)
{
  $this->title = $title;

  $this->text = $text;

  $this->photoname = $photoname;

  $this->phototmp_name = $phototmp_name;
}

public function addImage()
{
  if (!file_exists("img"))
  {
    mkdir("img");
  }
  move_uploaded_file($this->phototmp_name,"img/{$this->photoname}");
  echo "Новость успешно добавлена";
}

public function newsAdd()
{
  session_start();
  try
   {
  $sql = "INSERT INTO img(img_title,img_text,img_photoname,img_time,img_author) VALUES (?,?,?,?,?)";
  $stmt = $this->connect()->prepare($sql);
  $stmt->execute(array($this->title,$this->text,$this->photoname,time(),$_SESSION["email"]));
  }
catch (Exception $e)
{
  echo "Ошибка {$e->getMessage()}";
  exit();
}
$stmt = null;
$this->addImage();
}

}
 ?>
