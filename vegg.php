<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kommentarfelt</title>
        <link rel="stylesheet" href="styles/comment.css">
        <link rel="stylesheet" href="styles/topbar.css">
        <link rel="stylesheet" href="styles/main.css">
        <link rel="stylesheet" href="styles/fonts.css">
    </head>
    <body>
        <?php include "loginLocal.php"?>
        <?php 
        $kode = "SELECT * from kommentar";
        $info = $kobling->query($kode);
        if (!$info) {
            die("Query failed: " . $kobling->error);
        }

        ?>
        <div id="head">
        <h1 id="tittel">KOMMENTARFELT</h1>
        <ul id="index">
            <a href="index.html"><li id="indexNavn">Hjem</li></a>
            <a href="kunst.html"><li id="indexNavn">Kunst</li></a>
            <a href="digitalt.html"><li id="indexNavn">Digital</li></a>
            <a href="vegg.php"><li id="indexNavn">Kommenter</li></a>
        </ul>
        
    </div>
        <div id="main">
            <h1>Legg igjen en kommentar <span><a class="LinkKnapp" href="kommentar.html">her</a></span></h1>
            <div id="kommentarer">
                <?php while ($felt = $info->fetch_assoc()) {
                    echo "<div class='pad'><p class='brukernavn'>$felt[bruker]</p>
                    <p class='tid'>$felt[tid]</p>
                    <p class='tekst'>$felt[tekst]</p></div>";
                }
                ?>    
            </div>
            
        </div>
        <script src="scripts/koder.js"></script>
        <script src="scripts/topbar.js"></script>
        <script>
            window.onload = function() {
                let tekstVal = document.querySelector("#tittel").innerHTML;
                setInterval(draw, 50, tekstVal);
                setTimeout(function() {
                    document.querySelector("#load").remove()
                    document.querySelector("body").style.overflowY = "visible";               
                },150);
            };
        </script>
    </body>
</html>