/* eslint-disable react/jsx-wrap-multilines */
// Dependencies
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
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
  name,
  inputProps,
  handleChange,
  error,
  success,
  disabled,
}) => {
  const classes = useStyles();
  const labelClasses = classNames({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
  });

  const InputCheckBox = () => (
    <Checkbox
      id={id}
      name={name}
      checked={checked}
      tabIndex={-1}
      onChange={handleChange}
      {...inputProps}
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
    <FormControl error={error}>
      <FormControlLabel
        control={<InputCheckBox />}
        classes={{
          label: classes.label,
          disabled: classes.disabledCheckboxAndRadio,
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

CustomCheckBox.defaultProps = {
  id: "",
  name: "",
  inputProps: {},
  label: "",
  checked: false,
  disabled: false,
  error: false,
  success: false,
};

CustomCheckBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  inputProps: PropTypes.shape({}),
  label: PropTypes.string,
  checked: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default CustomCheckBox;
