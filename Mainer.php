<?php

$Mail = $_POST['Email'];
$Phone = $_POST['Phone'];
$Password = $_POST['Password'];
$database = mysqli_connect("localhost", "root", "","main_bd");
if (mysqli_connect_error()){
    echo "connection error--";
}

mysqli_query($database, "INSERT INTO `data`(`email`, `password`) VALUES ('".$Mail."', '".$Password."')");


