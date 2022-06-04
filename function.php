<?php

include './controller/gpa.php';

/*
$grade = $_REQUEST['g'];
$unit = $_REQUEST['u'];
$totalCourse = $_REQUEST['totalCourse'];*/

/*
for ($x = 1; $x <= $totalCourse; $x++) {
    var_dump('$tcu' . $x = $_REQUEST['course_unit_' . $x]);
}*/


$tpu = 78;
$tcu = 19;

$gpa = new gpa($tpu, $tcu);
echo $gpa->getGpa();




/*
$tcu = 0;

$tcu1 = $_REQUEST['course_unit_1'];
$tcu2 = $_REQUEST['course_unit_2'];
$tcu3 = $_REQUEST['course_unit_3'];
$tcu4 = $_REQUEST['course_unit_4'];
$tcu5 = $_REQUEST['course_unit_5'];
$tcu6 = $_REQUEST['course_unit_6'];
$tcu7 = $_REQUEST['course_unit_7'];
$tcu8 = $_REQUEST['course_unit_8'];
$tcu9 = $_REQUEST['course_unit_9'];
$tcu10 = $_REQUEST['course_unit_10'];


//Calculates the tcu
$tcu = $tcu1 + $tcu2 + $tcu3 + $tcu4 + $tcu5 + $tcu6 + $tcu7 + $tcu8 + $tcu9 + $tcu10;

return $tcu;
*/