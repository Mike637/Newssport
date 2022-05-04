<?php

require_once("../classes/Reg.classes.php");




$name = $_POST["name"];

$surname = $_POST["surname"];


$email = $_POST["email"];


$pwd  = $_POST["password"];




$objectReg = new Reg($name,$surname,$email,$pwd);

$objectReg->register();

 ?>
