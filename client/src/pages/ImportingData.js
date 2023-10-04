import React from "react";
// import "../colors/color1.css";
// import "../colors/color1.scss";

const ImportingData = () => {
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
                          Import Excel
                        </li>
                      </ol>
                    </div>
                  </div>
                  {/* <!-- PAGE-HEADER END --> */}
                  <form method="post" class="card">
                    <div class="card-header">
                      <h3 class="card-title">Import Student </h3>
                    </div>
                    <div class=" card-body">
                      <div class="row mb-5">
                        <div class="col-lg-12 col-sm-12 mb-4 mb-lg-0">
                          <div class="dropify-wrapper">
                            <div class="dropify-message">
                              <span class="file-icon">
                                {" "}
                                <p>Drag and drop a file here or click</p>
                              </span>
                              <p class="dropify-error">
                                Ooops, something wrong appended.
                              </p>
                            </div>
                            <div class="dropify-loader"></div>
                            <div class="dropify-errors-container">
                              <ul></ul>
                            </div>
                            <input
                              type="file"
                              class="dropify"
                              data-bs-height="180"
                            />
                            <button type="button" class="dropify-clear">
                              Remove
                            </button>
                            <div class="dropify-preview">
                              <span class="dropify-render"></span>
                              <div class="dropify-infos">
                                <div class="dropify-infos-inner">
                                  <p class="dropify-filename">
                                    <span class="dropify-filename-inner"></span>
                                  </p>
                                  <p class="dropify-infos-message">
                                    Drag and drop or click to replace
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer bg-default m-0">
                      <button class="btn btn-default pull-right">
                        <i class="fa fa-times me-1 text-dark"></i>Close
                      </button>
                      <button class="btn btn-primary pull-right me-2">
                        {" "}
                        <i class="fa fa-floppy-o me-1"></i> Save
                      </button>
                    </div>
                  </form>

                  <div class="card" id="view-list">
                    <div class="card-header bg-primary text-white">
                      <h3 class="card-title col-md-10">
                        <i class="fa fa-list me-2"></i> Student List
                      </h3>
                    </div>
                    <div class="">
                      <table class="table table-bordered border-bottom text-nowrap table-responsive">
                        <thead class="bg-gray">
                          <tr>
                            <th class="w-5 border-bottom-0 text-white">SNo.</th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Student Code
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Student Name{" "}
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Parents Name
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Class
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Gender
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              School Code
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              School Name
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              PIN
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              State
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              City
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Total Quetion
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Attempted
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Wrong
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Score
                            </th>
                            <th class="w-10 border-bottom-0 text-white text-center">
                              Status
                            </th>
                            <th class="w-10 border-bottom-0 text-white text-center">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">1</td>
                            <td>ST15</td>
                            <td>Ravi Shankar Sharma</td>
                            <td>Rameshwar Sharma</td>
                            <td>9</td>
                            <td>Male</td>
                            <td>UPSCH01</td>
                            <td>O.F. Inter college</td>
                            <td>208001</td>
                            <td>Uttar Pradesh</td>
                            <td>Kanpur Nagar</td>
                            <td>30</td>
                            <td>25</td>
                            <td>5</td>
                            <td>25</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">2</td>
                            <td>ST15</td>
                            <td>Kamal</td>
                            <td>K Sharma</td>
                            <td>3</td>
                            <td>Male</td>
                            <td>DLSCH05</td>
                            <td>St.Thomas School</td>
                            <td>110005</td>
                            <td>Delhi</td>
                            <td>New Delhi</td>
                            <td>30</td>
                            <td>28</td>
                            <td>2</td>
                            <td>28</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">3</td>
                            <td>ST14</td>
                            <td>Suresh</td>
                            <td>K Sharma</td>
                            <td>3</td>
                            <td>Male</td>
                            <td>DLSCH04</td>
                            <td>Chinmaya Vidyalaya</td>
                            <td>110004</td>
                            <td>Delhi</td>
                            <td>New Delhi</td>
                            <td>30</td>
                            <td>29</td>
                            <td>1</td>
                            <td>29</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">4</td>
                            <td>ST13</td>
                            <td>Mahesh</td>
                            <td>K Sharma</td>
                            <td>5</td>
                            <td>Male</td>
                            <td>DLSCH04</td>
                            <td>Chinmaya Vidyalaya</td>
                            <td>110004</td>
                            <td>Delhi</td>
                            <td>New Delhi</td>
                            <td>30</td>
                            <td>30</td>
                            <td>0</td>
                            <td>30</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">5</td>
                            <td>ST12</td>
                            <td>Sohan</td>
                            <td>K Sharma</td>
                            <td>5</td>
                            <td>Male</td>
                            <td>DLSCH03</td>
                            <td>Amity International School.</td>
                            <td>110003</td>
                            <td>Delhi</td>
                            <td>New Delhi</td>
                            <td>30</td>
                            <td>10</td>
                            <td>20</td>
                            <td>10</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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

export default ImportingData;
