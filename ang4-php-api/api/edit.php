<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $data = json_decode(file_get_contents("php://input"));
	print_r($data);
 	$con = mysqli_connect('localhost','root','root','angular_db');
 	$sql = "UPDATE users_info SET user_name = '$data->user_name' , user_age = $data->user_age WHERE user_id = $data->user_id ";
    $result = mysqli_query($con,$sql);
?>