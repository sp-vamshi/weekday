import React from "react";
import JobCard from "./JobCard";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Stack } from "react-bootstrap";

export default function JobsContainer() {
  const jobsList = useSelector((store) => store.jobs);

  return (
    <>
      <Stack
        sx={{ width: "100%" }}
        padding={1}
        className="d-flex flex-row justify-content-space-around flex-wrap col-12 "
      >
        {jobsList.map((job, idx) => {
          return (
            <JobCard
              key={job.jdUid}
              job={job}
              isLast={idx === jobsList.length - 1}
            />
          );
        })}
      </Stack>
      <Stack style={{ textAlign: "center" }}>
        <span>Loading best jobs for you...</span>
      </Stack>
    </>
  );
}
