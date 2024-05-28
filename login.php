<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $host = "rn4.h.filess.io";
    $username = "kommentarer_weeksound";
    $password = "ff2ae6fcc2af180946ffbc5aae977fedac8798e8";
    $database = "kommentarer_weeksound";

    $kobling = new mysqli($host, $username, $password, $database);
    if ($kobling -> connect_error) {
        die("Noe gikk galt: ". $kobling->connect_error);
    } else {
        echo("<p style='position:absolute;'>koblingen virker</p>");
    }
    $kobling->set_charset("utf8");
?>