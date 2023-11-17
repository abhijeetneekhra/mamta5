import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StateMaster from "./pages/StateMaster";
import Dashboard from "./pages/Dashboard";
import DistrictMaster from "./pages/DistrictMaster";
import SchoolMaster from "./pages/SchoolMaster";
import StudentMaster from "./pages/StudentMaster";
import ScoreMaster from "./pages/ScoreMaster";
import RankMaster from "./pages/RankMaster";
import ScoreList from "./pages/ScoreList";
import PartnerMaster from "./pages/PartnerMaster";
import ImportingData from "./pages/ImportingData";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Protected from "./pages/Protected";
import Login2 from "./pages/Login2";
import StudentMaster2 from "./pages/StudentMaster2";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Protected Component={Dashboard} />} />
        <Route
          path="/statemaster"
          element={<Protected Component={StateMaster} />}
        />
        <Route
          path="/districtmaster"
          element={<Protected Component={DistrictMaster} />}
        />
        <Route
          path="/schoolmaster"
          element={<Protected Component={SchoolMaster} />}
        />
        <Route
          path="/studentmaster"
          element={<Protected Component={StudentMaster} />}
        />
        <Route
          path="/studentmaster2"
          element={<Protected Component={StudentMaster2} />}
        />
        <Route
          path="/scoremaster"
          element={<Protected Component={ScoreMaster} />}
        />
        <Route
          path="/rankmaster"
          element={<Protected Component={RankMaster} />}
        />
        <Route
          path="/partnermaster"
          element={<Protected Component={PartnerMaster} />}
        />
        <Route
          path="/scorelist"
          element={<Protected Component={ScoreList} />}
        />
        <Route
          path="/importingdata"
          element={<Protected Component={ImportingData} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
