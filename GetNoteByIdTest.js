const chai = require("chai");
const chaiHttp = require("chai-http");
const { captureRejectionSymbol } = require("events");

const expect = chai.expect;

const baseUrl = "http://localhost:3000";

const notesdata = {
        
    "title": "AAAA",
    "content": "Aaaaaaaaaaaaaaaaaaaa",
    "id": 1
    
}; 
chai.use(chaiHttp);

describe("Get a note by id Test", function(){
    it("get a note", function(done){
        chai.request(baseUrl)
            .get("/notes/" + notesdata.id)
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("id");
                expect(res.body.id).to.equal(notesdata.id);
                expect(res.body.title).to.equal(notesdata.title);
                expect(res.body.content).to.equal(notesdata.content);
                done();
        })
    });
});

describe("Get all notes", function(){
    it("get all notes", function(done){
        chai.request(baseUrl)
            .get("/notes")
            .end(function(err, res){
                expect(res).to.have.status(200);

                expect(res.body).to.be.a.jsonFile();
                
                done();
        })
    });
});