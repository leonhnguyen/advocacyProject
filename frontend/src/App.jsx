import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

import './App.css'
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Cause from "./pages/Cause";
import Research from "./pages/Research";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/cause" element={<Cause />} />
        <Route path="/research" element={<Research />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;