const districtModel = require("../models/districtModel");

//create user register user
exports.districtCreateController = async (req, res) => {
  try {
    const { districtcode, districtname, isActive } = req.body;
    //validation
    if (!districtcode || !districtname) {
      return res.status(400).send({
        success: false,
        message: "Please Fill districtcode and districtname",
      });
    }

    //save new user
    const user = new districtModel({ districtcode, districtname, isActive });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "New District Master Created",
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
exports.getAllDistrict = async (req, res) => {
  try {
    const users = await districtModel.find({});
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
      message: "Error In Get ALl StateMaster",
      error,
    });
  }
};
