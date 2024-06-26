import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchJobs, updateLoader } from "./redux/slices";
import { Stack } from "@mui/material";
import JobsContainer from "./components/JobsContainer";
import FilterBar from "./components/FilterBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [page, setPage] = useState(0);
  const totalJobs = useSelector((store) => store.totalJobs);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchJobs(page));
  }, [page]);

  function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTopHeight = document.documentElement.scrollTop;
    const windowInnerHeight = window.innerHeight;

    if (windowInnerHeight + scrollTopHeight + 1 >= scrollHeight) {
      if (page * 10 <= totalJobs) {
        setPage((page) => page + 1);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Stack
      p={2}
      position={"relative"}
      spacing={3}
      direction={"column"}
      className="App "
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "white",
        }}
      >
        <FilterBar />
      </div>
      <div style={{ overflowY: "auto", flexGrow: 1 }}>
        <JobsContainer />
      </div>
    </Stack>
  );
}

export default App;
