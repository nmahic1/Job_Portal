import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function CreateJob() {
  const [companyName, setcompanyName] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobCategory, setjobCategory] = useState({});
  const [jobLocation, setjobLocation] = useState("");
  const [experience, setExperience] = useState(0);
  const [applicationDeadline, setapplicationDeadline] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [jobType, setJobType] = useState({});
  const [salaryMin, setSalaryMin] = useState(0);
  const [salaryMax, setSalaryMax] = useState(0);
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const fetchData = async () => {
    console.log(process.env.REACT_APP_BACKEND_LINK);
    const result = await fetch(
      process.env.REACT_APP_BACKEND_LINK + "/category/load",
      {
        method: "GET",
        "Content-Type": "application/json",
      }
    );
    result.json().then((json) => {
      console.log("Fetching all items");
      console.log("cccc", json);
      setjobCategory(json.data);
      console.log("dddd", json.data);
      console.log("ovoooo", typeof jobCategory);
      console.log("toooo", Array.isArray(jobCategory));
    });
  };
  const token = localStorage.getItem("token");

  const fetchData1 = async () => {
    console.log(process.env.REACT_APP_BACKEND_LINK);
    const result = await fetch(
      process.env.REACT_APP_BACKEND_LINK + "/jobpost/load",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result.json().then((json) => {
      console.log("Fetching all items");
      console.log("aaaaa", json);
      setJobType(json.data);
      console.log("bbbb", json.data);
    });
  };

  const addJob = (obj) => {
    fetch(process.env.REACT_APP_BACKEND_LINK + "/jobpost/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("podaci", data);
      })
      .catch((err) => {
        console.log("greska", err);
      });
  };

  const clearState = () => {
    setcompanyName("");
    setCompanyWebsite("");
    setjobTitle("");
    setjobCategory([]);
    setJobType([]);
    setjobLocation("");
    setSalaryMin("");
    setSalaryMax("");
    setExperience("");
    setapplicationDeadline("");
    setDescription("");
  };

  useEffect(() => {
    if (
      companyName !== "" &&
      companyWebsite !== "" &&
      jobTitle !== "" &&
      jobCategory !== "" &&
      jobType !== "" &&
      jobLocation !== "" &&
      salaryMin !== "" &&
      salaryMax !== "" &&
      experience !== "" &&
      applicationDeadline !== "" &&
      description !== ""
    )
      setIsDisabled(false);
    else {
      setIsDisabled(true);
    }
  }, [
    companyName,
    companyWebsite,
    jobTitle,
    jobCategory,
    jobType,
    jobLocation,
    salaryMin,
    salaryMax,
    experience,
    applicationDeadline,
    description,
  ]);

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);

  const handleSave = () => {
    let obj = {
      companyName: companyName,
      companyWebsite: companyWebsite,
      jobTitle: jobTitle,
      //jobCategory: jobCategory,
      jobCategory: selectedCategory,
      //jobType: jobType,
      jobType: selectedType,
      jobLocation: jobLocation,
      salaryMin: salaryMin,
      salaryMax: salaryMax,
      experience: experience,
      applicationDeadline: applicationDeadline,
      description: description,
    };
    addJob(obj);
    clearState();
  };

  return (
    <div>
      <Navbar />
      <div className="createjob-wrapper">
        <p className="name-createjob">Create a Job</p>
        <Link to="/">
          {" "}
          <Button>Home</Button>
        </Link>
        <div className="flex-container">
          <div className="left">
            <Input
              label="Company Name"
              value={companyName}
              onChange={(e) => setcompanyName(e.target.value)}
            />
            <Input
              label="Job Title"
              value={jobTitle}
              onChange={(e) => setjobTitle(e.target.value)}
            />

            <Input
              label="Job Category"
              type="dropdown"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              options={
                jobCategory && jobCategory.length > 0
                  ? jobCategory.map((category) => ({
                      value: category.title,
                      label: category.title,
                    }))
                  : []
              }
            />

            <Input
              label="Job Location"
              value={jobLocation}
              onChange={(e) => setjobLocation(e.target.value)}
            />
            <Input
              label="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <Input
              label="Application Deadline"
              value={applicationDeadline}
              onChange={(e) => setapplicationDeadline(e.target.value)}
            />

            <Input
              label="Job Description"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="right">
            <Input
              label="Company Website"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
            />

            <Input
              label="Job Type"
              type="dropdown"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              options={
                jobType && jobType.length > 0
                  ? jobType.map((type) => ({
                      value: type.title,
                      label: type.title,
                    }))
                  : []
              }
            />

            <Input
              label="Min Salary"
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
            />
            <Input
              label="Max Salary"
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
            />
          </div>
        </div>
        <div className="job-button">
          {/* <Link to="/aboutJob"> */}

          <Button onClick={handleSave} disabled={isDisabled}>
            Post Job
          </Button>

          {/* </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateJob;
