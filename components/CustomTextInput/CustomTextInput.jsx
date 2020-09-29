// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import customInputStyle from "~/assets/jss/components/customInputStyle";

const useStyles = makeStyles(customInputStyle);

export default function CustomTextInput(props) {
  const {
    id,
    value,
    labelText,
    placeholder,
    handleChange,
    InputProps,
    defaultInputProps,
    multiline,
    fullWidth,
    error,
  } = props;
  const classes = useStyles();

  return (
    <FormControl fullWidth={fullWidth} className={classes.formControl}>
      <TextField
        classes={{
          root: classes.root,
        }}
        variant="outlined"
        id={id}
        value={value}
        label={labelText}
        placeholder={placeholder}
        onChange={handleChange}
        size="small"
        InputProps={{ ...InputProps }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={{ ...defaultInputProps }}
        multiline={multiline}
        rows={5}
        InputLabelProps={{ shrink: true }}
        error={error}
      />
    </FormControl>
  );
}

CustomTextInput.defaultProps = {
  labelText: "",
  placeholder: "",
  value: "",
  InputProps: {},
  defaultInputProps: {},
  fullWidth: false,
  multiline: false,
  error: false,
};

CustomTextInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  InputProps: PropTypes.shape({}),
  defaultInputProps: PropTypes.shape({}),
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  error: PropTypes.bool,
};
