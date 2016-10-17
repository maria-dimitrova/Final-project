<?php

require 'connectDetails.php';


$_POST = json_decode(file_get_contents('php://input'), true);
$id = isset($_POST['id']) ? $_POST['id'] : '';
$likes = isset($_POST['likes']) ? $_POST['likes'] : '';
if (!$id ) {
	return false;
}
if(!$likes){
	return false;
}
echo $id, $likes;
$query ="UPDATE `posts` SET `Likes` = $likes WHERE `posts`.`id` = $id";


$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {
	
	return false;
} else {
	echo $result;
}