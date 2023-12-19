const request = require('supertest');
const app = require('../app.js');

// basit test rotalar kontrol ediliyor
describe('GET /', function() {
  it('uygulama çalışıyor', function() {
    return request(app)
      .get('/')
      .expect(200)
  })
})