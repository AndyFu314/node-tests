const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {
    describe('#GET /', () => {
        it('should return not found response', (done) => {
            request(app)
              .get('/')
              .expect(404)
              .expect('Content-Type', /json/)
              .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                })
              })
              .end(done);
        });
    });

    describe('#GET /users', () => {
        it('should return a user array that included me', (done) => {
            request(app)
              .get('/users')
              .expect(200)
              .expect('Content-Type', /json/)
              .expect((res) => {
                  expect(res.body).toContain({
                      name: 'Andy',
                      age: 27
                  })
              })
              .end(done);
        });
    });
});