<?php

require_once("../classes/AddComments.classes.php");

$text  = $_POST['text'];

$id = $_GET['id'];




$objectAddComments = new AddComments($text);

$objectAddComments->addComment();


?>
