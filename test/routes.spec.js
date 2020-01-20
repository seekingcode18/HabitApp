process.env.NODE_ENV = "test";
const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const mongoose = require("mongoose");
const User = require("../user.model.js");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiHttp);
chai.should();
chai.use(chaiAsPromised);

describe("routes", () => {
  before(function(done) {
    mongoose.connect("mongodb://localhost/habits_test", done);
    //function(error) {
    // //   if (error) console.error("Error while connecting:\n%\n", error);
    // //   console.log("connected");
    // //   done(error);
    // });
  });

  afterEach(() => {
    User.collection.drop();
  });
  it("should connect to the db", done => {
    let isConnected;
    const db_name = process.env.NODE_ENV === "test" ? "habits_test" : "habits";
    let url = `mongodb://localhost:27017/${db_name}`;

    mongoose.connect(url, {
      useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on("error", error => {
      isConnected = false;
    });
    db.once("open", () => {
      isConnected = true;
    });
    done();
    isConnected.should.be(true);
  });

  it("should post a user", done => {
    chai
      .request("mongodb://localhost:27017/habits_test")
      .post("/users/add")
      .send({
        name: "dan",
        habits: [
          {
            title: "meditation",
            completed: true
          }
        ]
      })
      .end((error, res) => {
        res.body.should.be.a("object");
        res.body.should.have.property("name");
        res.body.should.have.property("habits");
        res.body.habits.should.be.an("array");
        done();
      });
  });
});
