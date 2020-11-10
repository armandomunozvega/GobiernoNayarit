// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
// import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";

import customSelectStyle from "~/assets/jss/components/customSelectStyle";

const useStyles = makeStyles(customSelectStyle);

const CustomSelect = ({
  multiple,
  labelText,
  placeholder,
  id,
  value,
  inputProps,
  options,
  // error,
  // helperText,
  handleChange,
  handleMultipleChange,
}) => {
  const classes = useStyles();

  const menuItems = () =>
    options.map((option) => {
      return (
        <MenuItem
          key={option.id}
          value={option.id}
          disabled={option.disabled}
          classes={{
            root: classes.selectMenuItem,
            selected: multiple
              ? classes.selectMenuItemSelectedMultiple
              : classes.selectMenuItemSelected,
          }}
        >
          {option.label}
        </MenuItem>
      );
    });

  return (
    <FormControl fullWidth className={classes.selectFormControl}>
      <InputLabel htmlFor={id} className={classes.selectLabel}>
        {labelText}
      </InputLabel>
      <Select
        multiple={multiple}
        MenuProps={{
          className: classes.selectMenu,
        }}
        classes={{
          select: classes.select,
        }}
        value={value}
        onChange={multiple ? handleMultipleChange : handleChange}
        inputProps={{ ...inputProps }}
        displayEmpty
      >
        <MenuItem
          disabled
          classes={{
            root: classes.selectMenuItem,
          }}
        >
          {placeholder}
        </MenuItem>
        {menuItems()}
      </Select>
      {/* <FormHelperText>{helperText}</FormHelperText> */}
    </FormControl>
  );
};

CustomSelect.defaultProps = {
  multiple: false,
  labelText: "",
  inputProps: {
    id: "",
    name: "",
  },
  placeholder: "",
  // error: false,
  // helperText: "",
  handleMultipleChange: () => {},
};

CustomSelect.propTypes = {
  multiple: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  inputProps: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  // error: PropTypes.bool,
  // helperText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleMultipleChange: PropTypes.func,
};

export default CustomSelect;
