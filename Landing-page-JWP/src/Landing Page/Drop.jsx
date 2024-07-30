import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          style={{ color: "black", textDecoration: "none" }}>
          Trainings
        </InputLabel>
        <Select
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Trainings">
          <MenuItem value={10}>Web and Mobile Application Development</MenuItem>
          <MenuItem value={20}>Flutter Application Development</MenuItem>
          <MenuItem value={30}>Graphic Design and Video Editting</MenuItem>
          <MenuItem value={40}>Digital and Social Media Marketing</MenuItem>
          <MenuItem value={50}>Blockchain Development</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
