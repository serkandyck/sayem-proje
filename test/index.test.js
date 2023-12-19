const request = require('supertest');
const app = require('../app.js');

// basit test
describe('GET /', function() {
  it('return json response', function() {
    return request(app)
      .get('/')
      .expect(200)
  })
})