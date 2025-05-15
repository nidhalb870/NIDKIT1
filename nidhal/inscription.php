<?php
$conn = mysqli_connect('localhost', 'root', '', 'base_client');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$age = $_POST['age'];
$wilaya = $_POST['wilaya'];
$tel = $_POST['telephone'];
$email = $_POST['email'];
$adr = $_POST['address'];
$password = $_POST['password'];
$sex = $_POST['sex'];

$ajout = mysqli_query($conn, "INSERT INTO Client (No_Clt, Pno_Clt, Age_Clt, Wi_Clt, Tel_Clt, Mail_Clt, Adr_Clt, Mot_Clt, Sexe_Clt) 
VALUES ('$nom', '$prenom', '$age', '$wilaya', '$tel', '$email', '$adr', '$password', '$sex')");

if ($ajout) {
    echo "Client added successfully!";
} else {
    echo "Failed to add client! " . mysqli_error($conn);
}

mysqli_close($conn);
?>
