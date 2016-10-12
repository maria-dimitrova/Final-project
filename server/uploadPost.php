<?php
session_start();
require 'connectDetails.php';

$gallery = "../uploads/";
$image = isset($_FILES['fileToUpload']) ? $_FILES['fileToUpload'] : '';
$temp_name = $_FILES["fileToUpload"]["tmp_name"];
$name = $_FILES["fileToUpload"]["name"];

$title = isset($_POST['fileName']) ? $_POST['fileName']: '';
$description = isset($_POST['fileDescription']) ? $_POST['fileDescription'] : '';
$directory = isset($_POST['selectDir']) ? $_POST['selectDir'] : '';
$user_id = isset($_POST['user_id1']) ? $_POST['user_id1']: '';

if (!$title || !$directory || !$user_id) {
	return "Missing elements";
}
echo $title, $directory , $user_id;

move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $gallery.$name);

$path = "assets/uploads/".$name;
if (!$path) {
	return "No image.";
}
$query = "INSERT INTO `posts` (`id`, `title`, `description`, `picture`,`directory`, `users_id`) 
VALUES (NULL, '$title', '$description', '$path','$directory', '$user_id');";

$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);