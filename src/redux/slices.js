import axios from "../utils/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  isLoading: false,
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateJobs(state, action) {
      state.jobs = [...state.jobs,...action.payload.jobs];
    },
    updateLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const FetchJobs = (pageNumber) => {
  return async (dispatch, getState) => {
    await axios
      .post("adhoc/getSampleJdJSON", {
        limit: 10,
        offset: pageNumber*10,
      })
      .then((response) => {
        dispatch(
          slice.actions.updateJobs({
            jobs: response.data?.jdList,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default slice.reducer;
