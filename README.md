# Sayem Yazılım geliştirici 5 projesi
SERKAN DAYICIK

### Dependencies

Proje son versiyon NodeJS LTS versiyonu gerektirir [NodeJS v20.10.0](https://nodejs.org/en) IIS Server için NodeJS ve proje dosya yollarına geçerli okuma ve yazma izinleri verilmiş olmalıdır
IIS için HttpPlatformHandler v1.2 modülü gerektirir [HttpPlatformHandler v1.2](https://www.iis.net/downloads/microsoft/httpplatformhandler)

Proje bağımlılıkları ve açıklamaları aşşağıda belirtilmiştir ve package.json üzerinde tek komut ile kurulabilmektedir:

* `@prisma/client: "^5.7.0",` Prisma ORM frameworkü client
* `bcrypt": "^5.1.1,` Yetkili authentication mekanizması için şifre encrypt kütüphanesi
* `body-parser": "^1.20.2` Express içerisin de gelen requestleri bodyden parse etme kütüphanesi
* `dotenv": "^16.3.1` env verilerini tek dosya içerisinde NodeJS ortamına aktarmak için kütüphane
* `ejs": "^3.1.9` Express içerisin de view html template kütüphanesi
* `express": "^4.18.2` Node.js tabanlı bir web uygulama sunucu çatısıdır ve projemizin temelini oluşturur
* `express-ejs-layouts` URL bazlı alanlara farklı layoutlar servis etmemizi sağlayan kütüphane
* `express-session": "^1.17.3` Express içerisin de session tutmamızı sağlayan kütüphane
* `uuid": "^9.0.1` Kullanıcı talepleri için istenen her talep için uniq bir id oluşturan kütüphane

Sadece development environment üzerinde kullanılan kütüphaneler

* `nodemon": "^3.0.2` Projemizi Dev Env üzerinde sürekli izleyen ve dosyalar da değişiklikleri tespit edip yansıtan server kütüphanesi
* `prisma": "^5.7.0` Projemizin Database ORM Framework kütüphanesi


## 📓 Database Entity Relation Diagram

* diagram modeli [ERD.md](./ERD.md)

## Uyarı
> .env.example dosyası PORT ve Database verileri ayarlanıp ardından ismi .env olarak değiştirilmeli.

## 💾 Dev Env Kurulum
Development env içerisinde nodemon ile sunucu ayağa kaldırılır ve değişiklikler anlık olarak yansıtılır

```shell
npm install

npx prisma db push
npx prisma db seed

npm run dev
```

## 💾 Prod Env Kurulum
Production env içerisinde IIS Server kullanılır ve ENV olarak production gönderilir bu ayarlama web.config içerisinde yapılmıştır

```shell
npm install

npx prisma db push
npx prisma db seed
```