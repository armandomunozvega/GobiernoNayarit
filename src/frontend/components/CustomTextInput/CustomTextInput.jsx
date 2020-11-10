// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

import customInputStyle from "~/assets/jss/components/customInputStyle";

const useStyles = makeStyles(customInputStyle);

export default function CustomInput(props) {
  const {
    formControlProps,
    labelText,
    id,
    value,
    handleChange,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    multiline,
    helperText,
  } = props;
  const classes = useStyles();
  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        multiline={multiline}
        rows={multiline ? 5 : 1}
        id={id}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      {error && !inputProps.endAdornment ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : null}
      {success && !inputProps.endAdornment ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
      {(helperText || typeof error === "string") && (
        <FormHelperText error={error && typeof error === "string"}>
          {error || helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

CustomInput.defaultProps = {
  labelText: "",
  labelProps: {},
  id: "",
  value: "",
  inputProps: {},
  formControlProps: {
    className: "",
  },
  inputRootCustomClasses: "",
  error: false,
  success: false,
  white: false,
  multiline: false,
  helperText: "",
};

CustomInput.propTypes = {
  labelText: PropTypes.string,
  labelProps: PropTypes.shape({}),
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  inputProps: PropTypes.shape({
    endAdornment: PropTypes.node,
  }),
  formControlProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  success: PropTypes.bool,
  white: PropTypes.bool,
  multiline: PropTypes.bool,
  helperText: PropTypes.string,
};
