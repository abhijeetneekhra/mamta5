const studentModel = require("../models/studentModel");

//create user register user
exports.studentCreateController = async (req, res) => {
  try {
    const {
      studentcode,
      studentname,
      parentsname,
      mobile,
      classs,
      gender,
      schoolcode,
      schoolname,
      pin,
      state,
      district,
      totalquestion,
      correctanswer,
      notattempted,
      neatness,
      score,
      percentage,
      isActive,
    } = req.body;
    //validation
    if (
      !studentcode ||
      !studentname ||
      !parentsname ||
      !mobile ||
      !classs ||
      !gender ||
      !schoolcode ||
      !schoolname ||
      !pin ||
      !state ||
      !district ||
      !totalquestion ||
      !correctanswer ||
      !notattempted ||
      !neatness ||
      !score ||
      !percentage
    ) {
      return res.status(400).send({
        success: false,
        message: "Please Fill all the fields",
      });
    }

    //save new user
    const user = new studentModel({
      studentcode,
      studentname,
      parentsname,
      mobile,
      classs,
      gender,
      schoolcode,
      schoolname,
      pin,
      state,
      district,
      totalquestion,
      correctanswer,
      notattempted,
      neatness,
      score,
      percentage,
      isActive,
    });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "New Student Master Created",
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
exports.getAllStudents = async (req, res) => {
  try {
    const users = await studentModel.find({});
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
      message: "Error In Get ALl StudentMaster",
      error,
    });
  }
};
