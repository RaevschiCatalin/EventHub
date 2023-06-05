<?php
// Connect to the database
$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'ewd';
$conn = new mysqli($db_host, $db_user, $db_password, $db_name);
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Get the email and password from the form
$email = $_POST['email'];
$password = $_POST['password'];

// Query the database for a user with the given email
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

// Check if a user was found
if ($result->num_rows > 0) {
    // Get the user's data
    $user = $result->fetch_assoc();
    
    // Verify the password
    if (password_verify($password, $user['password'])) {
        // Password is correct, start a session for the user
        session_start();
        $_SESSION['user_id'] = $user['id'];
        
        // Redirect to a protected page
        header('Location: index.html');
    } else {
        // Password is incorrect, display an error message
        echo "Invalid email or password";
    }
} else {
    // No user was found with the given email, display an error message
    echo "Invalid email or password";
}

$conn->close();
