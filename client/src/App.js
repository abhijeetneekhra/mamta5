import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StateMaster from "./pages/StateMaster";
import Mamta from "./pages/Mamta";
import DistrictMaster from "./pages/DistrictMaster";
import SchoolMaster from "./pages/SchoolMaster";
import StudentMaster from "./pages/StudentMaster";
import ScoreMaster from "./pages/ScoreMaster";
import RankMaster from "./pages/RankMaster";
import ScoreList from "./pages/ScoreList";
import PartnerMaster from "./pages/PartnerMaster";
import ImportingData from "./pages/ImportingData";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Mamta />} />
        <Route path="/statemaster" element={<StateMaster />} />
        <Route path="/districtmaster" element={<DistrictMaster />} />
        <Route path="/schoolmaster" element={<SchoolMaster />} />
        <Route path="/studentmaster" element={<StudentMaster />} />
        <Route path="/scoremaster" element={<ScoreMaster />} />
        <Route path="/rankmaster" element={<RankMaster />} />
        <Route path="/partnermaster" element={<PartnerMaster />} />
        <Route path="/scorelist" element={<ScoreList />} />
        <Route path="/importingdata" element={<ImportingData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
