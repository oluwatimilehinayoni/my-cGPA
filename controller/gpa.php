<?php

include 'controller/tpu.php';
include 'controller/tcu.php';

class gpa
{
    private $tpu;
    private $tcu;

    public function __construct(int $tpu, int $tcu)
    {
        //CREATES THE TOTAL POINT UNIT(TPU) AND TOTAL COURSE UNIT(TCU)
        $this->tpu = $tpu;
        $this->tcu = $tcu;
    }

    public function getTpu()
    {
        return $this->tpu;
    }

    public function getTcu()
    {
        return $this->tcu;
    }

    public function getGpa()
    {
        return $this->tpu / $this->tcu;
    }
}
