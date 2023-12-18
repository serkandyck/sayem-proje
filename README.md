# Sayem Yazılım geliştirici 5 projesi
SERKAN DAYICIK

### Bağımlılıklar

Proje, [NodeJS v20.10.0](https://nodejs.org/en) LTS versiyonunu gerektirir. Ayrıca, IIS Server için NodeJS ve proje dosya yollarına geçerli okuma ve yazma izinleri verilmiş olmalıdır. IIS için [HttpPlatformHandler v1.2](https://www.iis.net/downloads/microsoft/httpplatformhandler) modülü de gereklidir.

Proje bağımlılıkları ve açıklamaları aşağıda belirtilmiştir ve bunlar `package.json` üzerinden kurulabilir:

* `@prisma/client: "^5.7.0",` Prisma ORM frameworkü client
* `bcrypt": "^5.1.1,` Yetkili authentication mekanizması için şifre encrypt kütüphanesi
* `body-parser": "^1.20.2` Express içerisin de gelen requestleri bodyden parse etme kütüphanesi
* `dotenv": "^16.3.1` env verilerini tek dosya içerisinde NodeJS ortamına aktarmak için kütüphane
* `ejs": "^3.1.9` Express içerisin de view html template kütüphanesi
* `express": "^4.18.2` Node.js tabanlı bir web uygulama sunucu çatısıdır ve projemizin temelini oluşturur
* `express-ejs-layouts` URL bazlı alanlara farklı layoutlar servis etmemizi sağlayan kütüphane
* `express-session": "^1.17.3` Express içerisin de session tutmamızı sağlayan kütüphane
* `uuid": "^9.0.1` Kullanıcı talepleri için istenen her talep için uniq bir id oluşturan kütüphane

Sadece geliştirme ortamı üzerinde kullanılan kütüphaneler

* `nodemon": "^3.0.2` Projemizi Dev Env üzerinde sürekli izleyen ve dosyalar da değişiklikleri tespit edip yansıtan server kütüphanesi
* `prisma": "^5.7.0` Projemizin Database ORM Framework kütüphanesi


## 📓 Veritabanı Varlık İlişki Diyagramı (ERD)

* Model diyagramı için [ERD.md](./ERD.md)

## Uyarı
> `.env.example` dosyasındaki PORT ve Database değişkenleri ayarlanmalı ve ardından dosya adı `.env` olarak değiştirilmelidir.

## 💾 Geliştirme Ortamı Kurulumu
Geliştirme ortamı içinde nodemon ile sunucu başlatılır ve yapılan değişiklikler anlık olarak yansıtılır:

```shell
npm install

npx prisma db push
npx prisma db seed

npm run dev
```

## 💾 Üretim Ortamı Kurulumu
Üretim ortamında IIS Server kullanılır ve çevre değişkeni olarak "production" gönderilir; bu ayarlama `web.config` dosyasında yapılmıştır

```shell
npm install

npx prisma db push
npx prisma db seed
```