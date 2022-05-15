<?php

spl_autoload_register(function ($className) {
    $path = "controller/";
    $extension = ".php";
    $fullpath = $path . $className . $extension;

    include_once $fullpath;
});
