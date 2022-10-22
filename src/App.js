import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gym from "./components/Gym/Gym";
import Home from "./components/Home";

function App() {
  const [arr, setArr] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setArr={setArr} />} />
        <Route path="/:id" element={<Gym arr={arr} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;