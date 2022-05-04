<?php

require_once("../classes/AddNews.classes.php");

$title = $_POST["title"];

$text = $_POST["text"];

$photoname = $_FILES["photo"]["name"];

$phototmp_name = $_FILES["photo"]["tmp_name"];

/*
echo "{$title};{$text};{$photoname};{$phototmp_name}";
*/
$objectAddNews = new AddNews($title,$text,$photoname,$phototmp_name);

$objectAddNews->newsAdd();
?>
