const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
var bodyParser = require("body-parser");

//.env config
dotenv.config();

//router import
const stateRoutes = require("./routes/stateRoutes");
const districtRoutes = require("./routes/districtRoutes");
const studentRoutes = require("./routes/studentRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const rankRoutes = require("./routes/rankRoutes");
const partnerRoutes = require("./routes/partnerRoutes");
const adminRoutes = require("./routes/adminRoutes");

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/api/v1/state", stateRoutes);
app.use("/api/v1/district", districtRoutes);
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/school", schoolRoutes);
app.use("/api/v1/score", scoreRoutes);
app.use("/api/v1/rank", rankRoutes);
app.use("/api/v1/partner", partnerRoutes);
app.use("/api/v1/admin", adminRoutes);

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan
      .white
  );
});
