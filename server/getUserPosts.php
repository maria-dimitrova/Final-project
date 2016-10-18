<?php

 require 'connectDetails.php';
 $_POST = json_decode(file_get_contents('php://input'), true);
 $id = isset($_POST['id']) ? $_POST['id'] : '';
 if (!$id ) {
 	echo 'invalid input';
 	return;
 }
 $query ="SELECT `id`, `Title`, `Description`, `ImagePath`,  `ThImagePath`,`Folder`, `UserId` 
 		FROM `posts` WHERE `UserId` = $id";
 

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