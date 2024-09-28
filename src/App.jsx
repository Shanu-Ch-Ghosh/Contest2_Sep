import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputField from "./Components/InputField";
import DisplayData from "./Components/DisplayData";

const App = () => {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputField setData={setData} />} />
        <Route path="/displaydata" element={<DisplayData data={data} />} />
      </Routes>
    </Router>
  );
};

export default App;
