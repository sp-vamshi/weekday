import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";
import "../../src/App.css";
import { updateFilters } from "../redux/slices";

const ITEM_HEIGHT = 40;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: 150,
    },
  },
};

function getStyles(name, roles, theme) {
  return {
    fontWeight:
      roles.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function RoleDropDown() {
  const theme = useTheme();
  const { selectedRoles } = useSelector((store) => store.selectedFilters);
  const { jobRoles } = useSelector((store) => store.filtersData);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(
      updateFilters({
        filterKey: "selectedRoles",
        newFilters: typeof value === "string" ? value.split(",") : value,
      })
    );
  };

  return (
    <FormControl className="" sx={{ minWidth: 150 }}>
      <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        className="filter-dropdown"
        multiple
        value={selectedRoles}
        size="medium"
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Roles" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {jobRoles.map((role) => (
          <MenuItem
            key={role}
            value={role}
            style={getStyles(role, selectedRoles, theme)}
          >
            {role}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function ExperienceDropDown() {
  const { experienceList } = useSelector((store) => store.filtersData);
  const { experience } = useSelector((store) => store.selectedFilters);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      updateFilters({
        filterKey: "experience",
        newFilters: event.target.value,
      })
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
      <InputLabel id="experience-select-small-label">Experience</InputLabel>
      <Select
        labelId="experience-select-small-label"
        id="demo-select-small"
        value={experience}
        className="filter-dropdown"
        label="Experience"
        onChange={handleChange}
      >
        <MenuItem value={0}>
          <em>0</em>
        </MenuItem>
        {experienceList.map((experience) => (
          <MenuItem key={experience} value={experience}>
            {experience}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function LocationDropDown() {
  const theme = useTheme();
  const { locations } = useSelector((store) => store.selectedFilters);
  const { jobLocations } = useSelector((store) => store.filtersData);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    dispatch(
      updateFilters({
        filterKey: "locations",
        newFilters: typeof value === "string" ? value.split(",") : value,
      })
    );
  };

  return (
    <FormControl className="" sx={{ minWidth: 150 }}>
      <InputLabel id="demo-multiple-chip-label">Location</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        className="filter-dropdown"
        multiple
        value={locations}
        size="medium"
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Location" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        <MenuItem
          value={"Remote"}
          style={getStyles("Remote", locations, theme)}
        >
          Remote
        </MenuItem>
        {jobLocations.map((location, idx) => (
          <MenuItem
            key={idx}
            value={location}
            style={getStyles(location, locations, theme)}
          >
            {location}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function SalaryDropDown() {
  const { salaryRangeList } = useSelector((store) => store.filtersData);
  const { minSalary } = useSelector((store) => store.selectedFilters);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      updateFilters({
        filterKey: "minSalary",
        newFilters: event.target.value,
      })
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
      <InputLabel id="salary-select-small-label">Min Salary</InputLabel>
      <Select
        labelId="salary-select-small-label"
        id="demo-select-small"
        value={minSalary}
        className="filter-dropdown"
        label="Min Salary"
        onChange={handleChange}
      >
        <MenuItem value={0}>
          <em>0L</em>
        </MenuItem>
        {salaryRangeList.map((salary) => (
          <MenuItem key={salary} value={salary}>
            {salary}L
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function CompanySearchInput() {
  const { company } = useSelector((store) => store.selectedFilters);
  const dispatch = useDispatch();
  
  const handleSearch = (e) => {
    dispatch(
      updateFilters({
        filterKey: "company",
        newFilters: e.target.value,
      })
    );
  };

  return (
    <TextField
      className="company-search-input mb-2"
      label="Search Company Name"
      id="outlined-size-normal"
      value={company}
      onChange={handleSearch}
    />
  );
}

export {
  RoleDropDown,
  ExperienceDropDown,
  LocationDropDown,
  SalaryDropDown,
  CompanySearchInput,
};
