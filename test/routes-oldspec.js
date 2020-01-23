process.env.NODE_ENV = "test";
const mocha = require("mocha");
const chai = require("chai");
// const assert = require("chai").assert;
const chaiHttp = require("chai-http");
// const server = require("../server");
const mongoose = require("mongoose");
// const User = require("../user.model.js");
// const chaiAsPromised = require("chai-as-promised");

chai.use(chaiHttp);
chai.should();
// chai.use(chaiAsPromised);

describe()

describe("routes", () => {
  before(function(done) {
    mongoose.connect("mongodb://localhost/habits_test");
    const db = mongoose.connection;
    db.on("error"), console.error.bind(console, "connection error");
    db.once("open", () => {
      console.log("successful connection to database");
      done();
    });
    console.log("tests go here");

    after((done) => {
      mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(done);
        console.log("database connection close");
      });
    });
  
  });
});
//   afterEach(() => {
//     User.collection.drop();
//   });
//   it("should connect to the db", done => {
//     let isConnected;
//     const db_name = process.env.NODE_ENV === "test" ? "habits_test" : "habits";
//     let url = `mongodb://localhost:27017/${db_name}`;

//     mongoose.connect(url, {
//       useNewUrlParser: true
//     });
//     const db = mongoose.connection;
//     db.on("error", error => {
//       isConnected = false;
//     });
//     db.once("open", () => {
//       isConnected = true;
//     });
//     done();
//     isConnected.should.be(true);
//   });

//   // it('should list all habits on /users/:id/habits', (done) => {
//   //   chai.request(server)
//   //     .get('/users/5e26d420ce59b307c4756597/habits')
//   //     .end((err, res) => {
//   //       res.should.have.status(200);
//   //       done();
//   //     })
//   // })

//   it("Should add a single habit onto /users/:id/habits", done => {
//     const db_name = process.env.NODE_ENV === "test" ? "habits_test" : "habits";
//     let url = `mongodb://localhost:27017/${db_name}`;
//     console.log("test console log");
//     mongoose.connect(url, {
//       useNewUrlParser: true
//     });

//     mongoose.connection
//       .once("open", () => {
//         console.log("connection achieved in test files");
//         const user = new User({
//           name: "philip",
//           username: "philip123",
//           password: "password",
//           habits: [{ title: "vegetables" }]
//         });
//         user.save().then(() => {
//           assert(true === true);
//           done();
//         });
//       })
//       .on("error", err => {
//         console.log("connection error in test file:", err);
//       });

//     done();
//   });
// });

// it("should post a user", done => {
//   chai
//     .request("mongodb://localhost:27017/habits_test")
//     .post("/users/add")
//     .send({
//       name: "dan",
//       habits: [
//         {
//           title: "meditation",
//           completed: true
//         }
//       ]
//     })
//     .end((error, res) => {
//       res.body.should.be.a("object");
//       res.body.should.have.property("name");
//       res.body.should.have.property("habits");
//       res.body.habits.should.be.an("array");
//       done();
//     });
// });

// });
