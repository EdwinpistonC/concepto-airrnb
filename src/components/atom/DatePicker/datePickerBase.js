import React from "react";
import PropTypes from "prop-types";

//Material component
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

//React component
import { myTheme } from "components/template";


export function DatePickerBase({ description }) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={description}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
}

export const datePickerProps = {
  description: PropTypes.string,
};

export const datePickerDefaults = {
  description: myTheme.defaultText.text,
};
