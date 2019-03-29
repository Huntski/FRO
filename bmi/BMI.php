<?php

$weight = $_GET['weight'];
$length = $_GET['length'];

function BMIcalc($weight, $length) {
    $length = $length / 100; //convert to meters
    $l = $length * $length; // square
    $bmi = $weight / $l;
    $bmi = oneDecimal($bmi);

    if ($bmi < 18.5) {
        $output = "You are under weight";
    }
    if ($bmi >= 18.5) {
        $output = "You are at a normal health";
    }
    if ($bmi >= 25) {
        $output = "You are overweight";
    }
    if ($bmi >= 30) {
        $output = "You have Obese class I";
    }
    if ($bmi >= 35) {
        $output = "You have Obese class II";
    }
    if ($bmi >= 40) {
        $output = "You have Obese class III";
    }
    echo "Your BMI: $bmi $output";
}

BMIcalc($weight, $length);

function oneDecimal($number) {
    $number = floor($number * 10);
    $number /= 10;
    return $number;
}