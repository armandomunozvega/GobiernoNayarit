import { primaryColor, grayColor } from "~/assets/jss/misc";

const customInputStyle = {
  root: {
    "& label.MuiFormLabel-root": {
      fontSize: "12px",
      textTransform: "uppercase",
      color: grayColor[1] + " !important",
    },
    "& label.Mui-focused": {
      color: primaryColor[0],
    },
    "& .MuiOutlinedInput-root": {
      color: grayColor[13],
      fontSize: ".75rem",
      "& fieldset": {
        borderColor: "#DFE0E0",
        borderRadius: "0",
      },
      "&.Mui-focused fieldset": {
        borderColor: primaryColor[0],
      },
    },
  },
  formControl: {
    margin: "0 0 10px 0",
    paddingTop: "10px",
    position: "relative",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: grayColor[11] + " !important",
      },
      "&:after": {
        borderBottomColor: primaryColor[0] + "!important",
      },
    },
  }
};

export default customInputStyle;
