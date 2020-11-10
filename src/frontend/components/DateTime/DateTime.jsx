// Dependencies
import Datetime from "react-datetime";
import PropTypes from "prop-types";

// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

// core-components
import CustomTextInput from "~/components/CustomTextInput/CustomTextInput";
import Button from "~/components/CustomButtons/Button";

const DateTimePicker = ({
  id,
  value,
  error,
  defaultValue,
  labelText,
  timeFormat,
  dateFormat,
  locale,
  // helperText,
  handleChange,
  inputProps,
}) => {
  // eslint-disable-next-line no-shadow
  const renderInput = ({ value, name, placeholder }, openCalendar) => {
    return (
      <CustomTextInput
        id={id}
        value={value}
        handleChange={() => {}}
        labelText={labelText}
        error={error}
        // helperText={helperText}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button color="transparent" justIcon round onClick={openCalendar}>
                <CalendarTodayIcon />
              </Button>
            </InputAdornment>
          ),
          name,
          placeholder,
          onFocus: openCalendar,
        }}
        formControlProps={{
          fullWidth: true,
        }}
      />
    );
  };

  return (
    <Datetime
      defaultValue={defaultValue}
      value={value}
      timeFormat={timeFormat}
      dateFormat={dateFormat}
      locale={locale}
      onChange={(e) =>
        handleChange({
          target: { name: inputProps.name, value: e.format(dateFormat) },
        })} // eslint-disable-line prettier/prettier
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
  inputProps: {
    name: "",
  },
  value: {},
  timeFormat: false,
  dateFormat: "DD/MM/YYYY",
  locale: "es",
  // helperText: "",
  error: false,
};

DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  labelText: PropTypes.string,
  // helperText: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  inputProps: PropTypes.shape({
    name: PropTypes.string,
  }),
  timeFormat: PropTypes.bool,
  dateFormat: PropTypes.string,
  locale: PropTypes.string,
  error: PropTypes.bool,
};

export default DateTimePicker;
