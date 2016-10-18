<?php
 
 require 'connectDetails.php';
 
 $title = isset($_POST['title']) ? $_POST['title']: 'title';
 $description = isset($_POST['description']) ? $_POST['description'] : 'description';
 $directory = isset($_POST['selectDir']) ? $_POST['selectDir'] : 'common';
 $rating = isset($_POST['rating']) ? $_POST['rating'] : '';
 $user_id = isset($_POST['id']) ? $_POST['id']: '1';
 
  $gallery = "/Final-project-maria-markova-last/uploads/";
  $gallery_small = "/Final-project-maria-markova-last/uploads/small/";
  $gallery1 = "../uploads/";
  $gallery_small1 = "../uploads/small/";
 
  foreach($_FILES as $index => $file) {
  	 
  	 $name = $file["name"];
  	 $path = $gallery.$name;
  	 $path_small = $gallery_small.$name;
  	 echo ($file['error']);
  if( move_uploaded_file($file['tmp_name'], $gallery1.$name)) {
 		echo "successfull";
 	} else {
 		echo "failed";
 	}
   	 print_r($file);
  	 $size_info = getimagesize($gallery1.$name);
  	 if($size_info) {
	  	 $width = $size_info[0];
	  	 $height = $size_info[1];
	  	 echo $width, $height;
	  	 $width_small = 200;
	  	 $height_small = $height/($width/200);
	  	 $thumb_new = imagecreatetruecolor($width_small,$height_small);
  	 }
  	 switch(strtolower($file['type']))
  	 {
  	 	case 'image/jpeg':
  	 		$image = imagecreatefromjpeg($gallery1.$name);
  	 		echo 'image';
  	 		break;
  	 	case 'image/png':
  	 		$image = imagecreatefrompng($gallery1.$name);
  	 		break;
  	 	case 'image/gif':
  	 		$image = imagecreatefromgif($gallery1.$name);
  	 		break;
  	 	default:
  	 		echo ('Unsupported type: '.$file['type']);
  	 }
  	if ($image) {
  	 	
  	 imagecopyresized($thumb_new,$image,0,0,0,0,$width_small,$height_small,$width,$height);
  	 switch(strtolower($file['type'])){
  	 	case 'jpg' || 'jpeg':
  	 		imagejpeg($thumb_new,$gallery_small1.$name,100);
  	 		break;
  	 	case 'png':
  	 		imagepng($thumb_new,$gallery_small1.$name,100);
  	 		break;
  	 
  	 	case 'gif':
  	 		imagegif($thumb_nre,$gallery_small1.$name,100);
  	 		break;
  	 	default:
  	 		$path_small = "../Final-project-maria-markova-last/uploads/small/noimage.jpg";
  	 		echo  ('Unsupported type: '.$file['type']);
  	 }
  	 
  	  
  	 }
   	/*  $ffmpeg = 'C:\Users\MM\Desktop\ffmpeg-3.1.4-win64-static\bin\ffmpeg';
   	 $video = 'C:\xampp\htdocs\Final-Project\Final-project\uploads\\'.$name;
   	 $thumbImage = 'C:\xampp\htdocs\Final-Project\Final-project\uploads\small\\'.$name;
   	 
   	 $second             = 10;
   	 $thumbSize = "200x150";
   	  echo $cmd = "$ffmpeg -i $video -an -ss $second  -s $thumbSize $thumbImage 2>&1";
   	 
   	/*  shell_exec($cmd, $output, $retval);
   	  */
   	 /*  $output = exec($cmd);
   	  echo $output;
   	 if ($output)
   	 {
   	 	echo 'Thumbnail generated successfully';
   	 	
   	 }
   	 else
   	 {
   	 	echo 'error in generating video thumbnail'; */
   	 /* 	echo $output; }*/
   	 
   	  
  	 $query = "INSERT INTO `posts` (`id`, `Title`,`ImagePath`, `ThImagePath`, `Description`,`Rating`, `Folder`,  `UserId`)
  	 VALUES (NULL, '$title', '$path', '$path_small','$description', '$rating','$directory', '$user_id');";
  	  
  	 if ( mysqli_query($conn, $query)) {
  	 	echo "New records created successfully";
  	 } else {
  	 	echo "Error: ". mysqli_error($conn);
  	 }; 
  	
  }
 
 /* 
  if(!empty($_FILES['image'])){
 	$ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
 	$image = time().'.'.$ext;
 	move_uploaded_file($_FILES["image"]["tmp_name"], 'images/'.$image);
 	echo "Image uploaded successfully as ".$image;
 }else{
 	echo "Image Is Empty";
 } */
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
  	 
  	 /* create a new, "virtual" image */
  	/*  $virtual_image = imagecreatetruecolor($desired_width, $desired_height);*/
  	 
  	  /*copy source image at a resized size */
  	/*  imagecopyresampled($virtual_image, $source_image, 0, 0, 0, 0, $desired_width, $desired_height, $width, $height);
  	 
  	 
  	 imagejpeg($virtual_image, $dest);

  	 switch(strtolower($file['type']))
  	 {
  	 	case 'image/jpeg':
  	 		$image = imagecreatefromjpeg($file['tmp_name']);
  	 		break;
  	 	case 'image/png':
  	 		$image = imagecreatefrompng($file['tmp_name']);
  	 		break;
  	 	case 'image/gif':
  	 		$image = imagecreatefromgif($file['tmp_name']);
  	 		break;
  	 	default:
  	 		exit('Unsupported type: '.$file['type']);
  	 }
  	 return $file;  */
  	 