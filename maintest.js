const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;

const baseUrl = "http://localhost:3000";

chai.use(chaiHttp);

describe("My first test", function(){
    it("server is live", function(done){
        chai.request(baseUrl)
            .get("/")
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res.text).to.equal('<!DOCTYPE html><html><head><title>Express</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Express</h1><p>Welcome to Express</p></body></html>');
                done();
        })
    });
});