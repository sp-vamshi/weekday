import axios from "../utils/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  totalJobs:0,
  filtersData: {
    jobRoles: [],
    jobLocations: [],
    experienceList:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    salaryRangeList:[10, 20, 30, 40, 50, 60, 70]
  },
  selectedFilters: {
    selectedRoles:[],
    experience: 2,
    locations: [],
    minSalary: 0,
    company: "",
  },
  isLoading: false,
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateJobs(state, action) {
      state.jobs = [...state.jobs, ...action.payload.jobs];
      state.totalJobs = action.payload.totalJobs;
    },
    updateJobRoles(state, action) {
      state.filtersData.jobRoles = action.payload.jobRoles;
    },
    updateJobLocations(state, action) {
      state.filtersData.jobLocations = action.payload.jobLocations;
    },
    updateSelectedFilters(state, action){
      state.selectedFilters[action.payload.filterKey] = action.payload.newFilters
    },
    updateLoader(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const FetchJobs = (pageNumber) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateLoader(true))
    await axios
      .post("adhoc/getSampleJdJSON", {
        limit: 10,
        offset: pageNumber * 10,
      })
      .then((response) => {
        const jobRoles = [...getState().filtersData.jobRoles];
        const locations = [...getState().filtersData.jobLocations];

        response.data?.jdList.forEach((job) => {
          // filtering out unique job roles
          if (
            job.jobRole !== null &&
            job.jobRole !== undefined &&
            !jobRoles.includes(job.jobRole)
          ) {
            jobRoles.push(job.jobRole);
          }

          // filtering out unique locations
          if (
            job.location !== null &&
            job.location !== undefined &&
            job?.location?.toLowerCase() !== "remote" &&
            !locations.includes(job.location)
          )
            locations.push(job.location);
        });

        dispatch(
          slice.actions.updateJobs({
            jobs: response.data?.jdList,
            totalJobs: response.data?.totalCount
          })
        );

        dispatch(
          slice.actions.updateJobRoles({
            jobRoles,
          })
        );
        dispatch(
          slice.actions.updateJobLocations({
            jobLocations: locations,
          })
        );

        dispatch(slice.actions.updateLoader(false))
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const updateFilters = ({filterKey,newFilters}) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateSelectedFilters({filterKey, newFilters}))
  };
};


export const updateLoader = (loadingStatus) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateLoader(loadingStatus))
  };
};

export default slice.reducer;
