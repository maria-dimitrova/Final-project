<?php

session_start();
require 'connectDetails.php';
$id = $id = isset($_POST['id1']) ? $_POST['id1'] : '';

$query = "DELETE FROM `posts` WHERE `id` = '$id'";

$result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query);

echo $result;