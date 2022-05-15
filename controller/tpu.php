<?php

function tpu()
{
    $tpu = 0;

    $tpu1 = $_POST['tpu1'];
    $tpu2 = $_POST['tpu2'];
    $tpu3 = $_POST['tpu3'];
    $tpu4 = $_POST['tpu4'];
    $tpu5 = $_POST['tpu5'];
    $tpu6 = $_POST['tpu6'];
    $tpu7 = $_POST['tpu7'];
    $tpu8 = $_POST['tpu8'];
    $tpu9 = $_POST['tpu9'];
    $tpu10 = $_POST['tpu10'];

    // TODO 
    //Write code for calculating the tpu
    $tpu = $tpu1 + $tpu2 + $tpu3 + $tpu4 + $tpu5 + $tpu6 + $tpu7 + $tpu8 + $tpu9 + $tpu10;

    return $tpu;
}
