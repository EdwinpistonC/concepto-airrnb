import React from "react";
import PropTypes from "prop-types";

//Material components
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//React components
import { myTheme } from "components/template";

/*
export const SelectBase = styled(TextField)`
  width: 100%;

  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size};
  font-weight: ${(props) => props.theme.font.weight};
  color: ${(props) => props.theme.color.default};
`;
*/
export function SelectBase({ description, children }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{description}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={description}
          onChange={handleChange}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
}

export const selectProps = {
  theme: PropTypes.object,
  description: PropTypes.string,
};

export const selectDefaults = {
  theme: {
    font: myTheme.fonts.text,
    color: myTheme.color,
  },
  description: myTheme.defaultText.text,
};
