<?php

function tcu()
{
    $tcu = 0;

    $tcu1 = $_POST['tcu1'];
    $tcu2 = $_POST['tcu2'];
    $tcu3 = $_POST['tcu3'];
    $tcu4 = $_POST['tcu4'];
    $tcu5 = $_POST['tcu5'];
    $tcu6 = $_POST['tcu6'];
    $tcu7 = $_POST['tcu7'];
    $tcu8 = $_POST['tcu8'];
    $tcu9 = $_POST['tcu9'];
    $tcu10 = $_POST['tcu10'];

    //Calculates the tcu
    $tcu = $tcu1 + $tcu2 + $tcu3 + $tcu4 + $tcu5 + $tcu6 + $tcu7 + $tcu8 + $tcu9 + $tcu10;

    return $tcu;
}
