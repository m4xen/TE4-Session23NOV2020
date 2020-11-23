const chai = require("chai");
const chaiHttp = require("chai-http");
const { captureRejectionSymbol } = require("events");

const expect = chai.expect;

const baseUrl = "http://localhost:3000";

const notesdata = {
        
    "title": "Hej",
    "content": "Hello",
    "id": 1
    
}; 
chai.use(chaiHttp);
chai.use(require("chai-json"));

//Get a note
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

//Get all notes
describe("Get all notes", function(){
    it("get all notes", function(done){
        chai.request(baseUrl)
            .get("/notes")
            .end(function(err, res){
                expect(res).to.have.status(200);

                expect(res.body).to.be.a("Object");
                
                done(); 
        })
    });
});

//Edite notes
describe("Edite a note", function(){
    it("Edited a note", function(done){
        chai.request(baseUrl)
            .put("/notes/" + notesdata.id)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({title : "Hej", content : "Hello"})
            .end(function(err, res){
                expect(res).to.have.status(200);
              
                done(); 
        })
    });
});

//Create note
describe("Create note", function(){
    it("Createde a note", function(done){
        chai.request(baseUrl)
            .post("/notes/")
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({data: JSON.stringify(notesdata)})
            .end(function(err, res){
                expect(res).to.have.status(200);
              
                done(); 
        })
    });
});