// Dependencies
import Datetime from "react-datetime";
import PropTypes from "prop-types";
import moment from "moment";

// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

// core-components
import CustomTextInput from "~/components/CustomTextInput/CustomTextInput";
import Button from "~/components/CustomButtons/Button";

moment.locale("es");

const DateTimePicker = ({
  id,
  name,
  error,
  defaultValue,
  labelText,
  placeholder,
  timeFormat,
  handleChange,
  inputProps,
}) => {
  const renderInput = ({ value }, openCalendar) => {
    return (
      <CustomTextInput
        id={id}
        value={value}
        labelText={labelText}
        placeholder={placeholder}
        error={error}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button color="transparent" justIcon round onClick={openCalendar}>
                <CalendarTodayIcon />
              </Button>
            </InputAdornment>
          ),
        }}
        defaultInputProps={{
          name,
          onFocus: openCalendar,
        }}
        handleChange={() => {}}
        fullWidth
      />
    );
  };

  return (
    <Datetime
      defaultValue={defaultValue}
      timeFormat={timeFormat}
      onChange={(e) => handleChange({ target: { name, value: e } })}
      inputProps={{ ...inputProps }}
      renderInput={renderInput}
      closeOnSelect
      closeOnTab
    />
  );
};

DateTimePicker.defaultProps = {
  defaultValue: "",
  labelText: "",
  placeholder: "",
  inputProps: {},
  timeFormat: false,
  error: false,
};

DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  inputProps: PropTypes.shape({}),
  timeFormat: PropTypes.bool,
  error: PropTypes.bool,
};

export default DateTimePicker;
