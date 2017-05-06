<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

$errors = array();
$data = array();
if (empty($_POST['comments']))
$errors['comments'] = 'Feedback is required.';
if ( ! empty($errors)) {
  $data['success'] = false;
  $data['errors'] = $errors;
  $data['messageError'] = 'Please check the fields in red';
} else {
  $data['success'] = true;
  $data['messageSuccess'] = 'Thanks for providing valuable feedback to the VIVA team.';
  $email_to = "pareshb30@gmail.com";
  $email_subject = "Feedback from VIVA webapp";
  $name = $_POST['name'];
  $email_from = $_POST['email'];
  $message = $_POST['message']; // required
  $email_message = "Form details below.nn";
  $email_message .= "Name: ".$name."n";
  $email_message .= "Email: ".$email_from."n";
  $email_message .= "Message: ".$message."n";
  $headers = 'From: '.$email_from."rn".
  'Reply-To: '.$email_from."rn" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);
}
// return all our data to an AJAX call
echo json_encode($data);
?>