import React from "react";
import Landing from "./Screens/Landing/Landing";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsList from "./Screens/JobsList/JobsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/jobsList" element={<JobsList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
