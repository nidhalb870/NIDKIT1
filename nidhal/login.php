<html> 
<head> 

</head>
<body>

<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'base_client');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];
$dbname = "base_client";

$rech = mysqli_query($conn, "SELECT * FROM Client WHERE Mail_Clt = '$email' AND Mot_Clt = '$password'");

if (mysqli_num_rows($rech) > 0) {
    $row = $rech->fetch_assoc();
    $_SESSION['Id_Clt'] = $row['Id_Clt'];
    $_SESSION['No_Clt'] = $row['No_Clt'];
    $_SESSION['Pno_Clt'] = $row['Pno_Clt'];
    echo "Login successful!";
} else {
    echo "Error: Login failed";
}

mysqli_close($conn);
?>

</body>
</html>
