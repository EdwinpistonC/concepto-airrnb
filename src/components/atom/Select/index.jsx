import { SelectBase, selectDefaults, selectProps } from "./selectBase";

const Select = ({ theme, description, children }) => {
  return (
    <SelectBase theme={theme} description={description} variant="filled">
      {children}
    </SelectBase>
  );
};

Select.propTypes = selectProps;

Select.defaultProps = selectDefaults;

export default Select;
