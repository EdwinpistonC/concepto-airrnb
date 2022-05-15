import { ButtonBase, buttonDefaults, buttonProps } from "./buttonBase";

//material component
import SearchIcon from "@mui/icons-material/Search";

const Button = ({ theme, name, customcolor, onClick }) => {
  return (
    <ButtonBase
      onClick={onClick}
      customcolor={customcolor}
      theme={theme}
      variant="contained"
    >
      {name}
    </ButtonBase>
  );
};

Button.propTypes = buttonProps;

Button.defaultProps = buttonDefaults;

export default Button;

const SearchButton = ({ theme, name, customcolor, onClick }) => {
  return (
    <ButtonBase
      theme={theme}
      onClick={onClick}
      customcolor={customcolor}
      variant="contained"
      startIcon={<SearchIcon />}
    >
      {name}
    </ButtonBase>
  );
};
SearchButton.propTypes = buttonProps;

SearchButton.defaultProps = buttonDefaults;

export { SearchButton };
