<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $data = json_decode(file_get_contents("php://input"));
    print_r($data);
 	$con = mysqli_connect('localhost','root','root','angular_db');
 	$sql = "INSERT into users_info(user_name,user_age) VALUES ('$data->name','$data->age')";
    $result = mysqli_query($con,$sql);
?>