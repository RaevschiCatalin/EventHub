<?php

$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'ewd';

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get data from form submission
$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare and bind
$sql = "INSERT INTO contact (first_name, last_name, company, phone, email, message) VALUES ('$firstName', '$lastName', '$company', '$phone', '$email', '$message')";
if ($conn->query($sql) === TRUE) {
 echo "New record created successfully" . "<br>";
 header('Location: done.html');
} else {
 echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

?>
