<?php
// Connect to the database
$db = mysqli_connect('localhost', 'root', '', 'ewd');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the form has been submitted
if (isset($_POST['email']) && isset($_POST['old_password']) && isset($_POST['new_password'])) {
    // Get the form data
    $email = $_POST['email'];
    $old_password = $_POST['old_password'];
    $new_password = $_POST['new_password'];

    // Check if the old password is correct
    $query = "SELECT * FROM users WHERE email='$email' AND password='$old_password'";
    $results = mysqli_query($db, $query);
    if (mysqli_num_rows($results) == 1) {
        // Update the user's password in the database
        $query = "UPDATE users SET password='$new_password' WHERE email='$email'";
        mysqli_query($db, $query);
        echo "Password changed successfully!";
        header('Location: index.html');
    } else {
        echo "Incorrect old password!";
    }
}
?>
