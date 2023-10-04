const stateModel = require("../models/stateModel");

//create user register user
exports.stateCreateController = async (req, res) => {
  try {
    const { statecode, statename, isActive } = req.body;
    //validation
    if (!statecode || !statename) {
      return res.status(400).send({
        success: false,
        message: "Please Fill statecode and statename",
      });
    }

    //save new user
    const user = new stateModel({ statecode, statename, isActive });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "New State Master Created",
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
exports.getAllState = async (req, res) => {
  try {
    const users = await stateModel.find({});
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
