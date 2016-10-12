<?php
session_start();
require 'connectDetails.php';

$id = isset($_POST['id1']) ? $_POST['id1'] : '0';
if (!$id ) {
	echo 'invalid input';
	return;
}
$query ="SELECT `id`, `title`, `description`, `picture`, `directory`, `users_id` 
		FROM `posts` WHERE `users_id` ='$id'";

//Finds a row with this email...
$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {
		return;
}
if (mysqli_num_rows($result) == 0){
	return;
}

if (mysqli_num_rows($result) != 0) {

	while($row = mysqli_fetch_assoc($result)){
		$json[] = $row;
	}

	$data = json_encode($json);
	echo $data;
}