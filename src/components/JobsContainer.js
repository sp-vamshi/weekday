import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { Stack } from "react-bootstrap";

export default function JobsContainer() {
  const jobsList = useSelector((store) => store.jobs);
  const isLoading = useSelector((store) => store.isLoading);
  const { selectedRoles, experience, locations, minSalary, company } =
    useSelector((store) => store.selectedFilters);

  let filteredJobs = jobsList.filter((job) => {
    const roleMatch =
      selectedRoles.length === 0 || selectedRoles.includes(job.jobRole);
    const locationMatch =
      locations.length === 0 || locations.includes(job.location);
    const experienceMatch = job.minExp >= experience;
    const companyMatch = job.companyName
      .toLowerCase()
      .includes(company.toLowerCase());
    const salaryMatch = job.minJdSalary >= minSalary;

    return (
      roleMatch &&
      locationMatch &&
      experienceMatch &&
      companyMatch &&
      salaryMatch
    );
  });

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
            />
          );
        })}
      </Stack>
      <Stack style={{ textAlign: "center", marginBottom: "100px" }}>
        {/* {isLoading && <span>Loading best jobs for you...</span>} */}
      </Stack>
    </>
  );
}
