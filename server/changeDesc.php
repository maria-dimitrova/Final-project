<?php

require 'connectDetails.php';


$_POST = json_decode(file_get_contents('php://input'), true);
$id = isset($_POST['id']) ? $_POST['id'] : '';
$desc = isset($_POST['desc']) ? $_POST['desc'] : '';
if (!$id ) {
	return false;
}
if(!$desc){
	return false;
}
echo $id, $desc;
$query ="UPDATE `posts` SET `Description` = $desc WHERE `posts`.`id` = $id";


$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {

	return false;
} else {
	echo $result;
}