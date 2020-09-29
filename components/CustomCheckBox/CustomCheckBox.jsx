// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Check from "@material-ui/icons/Check";

import customCheckboxRadioSwitchStyle from "~/assets/jss/components/customCheckboxRadioSwitchStyle";

const useStyles = makeStyles(customCheckboxRadioSwitchStyle);

const CustomCheckBox = ({
  id,
  label,
  checked,
  inputProps,
  handleChange,
  disabled,
}) => {
  const classes = useStyles();

  const InputCheckBox = () => (
    <Checkbox
      id={id}
      checked={checked}
      tabIndex={-1}
      onChange={handleChange}
      inputProps={{ ...inputProps }}
      checkedIcon={<Check className={classes.checkedIcon} />}
      icon={<Check className={classes.uncheckedIcon} />}
      classes={{
        checked: classes.checked,
        root: classes.checkRoot,
      }}
      disabled={disabled}
    />
  );

  return (
    <FormControlLabel
      control={<InputCheckBox />}
      classes={{
        label: classes.label,
        disabled: classes.disabledCheckboxAndRadio,
      }}
      label={label}
    />
  );
};

CustomCheckBox.defaultProps = {
  id: "",
  label: "",
  checked: false,
  disabled: false,
};

CustomCheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default CustomCheckBox;
