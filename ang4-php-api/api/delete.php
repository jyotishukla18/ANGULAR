<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $data = json_decode(file_get_contents("php://input"));
 	$con = mysqli_connect('localhost','root','root','angular_db');
 	$sql = "DELETE from users_info where user_id = '$data->id' ";
    $result = mysqli_query($con,$sql);
?>