import React, { useState, useEffect } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { loadCategories } from "../../api/categories.api";

function CreateJob() {
  const [jobCategory, setjobCategory] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [data, setData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const loadJobTypes = async () => {
    const token = localStorage.getItem("token");

    const result = await fetch(
      process.env.REACT_APP_BACKEND_LINK + "/jobType/load",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result.json().then((json) => {
      console.log("job types:", json.data);
      if (json.data && json.data.length !== 0) {
        setJobType(json.data);
        handleChange("jobType", json.data[0]._id);
      }
    });
  };

  const addJob = (obj) => {
    const token = localStorage.getItem("token");

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
        toast.success(data?.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    let keys = [
      "companyName",
      "companyWebsite",
      "jobTitle",
      "jobCategory",
      "jobType",
      "jobLocation",
      "salaryMin",
      "salaryMax",
      "experience",
      "applicationDeadline",
      "description",
    ];
    let allcontained = keys.every((key) => Object.keys(data).includes(key));
    let allTrue = keys.find((key) => data[key] === "");
    setIsDisabled(!(allcontained && !allTrue));
  }, [data]);

  const getCategories = async () => {
    let res = await loadCategories();
    console.log("Categories");
    console.log(res);
    if (res.data && res.data.length !== 0) {
      setjobCategory(res.data);
      handleChange("jobCategory", res.data[0]._id);
    }
  };

  useEffect(() => {
    getCategories();
    loadJobTypes();
  }, []);

  const handleSave = () => {
    console.log("Prepared job to add");
    console.log(data);
    addJob(data);
  };

  return (
    <div>
      <div className="createjob-wrapper">
        <Toaster position="top-right"></Toaster>
        <p className="name-createjob">Create a Job</p>

        <div className="flex-container">
          <div className="left">
            <Input
              label="Company Name"
              value={data?.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
            />
            <Input
              label="Job Title"
              value={data?.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
            />

            <Input
              label="Job Category"
              type="dropdown"
              value={data?.jobCategory}
              onChange={(e) => handleChange("jobCategory", e.target.value)}
              options={
                jobCategory && jobCategory.length > 0
                  ? jobCategory.map((category) => ({
                      value: category._id,
                      label: category.title,
                    }))
                  : []
              }
            />

            <Input
              label="Job Location"
              value={data?.jobLocation}
              onChange={(e) => handleChange("jobLocation", e.target.value)}
            />
            <Input
              label="Experience"
              value={data?.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            />

            <Input
              label="Application Deadline"
              value={data?.applicationDeadline}
              onChange={(e) =>
                handleChange("applicationDeadline", e.target.value)
              }
              type="date"
            />

            <Input
              label="Job Description"
              type="textarea"
              value={data?.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
          <div className="right">
            <Input
              label="Company Website"
              value={data?.companyWebsite}
              onChange={(e) => handleChange("companyWebsite", e.target.value)}
            />

            <Input
              label="Job Type"
              type="dropdown"
              value={data?.jobType}
              onChange={(e) => handleChange("jobType", e.target.value)}
              options={
                jobType && jobType.length > 0
                  ? jobType.map((type) => ({
                      value: type._id,
                      label: type.title,
                    }))
                  : []
              }
            />

            <Input
              label="Min Salary"
              type="number"
              value={data?.salaryMin}
              onChange={(e) => handleChange("salaryMin", e.target.value)}
            />
            <Input
              label="Max Salary"
              type="number"
              min={data?.salaryMin}
              value={data?.salaryMax}
              onChange={(e) => handleChange("salaryMax", e.target.value)}
            />
          </div>
        </div>
        <div className="job-button">
          <Button onClick={handleSave} disabled={isDisabled}>
            Post Job
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
