import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import userImage from "../assets/user.png";

export default function JobCard({ job, isLast }) {
  //   {
  //     "jdUid": "cfff3608-053c-11ef-83d3-06301d0a7178-92024",
  //     "jdLink": "https://weekday.works",
  //     "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  //     "maxJdSalary": 78,
  //     "minJdSalary": 64,
  //     "salaryCurrencyCode": "USD",
  //     "location": "bangalore",
  //     "minExp": 7,
  //     "maxExp": 15,
  //     "jobRole": "backend",
  //     "companyName": "Tencent",
  //     "logoUrl": "https://logo.clearbit.com/tencent.com"
  // }
  return (
    <div className={"p-2 col-12 col-md-6 col-lg-4"}>
      <Box className="shadow-lg rounded" padding={2}>
        <Stack direction="row" alignItems={"start"} spacing={2}>
          <img
            style={{ height: "20px", width: "20px" }}
            src={job.logoUrl}
            alt={job.companyName}
            className="mt-1"
          />
          <Stack direction="column">
            <Typography variant="body1" className="text-secondary fw-bold">
              {job.companyName}
            </Typography>
            <Typography variant="subtitle1" className="text-capitalize">
              {job.jobRole}
            </Typography>
            <Typography variant="subtitle2" className="text-capitalize">
              {job.location}
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Typography variant="subtitle1" className="fw-bold">
            Estimate Salary: {job.minJdSalary} - {job.maxJdSalary}{" "}
            {job.salaryCurrencyCode} ✅{" "}
          </Typography>
          <Stack
            position={"relative"}
            paddingTop={1}
            direction={"column"}
            spacing={0.5}
          >
            <Typography variant="subtitle1" className="fw-bold">About Company:</Typography>
            <Typography variant="subtitle2" className="fw-bold">
              About Us
            </Typography>
            <Box className="mask" maxHeight={150} overflow={"hidden"}>
              <Typography variant="caption">
                {job.jobDetailsFromCompany}
              </Typography>
            </Box>
            <Box
              className="d-flex justify-content-center w-100"
              style={{ position: "absolute", bottom: "10px" }}
            >
              <button className="btn btn-transparent fw-bold">View Job</button>
            </Box>
          </Stack>
          <Stack>
            <Typography className="fw-bold text-secondary" variant="subtitle2">
              Minimum Experience
            </Typography>
            <Typography variant="subtitle1">{job.minExp}</Typography>
          </Stack>
          <Stack>
            <button
              style={{ backgroundColor: "#94ffd8" }}
              className="btn rounded fw-bold my-2 p-2"
            >
              ⚡Easy Apply
            </button>
            <a
              className="btn-link"
              href="https://weekday.works"
              target="_blank"
            >
              <button
                style={{ backgroundColor: "#1C1678" }}
                className="btn text-white rounded w-100"
                onClick={() => {}}
              >
                <img
                  className="user-image"
                  src={userImage}
                  alt="referral user"
                />
                <img
                  className="user-image"
                  src={userImage}
                  alt="referral user"
                />
                <span>Unlock referral asks</span>
              </button>
            </a>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
