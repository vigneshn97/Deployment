let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonCheck = require("sinon").assert;
const Modal = require("../src/modals/User");
const Services = require("../src/services/user");
const chaiAsPromised = require("chai-as-promised");


let getData1 = [
  {
    "_id": "5feb08e4c6aa9e1f8bbe1868",
    "name": "vasu",
    "NLID": "NL 525",
    "designation": "MTS",
    "contact": 962343340668,
    "__v": 0
  },
  {
    "_id": "5feb0911c6aa9e1f8bbe186a",
    "name": "vignesh",
    "NLID": "NL 525",
    "designation": "MTS",
    "contact": 9620600579,
    "__v": 0
  }
];

let postData1 = [
  {
    "name": "Tom",
    "NLID": "NL 100",
    "designation": "MTS",
    "contact": 9620600579,
    "__v": 0
  }
]

let dataDelete1 = [
  {
    "name": "Tom",
  }
]

chai.should();
chai.use(chaiHttp);
chai.use(chaiAsPromised);



describe("Testing for testServices.js", () => {
  beforeEach(() => {
    sinon.restore();
  });
  afterEach(() => {
    sinon.restore();
  });

  context("Test Suite for getUsers", () => {
    let stub = sinon.stub;

    it("should return a value on succesful exceution", async () => {
      stub(Modal, "find").returns(getData1);
      let serviceData = Services.getUsers();
      sinonCheck.calledOnce(Modal.find);
      expect(Modal.find).to.be.not.null;
    
    });

  });
});


describe("Testing for testServices.js", () => {
  beforeEach(() => {
    sinon.restore();
  });
  afterEach(() => {
    sinon.restore();
  });

  context("Test Suite for postUsers()", () => {
    let stub = sinon.stub;

    it("should return a value on succesful exceution", async () => {
      stub(Modal, "create").returns(postData1);
      let req = {
        body:postData1,
      };
      let res = {
        status: sinon.stub().returns({
            send: sinon.stub().resolves()
        })
    };
      let postedData = await Services.postUsers(req,res);
    });
    
  });
});

describe("Testing for testServices.js", () => {
  beforeEach(() => {
    sinon.restore();
  });
  afterEach(() => {
    sinon.restore();
  });
context('Test Suites for deleteUsers()', () => {

  let stub = sinon.stub;

  // beforeEach(() => sinon.restore());

  it('should successfully delete the document', async () => {
    // stub(Modal, 'deleteOne').returns(dataDelete);
    let dataDelete = {
      "user": {
          "n": 1,
          "ok": 1,
          "deletedCount": 1
      }
  }
  stub(Modal, 'deleteOne').returns(dataDelete);

  let req = {
    body:dataDelete1,
  };
  let res = {
    send: sinon.stub().resolves()
};

 
    let updatedData = await Services.deleteUsers(req,res);
  })
  });
});