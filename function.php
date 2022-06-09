<?php

include './controller/gpa.php';

$tpu = 78;
$tcu = 19;

$gpa = new gpa($tpu, $tcu);
echo $gpa->getGpa();
