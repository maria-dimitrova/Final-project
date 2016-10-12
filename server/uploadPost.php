<?php
 
 require 'connectDetails.php';
 /* 
  if(!empty($_FILES['image'])){
 	$ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
 	$image = time().'.'.$ext;
 	move_uploaded_file($_FILES["image"]["tmp_name"], 'images/'.$image);
 	echo "Image uploaded successfully as ".$image;
 }else{
 	echo "Image Is Empty";
 } */
 
 $title = isset($_POST['title']) ? $_POST['title']: 'title';
 $description = isset($_POST['description']) ? $_POST['description'] : 'description';
 $directory = isset($_POST['selectDir']) ? $_POST['selectDir'] : 'common';
 $rating = isset($_POST['rating']) ? $_POST['rating'] : '';
 $user_id = isset($_POST['id']) ? $_POST['id']: '1';
 
  $gallery = "../uploads/";
 
  foreach($_FILES as $index => $file) {
  	 
  	 $name = $file["name"];
  	 $path = $gallery.$name;
  	 
  	 move_uploaded_file($file['tmp_name'], $path);
  	 
  	 $query = "INSERT INTO `posts` (`id`, `Title`,`ImagePath`, `Description`,`Rating`, `Folder`,  `UserId`)
  	 VALUES (NULL, '$title', '$path','$description', '$rating','$directory', '$user_id');";
  	  
  	 if ( mysqli_query($conn, $query)) {
  	 	echo "New records created successfully";
  	 } else {
  	 	echo "Error: ". mysqli_error($conn);
  	 };
  	
  }
 
 /*  $files = isset($_FILES['image']) ? $_FILES['image'] : '';
  
  for ($i = 0; $i < count($files); $i++) {
 		echo $files[$i];
  } */
 /*  for ($i = 0; $i < count($files); $i++) {
	  	
	 $image = isset($_FILES['image'][0]) ? $_FILES['image'] : '';
	 $temp_name = $_FILES["image"]["tmp_name"][0];
	 $name = $_FILES["image"]["name"][0];
	 move_uploaded_file($_FILES['image']['tmp_name'][0], $gallery.$name); 
	 
	 $path = $gallery.$name;
 
	 $query = "INSERT INTO `posts` (`id`, `Title`,`ImagePath`, `Description`,`Rating`, `Folder`,  `UserId`) 
	 VALUES (NULL, '$title', '$path','$description', '$rating','$directory', '$user_id');";
  	
	 if ( mysqli_query($conn, $query)) {
	 	echo "New records created successfully";
	 } else {
	 	echo "Error: ". mysqli_error($conn);
	 };
  }
 /* if (!$title || !$directory || !$user_id) {
 	return "Missing elements";
 } */

 /* echo $title, $directory , $user_id, $path;
  */
 
 /* $result = mysqli_query($conn, $query) or trigger_error(mysqli_error($conn)." in ".$query); */
 

 
/* echo $result; */ 