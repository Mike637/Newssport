<?php

require_once("../classes/Log.classes.php");



$email = $_POST["email"];


$pwd  = $_POST["password"];



$objectLog = new Log($email,$pwd);


$objectLog ->login();

 ?>
