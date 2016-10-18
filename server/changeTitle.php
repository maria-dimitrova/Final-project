<?php

require 'connectDetails.php';


$_POST = json_decode(file_get_contents('php://input'), true);
$id = isset($_POST['id']) ? $_POST['id'] : '';
$title = isset($_POST['title']) ? $_POST['title'] : '';
if (!$id ) {
	return false;
}
if(!$title){
	return false;
}
echo $id, $title;
$query ="UPDATE `posts` SET `Title` = $title WHERE `posts`.`id` = $id";


$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {

	return false;
} else {
	echo $result;
}