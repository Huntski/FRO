<?php

/*
*   author: Wiebe Ranzijn MD1A
*/

$firstname = $_GET['firstname'];
$lastname = $_GET['lastname'];
$age = $_GET['age'];
$email = $_GET['email'];
echo "<h3>Response Demo Form</h3>";
echo "<h4>You submitted the following information: <br><ul>";
echo "<li>Full Name: <strong>$firstname  $lastname</strong></li>";
echo "<li>Age: $age</li>";
echo "<li>Email: $email</li>";
echo "</ul></h4>";
