import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { CSVLink } from "react-csv";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const columns = [
  {
    dataField: "studentcode",
    text: "Student Code",
    sort: true,
    classes: "wd-15p border-bottom-0",
  },
  {
    dataField: "studentname",
    text: "Student Name",
    sort: true,
    classes: "wd-15p border-bottom-0",
  },
  {
    dataField: "parentsname",
    text: "Parents Name",
    sort: true,
    classes: "wd-15p border-bottom-0",
  },
  {
    dataField: "mobile",
    text: "Mobile",
    sort: true,
    classes: "wd-15p border-bottom-0",
  },
  {
    dataField: "classs",
    text: "Class",
    sort: true,
    classes: "wd-15p border-bottom-0",
  },
  {
    dataField: "gender",
    text: "Gender",
    sort: true,
    classes: "wd-15p border-bottom-0",
  },
  {
    dataField: "schoolcode",
    text: "School Code",
    sort: true,
    classes: "wd-15p border-bottom-0",
    headerStyle: () => {
      return { width: "10%", textAlign: "center" };
    },
  },
  {
    dataField: "schoolname",
    text: "School Name",
    sort: true,
    classes: "wd-15p border-bottom-0",
    headerStyle: (colum, colIndex) => {
      return { width: "200px", textAlign: "center" };
    },
  },
  { dataField: "pin", text: "Pin", sort: true },
  { dataField: "state", text: "State", sort: true },
  { dataField: "district", text: "District", sort: true },
  { dataField: "totalquestion", text: "Total Question", sort: true },
  { dataField: "correctanswer", text: "Correct Answer", sort: true },
  { dataField: "notattempted", text: "Not Attempted", sort: true },
  { dataField: "neatness", text: "Neatness", sort: true },
  { dataField: "score", text: "Score", sort: true },
  { dataField: "percentage", text: "Percentage", sort: true },
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
      <div>
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
                    <i className="fa fa-filter me-2"></i> Search Filters
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
                      <h3 className="card-title mb-0">Student Records</h3>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <BootstrapTable
                          rowStyle={rowStyle}
                          defaultSorted={defaultSorted}
                          pagination={pagination}
                          {...props.baseProps}
                          responsive
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
    </>
  );
};

export default StudentMaster;
