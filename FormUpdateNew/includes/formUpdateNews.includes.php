<?php
/*
require_once("../classes/formUpdateNews.classes.php");

$objectFormUpdateNews = new FormUpdateNews;


$objectFormUpdateNews->UpdateNew();
*/

$update_columns = array();

$update_columns[] ="title= :title";
$update_columns[] ="author= :author";
$update_columns_string = implode(',',$update_columns);
print_r($update_columns);


print_r($update_columns_string);
$sql = "UPDATE books SET " .implode(", ", $update_columns) . " WHERE id=:id";


echo $sql;
/*
echo $_GET["id"];

echo "Hello world";
/*
$title = $_POST["title"];

$text = $_POST["text"];

$photoname = $_FILES["photo"]["name"];

$phototmp_name = $_FILES["photo"]["tmp_name"];

$arrayPost = array();

$arrayPostCheck = array();

$arrayPost["title"] = $title;

$arrayPost["text"] = $text;

$arrayPost["photoname"] = $photoname;


$arrayPost["phototmp_name"]  = $phototmp_name;


if (is_array($arrayPost)) {
foreach ($arrayPost as $key => $value) {
  switch (!empty($arrayPost[$key])) {
    case true:
      $arrayPostCheck[$key] =$value;
      break;
  }
}
}




var_dump($arrayPostCheck);
var_dump($arrayPost);
*/

 ?>
