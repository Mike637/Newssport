<?php

$title = $_POST["title"];

$text = $_POST["text"];

$photoname = $_FILES["photo"]["name"];

$phototmp_name = $_FILES["photo"]["tmp_name"];

require_once("../classes/formUpdateNews.classes.php");

$objectFormUpdateNews = new FormUpdateNews($title,$text,$photoname,$phototmp_name);


$objectFormUpdateNews->UpdateNew();



 ?>
