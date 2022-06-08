<?php

require_once("../../registration_login/classes/Dbh.classes.php");

class FormUpdateNews extends Dbh {

private $title;

private $text;

private  $photoname;

private  $phototmp_name;

public function __construct($title,$text,$photoname,$phototmp_name)

{
  $this->title = $title;
  $this->text = $text;
  $this->photoname = $photoname;
  $this->phototmp_name = $phototmp_name;
}

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

private function AddNewPicture()
{


move_uploaded_file($this->phototmp_name,"../../Add_News/img/".time().$this->photoname);


}



  public function UpdateNew()
  {

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
if (!empty($this->photoname))
{
  $this->DeletePicture();
  $update_columns[] ="img_photoname= :img_photoname";
  $arrayKeys[] = "img_photoname";
  $arrayValues[] = time().$this->photoname;
}


if (empty($this->text) && empty($this->title) && empty($this->photoname))
{
  echo "Новость осталась без изменений";
  die();
}

$arrayKeysValues = array_combine($arrayKeys,$arrayValues);


    $sql = "UPDATE img SET " .implode(",",$update_columns). " WHERE img_id= :img_id";
    $stmt = $this->connect()->prepare($sql);



    $stmt->execute(["img_id" => $_GET["id"]] + $arrayKeysValues);
    if (!empty($this->phototmp_name))
    {
        $this->AddNewPicture();
    }

    $stmt = null;
    echo "Новость успешно обновлена";
  }
}


 ?>
