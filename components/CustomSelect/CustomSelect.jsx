/* eslint-disable react/prop-types */
// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "~/assets/jss/components/customSelectStyle";

const useStyles = makeStyles(styles);

const CustomSelect = ({
  multiple,
  labelText,
  placeholder,
  id,
  value,
  inputProps,
  options,
  error,
  handleChange,
  handleMultipleChange,
}) => {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const inputLabel = React.useRef(null);

  const classes = useStyles();
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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
    <FormControl
      fullWidth
      size="small"
      variant="outlined"
      classes={{
        root: classes.selectFormControl,
      }}
    >
      <InputLabel
        htmlFor={id}
        className={classes.selectLabel}
        ref={inputLabel}
        shrink
      >
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
        input={<OutlinedInput notched labelWidth={labelWidth} />}
        inputProps={{ ...inputProps }}
        displayEmpty
      >
        <MenuItem
          value=""
          classes={{
            root: classes.selectMenuItem,
            selected: multiple
              ? classes.selectMenuItemSelectedMultiple
              : classes.selectMenuItemSelected,
          }}
        >
          {placeholder}
        </MenuItem>
        {menuItems()}
      </Select>
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
  error: false,
};

CustomSelect.propTypes = {
  multiple: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  inputProps: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.name,
  }),
  error: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CustomSelect;
