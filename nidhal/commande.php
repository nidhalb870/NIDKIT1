<?php
$conn = mysqli_connect('localhost', 'root', '', 'base_client');

$seller = is_array($_POST['seller']) ? reset($_POST['seller']) : $_POST['seller'];
$price = is_array($_POST['price']) ? reset($_POST['price']) : $_POST['price'];
$ref = is_array($_POST['ref']) ? reset($_POST['ref']) : $_POST['ref'];
$color = is_array($_POST['color']) ? reset($_POST['color']) : $_POST['color'];
$amount = is_array($_POST['amount']) ? reset($_POST['amount']) : $_POST['amount'];

$seller = mysqli_real_escape_string($conn, $seller);
$price = mysqli_real_escape_string($conn, $price);
$ref = mysqli_real_escape_string($conn, $ref);
$color = mysqli_real_escape_string($conn, $color);
$amount = mysqli_real_escape_string($conn, $amount); 

$query = "INSERT INTO Commande_produit (seller, price, ref, color, amount) VALUES ('$seller', '$price', '$ref', '$color', '$amount')";

$add = mysqli_query($conn, $query);

if ($add) {
    echo "Order sent successfully!";
} else {
    echo "Failed to send order: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
