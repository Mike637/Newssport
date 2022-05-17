<?php

require_once("../classes/AddComments.classes.php");

$text  = $_POST['text'];


$objectAddComments = new AddComments($text);

$objectAddComments->addComment();


?>
