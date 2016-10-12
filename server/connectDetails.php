<?php

const DB_USER = 'root';
const DB_PASS = 'root1234';


$conn = mysqli_connect('localhost', DB_USER, DB_PASS);
if(!$conn) {
	echo 'not connected';
}

$db = mysqli_select_db($conn, 'artsite');
if(!$db) {
	echo 'no database selected';
}