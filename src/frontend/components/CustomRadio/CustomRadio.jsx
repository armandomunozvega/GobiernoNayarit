/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-nested-ternary */
// Dependencies
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";

// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import customCheckboxRadioSwitchStyle from "~/assets/jss/components/customCheckboxRadioSwitchStyle";

const useStyles = makeStyles(customCheckboxRadioSwitchStyle);

const CustomRadio = ({
  checked,
  error,
  success,
  handleChange,
  value,
  name,
  label,
}) => {
  const classes = useStyles();
  const labelClasses = classNames({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
  });

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
    <FormControl error={error}>
      <FormControlLabel
        control={<InputRadio />}
        classes={{
          label: classes.label,
          root: classes.labelRoot,
        }}
        label={
          <Typography
            classes={{
              root: `${classes.label} ${classes.classesInput} ${labelClasses}`,
            }}
          >
            {label}
          </Typography>
        }
      />
    </FormControl>
  );
};

CustomRadio.defaultProps = {
  value: "",
  error: false,
  success: false,
};

CustomRadio.propTypes = {
  value: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomRadio;
