const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')


const session = require('express-session');
var FileStore = require('session-file-store')(session);

var fileStoreOptions = {};

let app = express()

// Uygulama rotaları
const routes = require('./src/routes/routes')

// .env dosyası üzerinden env değişkenlerini kullanmak için dotenv kütüphanesi kullanılıyor
require('dotenv').config()

// Env üzerinden çalıştırılan port numarasını alıyor belirtilen yoksa 3000 portunu kullanıyor
const PORT = process.env.PORT || 3000

// Uygulama view kısmında layout kullanımı için express-ejs-layouts kütüphanesi kullanılıyor
app.use(expressLayouts)
// Kullanıcı layout yetkililer için custom layout kullanılıyor
app.set('layout', '../layouts/layout')
// NodeJS template engine ejs express-ejs-layouts kütüphanesi ile kullanılıyor
app.set("view engine", "ejs");
// Uygulama view kısmında static resim css ve js dosyalarına ulaşmak için public klasörünü statik olarak belirliyor
app.use(express.static('public'))

// Uygulama front-end kısmında kullanılan view dosyaları src/views klasörü altında bulunuyor bu klasörü belirliyor
app.set('views','./src/views')

// Gelen isteklerde body-parser kütüphanesi ile gelen verileri json ve urlencoded olarak parse ediyor
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Uygulama üzerinde session kullanımı için express-session kütüphanesi kullanılıyor
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: new FileStore(fileStoreOptions),
}));

// Uygulama üzerindeki route dosyası kullanılıyor
app.use(routes)

// Uygulama env üzerinde belirtilen port üzerinde çalıştırılıyor
app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`)
    console.log(`Server running on port ${PORT}`)
})
