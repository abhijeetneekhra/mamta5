const schoolModel = require("../models/schoolModel");

//create user register user
exports.schoolCreateController = async (req, res) => {
  try {
    const {
      schoolcode,
      schoolname,
      state,
      district,
      address,
      pincode,
      isActive,
    } = req.body;
    //validation
    if (
      !schoolcode ||
      !schoolname ||
      !state ||
      !district ||
      !address ||
      !pincode
    ) {
      return res.status(400).send({
        success: false,
        message: "Please Fill all the fields",
      });
    }

    //save new user
    const user = new schoolModel({
      schoolcode,
      schoolname,
      state,
      district,
      address,
      pincode,
      isActive,
    });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "New School Master Created",
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
exports.getAllSchools = async (req, res) => {
  try {
    const users = await schoolModel.find({});
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
      message: "Error In Get ALl SchoolMaster",
      error,
    });
  }
};
