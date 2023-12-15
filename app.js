const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
let app = express();

// .env dosyası üzerinden env değişkenlerini kullanmak için dotenv kütüphanesi kullanılıyor
require('dotenv').config()

// Env üzerinden çalıştırılan port numarasını alıyor belirtilen yoksa 3000 portunu kullanıyor
const PORT = process.env.PORT || 3000;

// Uygulama view kısmında layout kullanımı için express-ejs-layouts kütüphanesi kullanılıyor
app.use(expressLayouts)
app.set('layout', '../layouts/layout')
// NodeJS template engine ejs
app.set("view engine", "ejs");
// Uygulama view kısmında static css ve js dosyalarına ulaşmak için public klasörünü kullanıyor
app.use(express.static('public'))

// Uygulama view kısmında views klasörünü kullanıyor
app.set('views','./src/views');

// requestler üzerindeki json verileri okuyabilmek için body-parser kullanılıyor
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Uygulama router express kütüphanesini tek yerden çağırmak için ana girişten set edilip konfigrasyon routes üzerinden yapılıyor
const router = express.Router();
app.use(router);

app.get('/', (req, res) => {
    res.render('index', { title: 'SAYEM | Talep toplama formu'})
})

app.get('/login', (req, res) => {
    res.render('auth/login', { title: 'SAYEM | Yetkili girişi'})
})

app.get('/request', (req, res) => {
    res.render('my-requests', { title: 'SAYEM | Talep sorgulama'})
})

app.get('/requests', (req, res) => {
    res.render('requests', { title: 'SAYEM | Talepler'})
})


// Uygulama env üzerinde belirtilen port üzerinde çalıştırılıyor
// TODO: dotenvin doğru çalışıp çalışmadığı test edilecek test edilmediği durumlarda sürekli 3000 portunda çalışabilir
app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server running on port ${PORT}`);
});
