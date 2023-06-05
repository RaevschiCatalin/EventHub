<?php
echo 'Signup script called';
$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'ewd';

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$password')";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully" . "<br>";
  echo "<a href='./login.html'>Go to login page</a>";
  header('Location: inter.html');
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
