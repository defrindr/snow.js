# Snow.JS
library untuk menampilkan salju menggunakan javascript


## Cara menggunakan
Dapat dengan mendownload repo ini atau
import script dari CDN
```

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matrix</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <canvas id="snow"></canvas>
    <script src="../src/snow.min.js"></script>
    <script>
        Matrix('#snow', {
            snowCharacter: "*", // Karakter salju
            txtPopulation: 2, // semakin tinggi nilainya akan semakin mengurangi kepadatan salju
            minFontSize: 12, // Ukuran font minimal
            maxFontSize: 18, // Ukuran font minimal
            minTextSpeed: 2, // Kecepatan salju minimal
            maxTextSpeed: 3, // Kecepatan salju maksimal
            snowInScreen: 100, // Jumlah salju yang ditampilkan dilayar,
            snowColor: 'Red', // warna salju
            fontFamily: 'Cursive', // Font family dari salju
            interval: 100, // interval waktu refresh canvas,
        }).init();
    </script>
</body>
</html>```

## Sample
Contoh dapat dilihat di
[https://defrindr.github.io/snow.js/demo/](https://defrindr.github.io/snow.js/demo/) 
