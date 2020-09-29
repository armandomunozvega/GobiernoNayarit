// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import customCheckboxRadioSwitchStyle from "~/assets/jss/components/customCheckboxRadioSwitchStyle";

const useStyles = makeStyles(customCheckboxRadioSwitchStyle);

const CustomRadio = ({ checked, handleChange, value, name, label }) => {
  const classes = useStyles();

  const InputRadio = () => (
    <Radio
      checked={checked}
      onChange={handleChange}
      value={value}
      name={name}
      icon={<FiberManualRecord className={classes.radioUnchecked} />}
      checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
      classes={{
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot,
      }}
    />
  );

  return (
    <FormControlLabel
      control={<InputRadio />}
      classes={{
        label: classes.label,
        root: classes.labelRoot,
      }}
      label={label}
    />
  );
};

CustomRadio.defaultProps = {
  value: "",
};

CustomRadio.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomRadio;
