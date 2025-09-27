import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./components/Context/DataContext";
import Hompage from "./components/Pages/Hompage";
import SecondPage from "./components/Pages/SecondPage";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/Second-Page" element={<SecondPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
