import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    //let token = localStorage.getItem("token");
    if (!login) {
      navigate("/login2");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
