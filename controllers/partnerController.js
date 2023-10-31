var fs = require("fs");
var path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//const upload = multer({ storage: storage });
const upload = multer({ storage: storage }).single("file");

const partnerModel = require("../models/partnerModel");

//create user register user
exports.partnerCreateController2 = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.end("error file uploading");
      }
      console.log("The file object...");
      console.log(req.file.filename);

      var img = fs.readFileSync(path.join(__dirname + "/" + req.file.filename));

      var obj = {
        partnername: " ",
        logoname: req.file.filename,
        logocontent: img, // new Buffer.alloc(encode_img, encode_img.length),
        contentType: req.file.mimetype,
        isActive: false,
      };

      //save new user
      partnerModel.create(obj).then((result) => {
        console.log("ID of the image object: " + result._id);
        //console.log(result)
        return res.status(201).send({
          success: true,
          message: "New Partner Master Created",
          id: result._id,
        });
      });

      fs.unlinkSync(path.join(__dirname + "/" + req.file.filename));
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error In Create callback",
      success: false,
      error,
    });
  }
};

//create user register user
exports.partnerCreateController = async (req, res) => {
  try {
    const { partnername, isActive, id } = req.body;

    console.log("Inside partnerCreateController ID: " + id);
    //validation
    if (!partnername) {
      return res.status(400).send({
        success: false,
        message: "Please Fill partnername and logo",
      });
    }

    //save new user
    const updatedResult = await partnerModel.findByIdAndUpdate(
      { _id: id },
      { partnername: partnername, isActive: isActive }
    );

    return res.status(201).send({
      success: true,
      message: "New Partner Master Created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error In Create callback",
      success: false,
      error,
    });
  }
};

// get all users
exports.getAllPartner = async (req, res) => {
  try {
    const users = await partnerModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get ALl PartnerMaster",
      error,
    });
  }
};
