<?php
session_start();
require 'connectDetails.php';

$email = isset($_POST['email1']) ? $_POST['email1']: '';
$password = isset($_POST['password1']) ? $_POST['password1'] : '' ;


if (!$email || !$password) {
	echo 'invalid input';
	return;
}
$hashPassword = md5($password);
$insertQuery = "INSERT INTO `users`(`id`, `Email`, `Password`) VALUES (NULL, '$email', '$hashPassword');";

$result = mysqli_query($conn, $insertQuery) or trigger_error(mysqli_error($conn)." in ".$insertQuery);