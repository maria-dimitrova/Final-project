<?php

require 'connectDetails.php';


$_POST = json_decode(file_get_contents('php://input'), true);
$id = isset($_POST['id']) ? $_POST['id'] : '';

if (!$id ) {
	return false;
}

$query ="DELETE FROM `posts` WHERE `posts`.`id` = $id";


$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);
echo $result;