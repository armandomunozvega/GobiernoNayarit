/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import CustomTextInput from "~/components/CustomTextInput/CustomTextInput";
import Button from "~/components/CustomButtons/Button";

import styles from "~/assets/jss/components/customFileInputStyle";

const useStyles = makeStyles(styles);

const CustomFileInput = (props) => {
  const [fileNames, setFileNames] = React.useState("");
  // eslint-disable-next-line
  const [files, setFiles] = React.useState(null);
  const hiddenFile = React.createRef();
  const onFocus = (e) => {
    hiddenFile.current.click(e);
  };
  const addFile = (e) => {
    // eslint-disable-next-line no-shadow
    let fileNames = "";
    // eslint-disable-next-line no-shadow
    const { files } = e.target;
    for (let i = 0; i < e.target.files.length; i += 1) {
      fileNames += e.target.files[i].name;
      if (props.multiple && i !== e.target.files.length - 1) {
        fileNames += ", ";
      }
    }
    setFiles(files);
    setFileNames(fileNames);
  };
  const {
    labelText,
    id,
    endButton,
    startButton,
    inputProps,
    formControlProps,
    multiple,
  } = props;
  const classes = useStyles();
  if (inputProps && inputProps.type && inputProps.type === "file") {
    inputProps.type = "text";
  }
  let buttonStart;
  let buttonEnd;
  if (startButton) {
    buttonStart = (
      <InputAdornment position="start">
        <Button {...startButton.buttonProps}>
          {startButton.icon !== undefined ? startButton.icon : null}
          {startButton.text !== undefined ? startButton.text : null}
        </Button>
      </InputAdornment>
    );
  }
  if (endButton) {
    buttonEnd = (
      <InputAdornment position="end">
        <Button {...endButton.buttonProps}>
          {endButton.icon !== undefined ? endButton.icon : null}
          {endButton.text !== undefined ? endButton.text : null}
        </Button>
      </InputAdornment>
    );
  }
  return (
    <div className={classes.inputFileWrapper}>
      <input
        type="file"
        className={classes.inputFile}
        multiple={multiple}
        ref={hiddenFile}
        onChange={addFile}
      />
      <CustomTextInput
        id={id}
        formControlProps={{
          ...formControlProps,
        }}
        labelText={labelText}
        inputProps={{
          ...inputProps,
          onClick: onFocus,
          value: fileNames,
          endAdornment: buttonEnd,
          startAdornment: buttonStart,
        }}
        handleChange={() => {}}
      />
    </div>
  );
};

CustomFileInput.defaultProps = {
  labelText: "",
  id: "",
  multiple: false,
};

CustomFileInput.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string,
  endButton: PropTypes.object,
  startButton: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  multiple: PropTypes.bool,
};

export default CustomFileInput;
