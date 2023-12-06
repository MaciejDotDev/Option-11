<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace with your actual database credentials
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test";

    // Create a database connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Retrieve user details from the form
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $address = $_POST['address'];

    // Insert payment information into the database
$paymentInsertQuery = "INSERT INTO payment (created_at) VALUES (CURRENT_TIMESTAMP)";
if (mysqli_query($conn, $paymentInsertQuery)) {
    // Get the auto-generated paymentId
    $paymentId = mysqli_insert_id($conn);

    // Insert user information into the database with the correct paymentId
    $userInsertQuery = "INSERT INTO user (first_name, last_name, address, created_at, payment_id) VALUES ('$firstName', '$lastName', '$address', CURRENT_TIMESTAMP, '$paymentId')";
    if (mysqli_query($conn, $userInsertQuery)) {
        echo "User details inserted successfully.";
    } else {
        echo "Error inserting user details: " . mysqli_error($conn);
    }
} else {
    echo "Error inserting payment details: " . mysqli_error($conn);
}


    // Close database connection
    mysqli_close($conn);
}
?>
