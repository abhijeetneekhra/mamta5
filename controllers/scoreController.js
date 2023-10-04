const scoreModel = require("../models/scoreModel");

//create user register user
exports.scoreCreateController = async (req, res) => {
  try {
    const { scorecode, scorename, isActive } = req.body;
    //validation
    if (!scorecode || !scorename) {
      return res.status(400).send({
        success: false,
        message: "Please Fill scorecode and scorename",
      });
    }

    //save new user
    const user = new scoreModel({ scorecode, scorename, isActive });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "New Score Master Created",
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
exports.getAllScore = async (req, res) => {
  try {
    const users = await scoreModel.find({});
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
      message: "Error In Get ALl ScoreMaster",
      error,
    });
  }
};
