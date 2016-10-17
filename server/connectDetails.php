<?php

const DB_USER = 'root';
const DB_PASS = '';


$conn = mysqli_connect('localhost', DB_USER, DB_PASS);
if(!$conn) {
	echo 'not connected';
}

$db = mysqli_select_db($conn, 'finalproject');
if(!$db) {
	echo 'no database selected';
}