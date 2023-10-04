const rankModel = require("../models/rankModel");

//create user register user
exports.rankCreateController = async (req, res) => {
  try {
    const { rankcode, rankname, isActive } = req.body;
    //validation
    if (!rankcode || !rankname) {
      return res.status(400).send({
        success: false,
        message: "Please Fill rankcode and rankname",
      });
    }

    //save new user
    const user = new rankModel({ rankcode, rankname, isActive });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "New Rank Master Created",
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
exports.getAllRank = async (req, res) => {
  try {
    const users = await rankModel.find({});
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
      message: "Error In Get ALl RankMaster",
      error,
    });
  }
};
