<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lagrer</title>
</head>
<body>
    <h1>Lagresiden</h1>
    <?php include "loginLocal.php";?>
    <?php
        if (isset($_POST["lagre"])) {
        $brukernavn = $_POST["navn"];
        $kommentar = $_POST["tekst"];

       // $sql = "INSERT INTO `kommentar` (`bruker`, `tekst`, `tid`) VALUES ('$brukernavn', '$kommentar', NULL);";

        $sql = "INSERT INTO `kommentar` (`bruker`, `tekst`, `tid`) 
                SELECT '$brukernavn', '$kommentar', NULL
                FROM dual
                WHERE NOT EXISTS (SELECT * FROM `kommentar` WHERE `tekst` = '$kommentar');";
        $kobling -> query($sql);

        echo "<p>if-setning kjørt</p>";
        }
        
        //echo "<script>window.open('kommentar.html',target='_self');</script>";
    ?>
</body>
</html>