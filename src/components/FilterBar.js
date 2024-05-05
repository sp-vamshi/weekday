import { Stack } from "@mui/material";
import {
  CompanySearchInput,
  ExperienceDropDown,
  LocationDropDown,
  RoleDropDown,
  SalaryDropDown,
} from "../filterControllers/Dropdowns";

export default function FilterBar() {
  return (
    <Stack
    position={"sticky"}
      sx={{ backgroundColor: "#EEF7FF", borderRadius: "10px" }}
      direction={"row"}
      alignItems={"center"}
      flexWrap={"wrap"}
      padding={1}
      className="shadow-sm"
    >
      <RoleDropDown />
      <LocationDropDown />
      <ExperienceDropDown />
      <SalaryDropDown />
      <CompanySearchInput />
    </Stack>
  );
}
