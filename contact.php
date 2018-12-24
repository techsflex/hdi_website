<?php

require_once "PHPMailer/PHPMailerAutoload.php";

$name  = $_POST['name'];
$email = $_POST['email'];  	
$phone = $_POST['phone'];
$body  = $_POST['message'];

$mail = new PHPMailer;

//Enable SMTP debugging. 
$mail->SMTPDebug = 0;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.hostinger.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "demo@techsflex.net";                 
$mail->Password = "im22kool";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;                                   

$mail->From = "demo@techsflex.net";
$mail->FromName = $name;

$mail->addAddress("demo@techsflex.net", "HDI Customer Care");

$mail->isHTML(true);

$mail->Subject = "HDI Contact Form: " . $name;
$mail->Body = "<h2>" . $body . "</h2>";
$mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send()) {
    $message =  "Mailer Error: " . $mail->ErrorInfo;
	$responseArray = array('type' => 'danger', 'message' => $message);
} 
else {
    $message = "Message has been sent successfully";
	$responseArray = array('type' => 'success', 'message' => $message);
}

$data = json_encode($responseArray);
echo $data;
?>