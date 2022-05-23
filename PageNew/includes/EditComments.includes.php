<?php

require_once("../classes/EditComments.classes.php");


$text = $_POST['text'];

$objectEditComments = new EditComments($text);


$objectEditComments->commentsEdit($text);

 ?>
