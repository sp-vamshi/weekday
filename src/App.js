import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchJobs } from "./redux/slices";
import { Stack } from "@mui/material";
import Header from "./components/Header";
import JobsContainer from "./components/JobsContainer";

function App() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { jobs, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(FetchJobs(page));
  }, [page]);

  return (
    <Stack p={2} spacing={3} direction={"column"} className="App">
      <Header />
      <JobsContainer />
    </Stack>
  );
}

export default App;
