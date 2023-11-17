import React, { useState, useLayoutEffect, useEffect } from "react";
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
  { dataField: "rankcode", text: "STATE ABBR.", sort: true },
  { dataField: "rankname", text: "State Name", sort: true },
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
    dataField: "rankname",
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

const RankMaster = () => {
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
    rankcode: "",
    rankname: "",
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

  const [isLoading, setLoading] = useState(true); // Loading state

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
      const { data } = await axios.post("/api/v1/rank/register", {
        rankcode: inputs.rankcode,
        rankname: inputs.rankname,
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
      const { data } = await axios.get("/api/v1/rank/all-ranks");
      if (data?.success) {
        setUsers(data.users);
        setLoading(false); //set loading state
        console.log(data);
        //console.log("users ", users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
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
            <div class="main-content app-content mt-0">
              <div class="side-app">
                {/* <!-- CONTAINER --> */}
                <div class="main-container container-fluid">
                  {/* <!-- PAGE-HEADER --> */}
                  <div class="page-header">
                    <div>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="index.html">Master</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          {" "}
                          Rank
                        </li>
                      </ol>
                    </div>
                    <div class="ms-auto pageheader-btn">
                      <button
                        class="btn btn-primary pull-right"
                        id="add-industry-btn"
                        onClick={show}
                      >
                        <i class="fa fa-plus-circle me-1"></i>Create New
                      </button>
                      <button
                        class="btn btn-primary  pull-right"
                        id="view-list-btn"
                        onClick={show1}
                        style={{ display: "none" }}
                      >
                        <i class="fa fa-angle-double-left  me-1"></i> Back to
                        List
                      </button>
                    </div>
                  </div>
                  {/* <!-- PAGE-HEADER END --> */}

                  <div class="card" id="view-list">
                    <div class="card-header bg-primary text-white">
                      <h3 class="card-title col-md-10">
                        <i class="fa fa-list me-2"></i> Rank List
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
                    <div class="card">
                      <div class="card-header bg-primary text-white">
                        <h3 class="card-title col-md-10">
                          <i class="fa fa-plus-circle me-2"></i>Create Rank
                        </h3>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label class="form-label">
                              Rank Code<span class="text-red">*</span>
                            </label>
                            <input
                              value={inputs.rankcode}
                              onChange={handleChange}
                              name="rankcode"
                              type="text"
                              class="form-control"
                              placeholder="Enter Rank Code"
                            />
                          </div>
                          <div class="col-md-4">
                            <label class="form-label">
                              Rank Name<span class="text-red">*</span>
                            </label>
                            <input
                              value={inputs.rankname}
                              onChange={handleChange}
                              name="rankname"
                              type="text"
                              class="form-control"
                              placeholder="Enter Rank Name"
                            />
                          </div>

                          <div class="col-md-2">
                            <label class="form-label">
                              Is-Active<span class="text-red">*</span>
                            </label>
                            <input
                              type="checkbox"
                              class="cc-checkbox"
                              id="checkbox"
                              checked={isChecked}
                              onChange={checkHandler}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-footer bg-default m-0">
                        <button class="btn btn-default pull-right">
                          <i class="fa fa-times me-1 text-dark"></i>Close
                        </button>
                        <button
                          class="btn btn-primary pull-right me-2"
                          onClick={handleSubmit}
                        >
                          {" "}
                          <i class="fa fa-floppy-o me-1"></i> Save
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

export default RankMaster;
