<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$message= $_POST['message'];
$to = "palashrambhia2@gmail.com";
$subject = "Mail From Portfolio Website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n  Phone No. = " . $phone . "\r\n Message =" . $message;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>