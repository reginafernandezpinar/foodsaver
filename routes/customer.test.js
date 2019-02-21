var chai = require("chai"),
should = chai.should(),
expect = chai.expect,
chaiHttp = require("chai-http"),
app = require('../app');

// https://www.chaijs.com/api/bdd/
// ahora hay q conectar el servidor "npm run test"

chai.use(chaiHttp);
chai.should();

describe('Customer', function() {
    describe("server respond ok", () => {
        const url = "/customers"; 
        it ('Woow! testing', function(done) {
            expect(1).to.equals(1);
            done();
        })
            // generamos nuevo caso de prueba
        it ('should return a 200 code', function(done) {
            chai.request(app).get(url)
            .set('content-type', 'application/json') // fijo la cabecera en postman
            .end( (err, res) => {
                expect(res.status).to.equals(200)
            })
            done();
        })
        it ('should return a 404 code', function(done) {
            const wrongUrl = "/customer"; 
            chai.request(app).get(wrongUrl)
            .set('content-type', 'application/json') // fijo la cabecera en postman
            .end( (err, res) => {
                expect(res.status).to.equals(404)
            })
            done();
        })
        // comprobar q la resp q me viene en la peticion de la url de /customers es un array de objetos
        it ('it is ok', function(done) {
            chai.request(app).get(url)
            .set('content-type', 'application/json') // fijo la cabecera en postman
            .end( (err, res) => {
                expect(res.body).to.be.an('array').that.has.lengthOf(20);
            })
            done();
        })
    })
})
