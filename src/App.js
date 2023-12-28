import React from "react";
import Landing from "./Screens/Landing/Landing";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsList from "./Screens/JobsList/JobsList";
import CreateJob from "./Screens/CreateJob/CreateJob";
import AboutJob from "./Screens/AboutJob/AboutJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/jobsList" element={<JobsList />}></Route>
        <Route path="/createJob" element={<CreateJob />}></Route>
        <Route path="/aboutJob" element={<AboutJob />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
