const partnerModel = require("../models/partnerModel");

//create user register user
exports.partnerCreateController = async (req, res) => {
  try {
    const { partnername, logo, isActive } = req.body;
    //validation
    if (!partnername || !logo) {
      return res.status(400).send({
        success: false,
        message: "Please Fill partnername and logo",
      });
    }

    //save new user
    const user = new partnerModel({ partnername, logo, isActive });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "New Partner Master Created",
      user,
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
