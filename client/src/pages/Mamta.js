import React from "react";

const Mamta = () => {
  return (
    <div class="main-content app-content mt-0">
      <div class="side-app">
        {/* <!-- CONTAINER --> */}
        <div class="main-container container-fluid">
          {/* <!-- PAGE-HEADER --> */}
          <div class="page-header">
            <div>
              <h1 class="page-title">Dashboard 01</h1>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Dashboard 01
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- PAGE-HEADER END --> */}

          {/* <!-- ROW-1 --> */}
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div class="card overflow-hidden">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h6 class="">Total Patners</h6>
                          <h3 class="mb-2 number-font">36</h3>
                        </div>
                        <div class="col col-auto">
                          <div class="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
                            <i class="fe fe-trending-up text-white mb-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div class="card overflow-hidden">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-8">
                          <h6 class="">Total Student</h6>
                          <h3 class="mb-2 number-font">1,200,000</h3>
                        </div>
                        <div class="col-4 col-auto">
                          <div class="counter-icon bg-danger-gradient box-shadow-danger brround ms-auto">
                            <i class="icon icon-rocket text-white mb-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div class="card overflow-hidden">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h6 class="">Completed State List</h6>
                          <h3 class="mb-2 number-font">20</h3>
                        </div>
                        <div class="col col-auto">
                          <div class="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto">
                            <i class="fe fe-dollar-sign text-white mb-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                  <div class="card overflow-hidden">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h6 class="">In-Complete State List</h6>
                          <h3 class="mb-2 number-font">16</h3>
                        </div>
                        <div class="col col-auto">
                          <div class="counter-icon bg-success-gradient box-shadow-success brround ms-auto">
                            <i class="fe fe-briefcase text-white mb-5"></i>
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

          {/* <!-- ROW-5 --> */}
          <div class="row">
            <div class="col-12 col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title mb-0">Student Records</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table
                      id="data-table"
                      class="table table-bordered text-nowrap mb-0"
                    >
                      <thead class="border-top">
                        <tr>
                          <th class="bg-transparent border-bottom-0 w-5 text-center">
                            Levels
                          </th>
                          <th class="bg-transparent border-bottom-0 text-center">
                            51-60%
                          </th>
                          <th class="bg-transparent border-bottom-0 text-center">
                            61-70%
                          </th>
                          <th class="bg-transparent border-bottom-0 text-center">
                            71-80%
                          </th>
                          <th class="bg-transparent border-bottom-0 text-center">
                            81-90%
                          </th>
                          <th class="bg-transparent border-bottom-0 text-center">
                            91-100%
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-bottom">
                          <td class="fs-15 fw-bold text-center">
                            Level 1 (I-II)
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr class="border-bottom">
                          <td class="fs-15 fw-bold text-center">
                            Level 2(III-IV)
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr class="border-bottom">
                          <td class="fs-15 fw-bold text-center">
                            Level 3(V-VI)
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr class="border-bottom">
                          <td class="fs-15 fw-bold text-center">
                            Level 4(VII-VIII)
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr class="border-bottom">
                          <td class="fs-15 fw-bold text-center">
                            Level 5(IX-X)
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
                            <a href="#">Click Here</a>
                          </td>
                          <td class="text-center">
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

export default Mamta;
