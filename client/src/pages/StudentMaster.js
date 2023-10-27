import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { CSVLink } from "react-csv";

const StudentMaster = () => {
  function show1(str) {
    document.getElementById("add-industry-btn").style.display = "block";
    document.getElementById("view-list-btn").style.display = "none";
    document.getElementById("view-list").style.display = "block";
    document.getElementById("add-form").style.display = "none";
  }
  function show(str) {
    document.getElementById("add-industry-btn").style.display = "none";
    document.getElementById("view-list-btn").style.display = "block";
    document.getElementById("add-form").style.display = "block";
    document.getElementById("view-list").style.display = "none";
  }

  const [inputs, setInputs] = useState({
    studentcode: "",
    studentname: "",
    parentsname: "",
    mobile: "",
    classs: "",
    gender: "",
    schoolcode: "",
    schoolname: "",
    pin: "",
    state: "",
    district: "",
    totalquestion: "",
    correctanswer: "",
    notattempted: "",
    neatness: "",
    score: "",
    percentage: "",
  });

  const [users, setUsers] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //console.log(inputs.statecode, inputs.statename, isChecked);

  //form handle
  const handleSubmit = async (e) => {
    try {
      const { data } = await axios.post("/api/v1/student/register", {
        studentcode: inputs.studentcode,
        studentname: inputs.studentname,
        parentsname: inputs.parentsname,
        mobile: inputs.mobile,
        classs: inputs.classs,
        gender: inputs.gender,
        schoolcode: inputs.schoolcode,
        schoolname: inputs.schoolname,
        pin: inputs.pin,
        state: inputs.state,
        district: inputs.district,
        totalquestion: inputs.totalquestion,
        correctanswer: inputs.correctanswer,
        notattempted: inputs.notattempted,
        neatness: inputs.neatness,
        score: inputs.score,
        percentage: inputs.percentage,
        isActive: isChecked,
      });
      if (data.success) {
        toast.success("User Saved Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/student/all-students");
      if (data?.success) {
        setUsers(data.users);
        //console.log("users ", users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      <div className="app sidebar-mini ltr light-mode">
        {/* <!-- GLOBAL-LOADER --> */}
        {/* <div id="global-loader">
          <img src="assets/images/loader.svg" className="loader-img" alt="Loader" />
        </div> */}
        {/* <!-- /GLOBAL-LOADER --> */}

        {/* <!-- PAGE --> */}
        <div className="page">
          <div className="page-main">
            {/* <!-- app-Header --> */}

            {/* <!-- /app-Header --> */}

            {/* <!--APP-SIDEBAR--> */}

            {/* <!--/APP-SIDEBAR--> */}

            {/* <!--app-content open--> */}
            <div className="main-content app-content mt-0">
              <div className="side-app">
                {/* <!-- CONTAINER --> */}
                <div className="main-container container-fluid">
                  {/* <!-- PAGE-HEADER --> */}
                  <div className="page-header">
                    <div>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="index.html">Master</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          {" "}
                          Student List
                        </li>
                      </ol>
                    </div>
                    <div className="ms-auto pageheader-btn">
                      <button
                        className="btn btn-primary pull-right"
                        id="add-industry-btn"
                        onClick={show}
                      >
                        <i className="fa fa-plus-circle me-1"></i>Create New
                      </button>
                      <button
                        className="btn btn-primary  pull-right"
                        id="view-list-btn"
                        onClick={show1}
                        style={{ display: "none" }}
                      >
                        <i className="fa fa-angle-double-left  me-1"></i> Back
                        to List
                      </button>
                    </div>
                  </div>
                  {/* <!-- PAGE-HEADER END --> */}
                  <div className="card" id="view-list">
                    <div className="card-header bg-primary text-white">
                      <h3 className="card-title col-md-10">
                        <i className="fa fa-list me-2"></i> Student List
                      </h3>
                    </div>

                    <div className="card mb-0">
                      <div className="card-header bg-success-transparent">
                        <h4 className="card-title col-md-3">
                          <i className="fa fa-filter me-2"></i> Search Filters
                        </h4>
                        <div className="input-group col-md-2 p-0">
                          <select className="form-control">
                            <option value="Select State">Select State</option>
                          </select>
                        </div>
                        &nbsp;&nbsp;
                        <div className="input-group col-md-2 p-0">
                          <select className="form-control">
                            <option value="Select District">
                              Select District
                            </option>
                          </select>
                        </div>
                        &nbsp;&nbsp;
                        <div className="input-group col-md-2 p-0">
                          <span className="input-group-text btn btn-primary">
                            Go!
                          </span>
                        </div>
                        <div className="input-group col-md-2 p-0">
                          <CSVLink
                            type="button"
                            class="btn btn-success btn-lg"
                            data={users}
                            filename={"student-registrations.csv"}
                            style={{ margin: "11px" }}
                          >
                            Export All
                          </CSVLink>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered border-bottom text-nowrap">
                        <thead className="bg-gray">
                          <tr>
                            <th className="w-5 border-bottom-0 text-white">
                              SNo.
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Student Code
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Student Name
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Parents Name
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Mobile
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Class
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Gender
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              School Code
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              School Name
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Pin
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              State
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              District
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Total Question
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Correct Answer
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Not Attempted
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Neatness
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Score
                            </th>
                            <th className="wd-15p border-bottom-0 text-white">
                              Percentage
                            </th>
                            <th className="w-10 border-bottom-0 text-white text-center">
                              Status
                            </th>
                            <th className="w-10 border-bottom-0 text-white text-center">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((value, key) => {
                            return (
                              <tr key={key}>
                                <td className="text-center">{key + 1}</td>
                                <td>{value.studentcode}</td>
                                <td>{value.studentname}</td>
                                <td>{value.parentsname}</td>
                                <td>{value.mobile}</td>
                                <td>{value.classs}</td>
                                <td>{value.gender}</td>
                                <td>{value.schoolcode}</td>
                                <td>{value.schoolname}</td>
                                <td>{value.pin}</td>
                                <td>{value.state}</td>
                                <td>{value.district}</td>
                                <td>{value.totalquestion}</td>
                                <td>{value.correctanswer}</td>
                                <td>{value.notattempted}</td>
                                <td>{value.neatness}</td>
                                <td>{value.score}</td>
                                <td>{value.percentage}</td>
                                <td className="text-center">
                                  <span className="badge bg-success">
                                    {value.isActive ? "Active" : "Inactive"}
                                  </span>
                                </td>
                                <td className="text-center">
                                  <a
                                    className="btn btn-info action_btn"
                                    href="#"
                                  >
                                    <i className="fa fa-unlock fa-sm"></i>
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                          {/* <tr>
                            <td className="text-center">2</td>
                            <td>SCH-002</td>
                            <td>School Name</td>
                            <td>Uttar Pradesh</td>
                            <td>Agra</td>
                            <td>Address</td>
                            <td>208022</td>
                            <td className="text-center">
                              <span className="badge bg-success">Active</span>
                            </td>
                            <td className="text-center">
                              <a className="btn btn-info action_btn" href="#">
                                <i className="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td>SCH-003</td>
                            <td>School Name</td>
                            <td>Uttar Pradesh</td>
                            <td>Agra</td>
                            <td>Address</td>
                            <td>208023</td>
                            <td className="text-center">
                              <span className="badge bg-success">Active</span>
                            </td>
                            <td className="text-center">
                              <a className="btn btn-info action_btn" href="#">
                                <i className="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <!--------------START add Industry Type Form-----------------> */}
                  <div id="add-form" style={{ display: "none" }}>
                    <div className="card">
                      <div className="card-header bg-primary text-white">
                        <h3 className="card-title col-md-10">
                          <i className="fa fa-plus-circle me-2"></i>Create
                          Student
                        </h3>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <label className="form-label">
                              Student Code<span className="text-red">*</span>
                            </label>
                            <input
                              value={inputs.studentcode}
                              onChange={handleChange}
                              name="studentcode"
                              type="text"
                              className="form-control"
                              placeholder="Enter Student Code"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Student Name<span className="text-red">*</span>
                            </label>
                            <input
                              value={inputs.studentname}
                              onChange={handleChange}
                              name="studentname"
                              type="text"
                              className="form-control"
                              placeholder="Enter Student Name"
                            />
                          </div>
                          {/* <div className="col-md-4">
                            <label className="form-label">
                              School<span className="text-red">*</span>
                            </label>
                            <select
                              className="form-control"
                              name="schoolname"
                              value={inputs.schoolname}
                              onChange={handleChange}
                            >
                              <option value="Select School">
                                Select School
                              </option>
                              <option Value="DPS">DPS</option>
                              <option Value="St. Aloysius">St.Aloysius</option>
                            </select>
                          </div> */}
                          <div className="col-md-4">
                            <label className="form-label">
                              Parents Name<span className="text-red">*</span>
                            </label>
                            <input
                              value={inputs.parentsname}
                              onChange={handleChange}
                              name="parentsname"
                              type="text"
                              className="form-control"
                              placeholder="Enter Parents Name"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Mobile<span className="text-red">*</span>
                            </label>
                            <input
                              value={inputs.mobile}
                              onChange={handleChange}
                              name="mobile"
                              type="text"
                              className="form-control"
                              placeholder="Enter Mobile No."
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Class<span className="text-red">*</span>
                            </label>
                            <input
                              value={inputs.classs}
                              onChange={handleChange}
                              name="classs"
                              type="text"
                              className="form-control"
                              placeholder="Enter Class"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Gender<span className="text-red">*</span>
                            </label>
                            <select
                              className="form-control"
                              name="gender"
                              value={inputs.gender}
                              onChange={handleChange}
                            >
                              <option value="Select Gender">
                                Select Gender
                              </option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Transgender">Transgender</option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              School code<span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter School Code"
                              value={inputs.schoolcode}
                              name="schoolcode"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              School Name<span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter School Name"
                              value={inputs.schoolname}
                              name="schoolname"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Pin<span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Pin"
                              value={inputs.pin}
                              name="pin"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              State
                              <span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter State Name"
                              value={inputs.state}
                              name="state"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              District
                              <span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter District Name"
                              value={inputs.district}
                              name="district"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Total Question<span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Total Question"
                              value={inputs.totalquestion}
                              name="totalquestion"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Correct Answer<span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Correct Answer"
                              value={inputs.correctanswer}
                              name="correctanswer"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Not Attempted
                              <span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Not Attempted"
                              value={inputs.notattempted}
                              name="notattempted"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Neatness
                              <span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Neatness"
                              value={inputs.neatness}
                              name="neatness"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Score
                              <span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Score"
                              value={inputs.score}
                              name="score"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Percentage
                              <span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Percentage"
                              value={inputs.percentage}
                              name="percentage"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-2">
                            <label className="form-label">
                              Is-Active<span className="text-red">*</span>
                            </label>
                            <input
                              type="checkbox"
                              className="cc-checkbox"
                              id="checkbox"
                              checked={isChecked}
                              onChange={checkHandler}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-default m-0">
                        <button className="btn btn-default pull-right">
                          <i className="fa fa-times me-1 text-dark"></i>Close
                        </button>
                        <button
                          className="btn btn-primary pull-right me-2"
                          onClick={handleSubmit}
                        >
                          {" "}
                          <i className="fa fa-floppy-o me-1"></i> Save
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!--------------END add Industry Type Form-----------------> */}
                </div>

                {/* <!-- End Row --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!--app-content end--> */}

        {/* <!-- FOOTER --> */}

        {/* <!-- FOOTER END --> */}

        {/* <!-- BACK-TO-TOP --> */}
        <a href="#top" id="back-to-top">
          <i className="fa fa-angle-up"></i>
        </a>
        {/*<!-- JQUERY JS -->
    <script src="assets/js/jquery.min.js"></script>

    <!-- BOOTSTRAP JS -->
    <script src="assets/plugins/bootstrap/js/popper.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

    <!-- SPARKLINE JS-->
    <script src="assets/js/jquery.sparkline.min.js"></script>

    <!-- CHART-CIRCLE JS-->
    <script src="assets/js/circle-progress.min.js"></script>

    <!-- CHARTJS CHART JS-->
    <script src="assets/plugins/chart/Chart.bundle.js"></script>
    <script src="assets/plugins/chart/utils.js"></script>

    <!-- PIETY CHART JS-->
    <script src="assets/plugins/peitychart/jquery.peity.min.js"></script>
    <script src="assets/plugins/peitychart/peitychart.init.js"></script>

    <!-- INTERNAL SELECT2 JS -->
    <script src="assets/plugins/select2/select2.full.min.js"></script>

    <!-- INTERNAL Data tables js-->
    <script src="assets/plugins/datatable/js/jquery.dataTables.min.js"></script>
    <script src="assets/plugins/datatable/js/dataTables.bootstrap5.js"></script>
    <script src="assets/plugins/datatable/dataTables.responsive.min.js"></script>

    <!-- ECHART JS-->
    <script src="assets/plugins/echarts/echarts.js"></script>

    <!-- SIDE-MENU JS-->
    <script src="assets/plugins/sidemenu/sidemenu.js"></script>

    <!-- Sticky js -->
    <script src="assets/js/sticky.js"></script>

    <!-- SIDEBAR JS -->
    <script src="assets/plugins/sidebar/sidebar.js"></script>

    <!-- Perfect SCROLLBAR JS-->
    <script src="assets/plugins/p-scroll/perfect-scrollbar.js"></script>
    <script src="assets/plugins/p-scroll/pscroll.js"></script>
    <script src="assets/plugins/p-scroll/pscroll-1.js"></script>

    <!-- APEXCHART JS -->
    <script src="assets/js/apexcharts.js"></script>

    <!-- INDEX JS -->
    <script src="assets/js/index1.js"></script>

    <!-- Color Theme js -->
    <script src="assets/js/themeColors.js"></script>

    <!-- CUSTOM JS -->
    <script src="assets/js/custom.js"></script> */}
      </div>
    </>
  );
};

export default StudentMaster;
