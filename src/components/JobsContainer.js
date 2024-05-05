import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "react-bootstrap";
import { FilterJobs } from "../redux/slices";

export default function JobsContainer() {
  const jobsList = useSelector((store) => store.jobs);
  const isLoading = useSelector((store) => store.isLoading);
  const { selectedRoles, experience, locations, minSalary, company } =
    useSelector((store) => store.selectedFilters);

  let filteredJobs = [];

  if (selectedRoles.length > 0 && locations.length > 0) {
    jobsList.forEach((job) => {
      if (
        job.minJdSalary >= minSalary &&
        job.minExp > experience &&
        job.companyName.toLowerCase().includes(company.toLowerCase()) &&
        selectedRoles.includes(job.jobRole) &&
        locations.includes(job.location)
      ) {
        filteredJobs.push(job);
      }
    });
  } else if (selectedRoles.length > 0 && locations.length === 0) {
    jobsList.forEach((job) => {
      if (
        job.minJdSalary >= minSalary &&
        job.minExp > experience &&
        job.companyName.toLowerCase().includes(company.toLowerCase())
        && selectedRoles.includes(job.jobRole)
      ) {
        filteredJobs.push(job );
      }
    });
  } else if (locations.length > 0 && selectedRoles.length === 0) {
    jobsList.forEach((job) => {
      if (
        job.minJdSalary >= minSalary &&
        job.minExp > experience &&
        job.companyName.toLowerCase().includes(company.toLowerCase())
        && locations.includes(job.location)
      ) {
        filteredJobs.push(job );
      }
    });
  } else {
    jobsList.forEach((job) => {
      if (
        job.minJdSalary >= minSalary &&
        job.minExp > experience &&
        job.companyName.toLowerCase().includes(company.toLowerCase())
      ) {
        filteredJobs.push(job);
      }
    });
  }


  return (
    <>
      <Stack
        sx={{ width: "100%" }}
        padding={1}
        className="d-flex flex-row justify-content-space-around flex-wrap col-12 "
      >
        {filteredJobs.map((job, idx) => {
          return (
            <JobCard
              key={job.jdUid}
              job={job}
              isLast={idx === filteredJobs.length - 1}
            />
          );
        })}
      </Stack>
      <Stack style={{ textAlign: "center",marginBottom:"100px" }}>
        {isLoading && <span>Loading best jobs for you...</span>}
      </Stack>
    </>
  );
}
