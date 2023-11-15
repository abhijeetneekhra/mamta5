import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Gender", "Male or Female"],
  ["Male", 47.8],
  ["Female", 52.2],
];

const data2 = [
  ["Task", "Hours per Day"],
  ["Students with less than 50%", 48.8],
  ["Students with more than 50%", 51.2],
];

const data3 = [
  ["Task", "Hours per Day"],
  ["Level 1 (I-II)", 23],
  ["Level 2 (III-IV)", 21.5],
  ["Level 3 (V-VI)", 18.7],
  ["Level 4 (VII-VIII)", 12.2],
  ["Level 5 (IX-X)", 24.6],
];

const options = {
  title: "Gender of Students",
  titleTextStyle: {
    color: "black",
    fontName: "Roboto",
    fontSize: 14,
    bold: false,
    italic: false,
  },
};

const options2 = {
  title: "Score Depiction",
  titleTextStyle: {
    color: "black",
    fontName: "Roboto",
    fontSize: 14,
    bold: false,
    italic: false,
  },
};

const options3 = {
  title: "Class Wise Student Distribution",
  titleTextStyle: {
    color: "black",
    fontName: "Roboto",
    fontSize: 14,
    bold: false,
    italic: false,
  },
};

const Dashboard = () => {
  return (
    <div className="main-content app-content mt-0">
      <div className="side-app">
        {/* <!-- CONTAINER --> */}
        <div
          className="main-container container-fluid"
          // style={{ paddingTop: "148px" }}
        >
          {/* <!-- PAGE-HEADER --> */}
          <div className="page-header">
            <div>
              <h1 className="page-title">Dashboard 01</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard 01
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- PAGE-HEADER END --> */}

          {/* <!-- ROW-1 --> */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h6 className="">Total Patners</h6>
                          <h3 className="mb-2 number-font">36</h3>
                        </div>
                        <div className="col col-auto">
                          <div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
                            <i className="fe fe-trending-up text-white mb-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-8">
                          <h6 className="">Total Student</h6>
                          <h3 className="mb-2 number-font">1,200,000</h3>
                        </div>
                        <div className="col-4 col-auto">
                          <div className="counter-icon bg-danger-gradient box-shadow-danger brround ms-auto">
                            <i className="icon icon-rocket text-white mb-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h6 className="">Completed State List</h6>
                          <h3 className="mb-2 number-font">20</h3>
                        </div>
                        <div className="col col-auto">
                          <div className="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto">
                            <i className="fe fe-dollar-sign text-white mb-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h6 className="">In-Complete State List</h6>
                          <h3 className="mb-2 number-font">16</h3>
                        </div>
                        <div className="col col-auto">
                          <div className="counter-icon bg-success-gradient box-shadow-success brround ms-auto">
                            <i className="fe fe-briefcase text-white mb-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ROW-1 END --> */}

          {/* <!-- ROW-2 --> */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xl-4">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"400px"}
                        height={"300px"}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xl-4">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <Chart
                        chartType="PieChart"
                        data={data2}
                        options={options2}
                        width={"400px"}
                        height={"300px"}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xl-4">
                  <div className="card overflow-hidden">
                    <div className="card-body">
                      <Chart
                        chartType="PieChart"
                        data={data3}
                        options={options3}
                        width={"400px"}
                        height={"300px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ROW-1 END --> */}

          {/* <!-- ROW-5 --> */}
          <div className="row">
            <div className="col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title mb-0">Student Records</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="data-table"
                      className="table table-bordered text-nowrap mb-0"
                    >
                      <thead className="border-top">
                        <tr>
                          <th className="bg-transparent border-bottom-0 w-5 text-center">
                            Levels
                          </th>
                          <th className="bg-transparent border-bottom-0 text-center">
                            51-60%
                          </th>
                          <th className="bg-transparent border-bottom-0 text-center">
                            61-70%
                          </th>
                          <th className="bg-transparent border-bottom-0 text-center">
                            71-80%
                          </th>
                          <th className="bg-transparent border-bottom-0 text-center">
                            81-90%
                          </th>
                          <th className="bg-transparent border-bottom-0 text-center">
                            91-100%
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-bottom">
                          <td className="fs-15 fw-bold text-center">
                            Level 1 (I-II)
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="fs-15 fw-bold text-center">
                            Level 2(III-IV)
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="fs-15 fw-bold text-center">
                            Level 3(V-VI)
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="fs-15 fw-bold text-center">
                            Level 4(VII-VIII)
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="fs-15 fw-bold text-center">
                            Level 5(IX-X)
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td className="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- COL END --> */}
          </div>
          {/* <!-- ROW-5 END --> */}
        </div>
        {/* <!-- CONTAINER END --> */}
      </div>
    </div>
  );
};

export default Dashboard;
