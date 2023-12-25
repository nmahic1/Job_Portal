import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

function CreateJob() {
  const [companyName, setcompanyName] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [jobCategory, setjobCategory] = useState("");
  const [jobLocation, setjobLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [applicationDeadline, setapplicationDeadline] = useState("");
  const [jobApplicationLink, setJobApplicationLink] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [qualification, setQualification] = useState("");

  return (
    <div>
      <div className="createjob-wrapper">
        <Navbar />
        <p className="name-createjob">Create a Job</p>
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
              value={jobCategory}
              onChange={(e) => setjobCategory(e.target.value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
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
              label="Job Application Link"
              value={jobApplicationLink}
              onChange={(e) => setJobApplicationLink(e.target.value)}
            />
            <Input
              label="Job Description"
              type="textarea"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
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
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            />
            <Input
              label="Salary Range"
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
            />
            <Input
              label="Qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
        </div>
        <div className="job-button">
          <Button>Post Job</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateJob;
