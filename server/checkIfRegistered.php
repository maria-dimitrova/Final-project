<?php
session_start();

require 'connectDetails.php';

$email = isset($_POST['email1']) ? $_POST['email1']: '';
$password = isset($_POST['password1']) ? $_POST['password1'] : '';

if (!$email || !$password) {
	echo "Invalid input";
	return;
}

$query ="SELECT  `id`, `Email`, `Password` FROM `users` WHERE `Email` ='$email'";

//Finds a row with this email...
$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {
	echo "Could not successfully run query";
}
if (mysqli_num_rows($result) == 0){
	echo '';

}

if (mysqli_num_rows($result) != 0) {
	echo 'true';
}