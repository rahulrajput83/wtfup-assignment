/* Imports */
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gym from "./components/Gym/Gym";
import Home from "./components/Home";

function App() {
  /* Near Gym Details Arr */
  const [arr, setArr] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home setArr={setArr} />} />
        {/* Specific gym details Route */}
        <Route path="/:id" element={<Gym arr={arr} />} />
      </Routes>
    </BrowserRouter>
  )
}

/* export */
export default App;