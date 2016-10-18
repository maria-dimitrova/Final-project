<?php

require 'connectDetails.php';

$query ="SELECT * FROM `posts` ORDER BY `Rating` DESC";
$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);
if (!$result) {
	echo "Problem 1";
	return;
}
if (mysqli_num_rows($result) == 0){
	echo "Problem 2";
	return;
}
if (mysqli_num_rows($result) != 0) {

	while($row = mysqli_fetch_assoc($result)){
		$json[] = $row;
	}
	$data = json_encode($json);
	echo $data;
}