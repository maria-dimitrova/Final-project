<?php
require 'connectDetails.php';

$_POST = json_decode(file_get_contents('php://input'), true);
$id = isset($_POST['id']) ? $_POST['id'] : '';
$rating = isset($_POST['rating']) ? $_POST['rating'] : '';
if (!$id ) {
	echo 'invalid id';
	return;
}
if(!$rating && $rating === '0'){
	echo 'invalid rating input';
	return;
}
echo $id, $rating;
 $query ="UPDATE `posts` SET `Rating` = $rating WHERE `posts`.`id` = $id";


$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

if (!$result) {
	echo "Problem 1";
	return;
} else {
	echo $result;
}

