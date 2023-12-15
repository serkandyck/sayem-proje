const bodyParser = require('body-parser');
const express = require('express');
let app = express();


require('dotenv').config()

// Env üzerinden çalıştırılan port numarasını alıyor belirtilen yoksa 3000 portunu kullanıyor
const PORT = process.env.PORT || 3000;

// NodeJS view engine ejs
app.set("view engine", "ejs");
// Uygulama view klasörünü kullanıyor
app.set("views", "./src/views");

// requestler üzerindeki json verileri okuyabilmek için body-parser kullanılıyor
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Uygulama router express kütüphanesini tek yerden çağırmak için ana girişten set edilip konfigrasyon routes üzerinden yapılıyor
const router = express.Router();
app.use(router);


// Uygulama env üzerinde belirtilen port üzerinde çalıştırılıyor
app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server running on port ${PORT}`);
});
