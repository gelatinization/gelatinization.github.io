<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "kommentarer";

    $kobling = new mysqli($host, $username, $password, $database);
    if ($kobling -> connect_error) {
        die("Noe gikk galt: ". $kobling->connect_error);
    } else {
        echo("<p style='position:absolute;'>koblingen virker</p>");
    }
    $kobling->set_charset("utf8");
?>