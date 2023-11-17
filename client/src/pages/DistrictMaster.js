import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const columns = [
  { dataField: "state", text: "State ID", sort: true },
  { dataField: "statename", text: "State Name", sort: true },
  { dataField: "districtcode", text: "Dist ABBR.", sort: true },
  { dataField: "districtname", text: "District Name", sort: true },
  { dataField: "isActive", text: "Status", formatter: statusFormatter },
  { dataField: "_id", text: "Action", formatter: actionFormatter },
];

// Process the returned data in the formatter
function statusFormatter(cell, row, rowIndex, formatExtraData) {
  return <span class="badge bg-success">{cell ? "Active" : "Inactive"}</span>;
}

// Process the returned data in the formatter
function actionFormatter(cell, row, rowIndex, formatExtraData) {
  return (
    <a class="btn btn-info action_btn" href="#">
      <i class="fa fa-unlock fa-sm"></i>
    </a>
  );
}

const defaultSorted = [
  {
    dataField: "scorename",
    order: "asc",
  },
];

const pagination = paginationFactory({
  page: 1,
  sizePerPage: 5,
  nextPageText: "Next",
  prePageText: "Previous",
  showTotal: true,
  withFirstAndLast: false,
});

const rowStyle = { backgroundColor: "#FFFFFF" };

const { SearchBar, ClearSearchButton } = Search;

const DistrictMaster = () => {
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
    districtcode: "",
    districtname: "",
    state: "",
  });

  const [users, setUsers] = useState([]);

  const MySearch = (props) => {
    let input;
    const handleClick = () => {
      props.onSearch(input.value);
    };
    return (
      <div className="input-group p-0">
        <input
          className="form-control"
          ref={(n) => (input = n)}
          type="text"
          placeholder="Search for..."
        />
        <button
          className="input-group-text btn btn-primary"
          onClick={handleClick}
        >
          Go
        </button>
      </div>
    );
  };

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

  //form handle
  const handleSubmit = async (e) => {
    try {
      const { data } = await axios.post("/api/v1/district/register", {
        districtcode: inputs.districtcode,
        districtname: inputs.districtname,
        isActive: isChecked,
        state: inputs.state,
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
      const { data } = await axios.get("/api/v1/district/all-districts");
      if (data?.success) {
        //console.log("users ", users);

        data.users.forEach((value) => {
          // console.log("value.state = " + value.state);
          switch (value.state) {
            case "1":
              value.statename = "Uttar Pradesh";
              break;
            case "2":
              value.statename = "Madhya Pradesh";
              break;
            case "3":
              value.statename = "Andhra Pradesh";
              break;
            case "4":
              value.statename = "Orissa";
              break;
            case "5":
              value.statename = "Chattisgarh";
              break;
            default:
              value.statename = "No value found";
          }
        });

        setUsers(data.users);
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
                          District
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
                        <i className="fa fa-list me-2"></i> District List
                      </h3>
                    </div>

                    <ToolkitProvider
                      bootstrap4
                      keyField="_id"
                      data={users}
                      columns={columns}
                      search
                    >
                      {(props) => (
                        <div>
                          <div className="card mb-0">
                            <div className="card-header bg-success-transparent">
                              <h4 className="card-title col-md-9">
                                <i className="fa fa-filter me-2"></i> Search
                                Filters
                              </h4>
                              <div className="input-group col-md-3 p-0">
                                <MySearch {...props.searchProps} />
                              </div>
                            </div>
                          </div>

                          {/* <!-- ROW-5 --> */}

                          <div className="row">
                            <div className="col-12 col-sm-12">
                              <div className="card">
                                <div className="card-header">
                                  <h3 className="card-title mb-0">
                                    Student Records
                                  </h3>
                                </div>
                                <div className="card-body">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      rowStyle={rowStyle}
                                      defaultSorted={defaultSorted}
                                      pagination={pagination}
                                      {...props.baseProps}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- COL END --> */}
                          </div>
                          {/* <!-- ROW-5 END --> */}
                        </div>
                      )}
                    </ToolkitProvider>
                  </div>

                  {/* <!--------------START add Industry Type Form-----------------> */}
                  <div id="add-form" style={{ display: "none" }}>
                    <div className="card">
                      <div className="card-header bg-primary text-white">
                        <h3 className="card-title col-md-10">
                          <i className="fa fa-plus-circle me-2"></i>Create
                          District
                        </h3>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <label className="form-label">
                              State<span className="text-red">*</span>
                            </label>
                            <select
                              className="form-control"
                              value={inputs.state}
                              onChange={handleChange}
                              name="state"
                            >
                              <option value="Select State">Select State</option>
                              <option value="1">Uttar Pradesh</option>
                              <option value="2">Madhya Pradesh</option>
                              <option value="3">Andhra Pradesh</option>
                              <option value="4">Orissa</option>
                              <option value="5">Chattisgarh</option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              District Code<span className="text-red">*</span>
                            </label>
                            <input
                              value={inputs.districtcode}
                              onChange={handleChange}
                              name="districtcode"
                              type="text"
                              className="form-control"
                              placeholder="Enter State Code"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              District Name<span className="text-red">*</span>
                            </label>
                            <input
                              value={inputs.districtname}
                              onChange={handleChange}
                              name="districtname"
                              type="text"
                              className="form-control"
                              placeholder="Enter State Name"
                            />
                          </div>

                          <div className="col-md-2">
                            <label className="form-label">
                              Is-Active<span className="text-red">*</span>
                            </label>
                            <input
                              type="checkbox"
                              id="checkbox"
                              checked={isChecked}
                              onChange={checkHandler}
                              className="cc-checkbox"
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
        {/* <!-- JQUERY JS -->
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

export default DistrictMaster;
