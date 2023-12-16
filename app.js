const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
let app = express()

const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const session = require('express-session');
var FileStore = require('session-file-store')(session);

var fileStoreOptions = {};

const routes = require('./src/routes/routes')

// .env dosyası üzerinden env değişkenlerini kullanmak için dotenv kütüphanesi kullanılıyor
require('dotenv').config()

// Env üzerinden çalıştırılan port numarasını alıyor belirtilen yoksa 3000 portunu kullanıyor
const PORT = process.env.PORT || 3000

// Uygulama view kısmında layout kullanımı için express-ejs-layouts kütüphanesi kullanılıyor
app.use(expressLayouts)
app.set('layout', '../layouts/layout')
// NodeJS template engine ejs
app.set("view engine", "ejs");
// Uygulama view kısmında static css ve js dosyalarına ulaşmak için public klasörünü kullanıyor
app.use(express.static('public'))

// Uygulama view kısmında views klasörünü kullanıyor
app.set('views','./src/views')

// requestler üzerindeki json verileri okuyabilmek için body-parser kullanılıyor
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Uygulama üzerinde session kullanımı için express-session kütüphanesi kullanılıyor
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    store: new FileStore(fileStoreOptions),
}));

app.use(routes)

// Uygulama env üzerinde belirtilen port üzerinde çalıştırılıyor
// TODO: dotenvin doğru çalışıp çalışmadığı test edilecek test edilmediği durumlarda sürekli 3000 portunda çalışabilir
app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`)
    console.log(`Server running on port ${PORT}`)
})
