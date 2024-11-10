import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "./pages/Feedback";
import Foodies from "./pages/Foodies";
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodies" element={<Foodies />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
