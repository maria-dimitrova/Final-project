<?php

session_start();

require 'connectDetails.php';

$email = isset($_POST['email1']) ? $_POST['email1']: '';
$password = isset($_POST['password1']) ? $_POST['password1'] : '';


$query ="SELECT  `id`, `Email`, `Password` FROM `users` WHERE `Email` ='$email'";

$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {
	echo "Could not successfully run query";
}
if (mysqli_num_rows($result) == 0){
	echo $email;
	echo "No rows found";

}
if (mysqli_num_rows($result) != 0) {
	//if email is found comares the password...
	$row = mysqli_fetch_assoc($result);
	//$row["Email"], $row["Pasword"];
	if( $row["Password"] == md5($password) || $row["Password"] == $password) {
		$_SESSION['id'] = $row['id']; 
		$_SESSION['valid'] = true;
		echo $row["id"];
	
	} else {
		echo 'wrong password';
	}
	

}