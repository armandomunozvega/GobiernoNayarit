import {
  primaryColor,
  dangerColor,
  grayColor,
  blackColor,
  whiteColor,
  hexToRgb,
} from "~/assets/jss/misc";

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset !important",
    },
  },
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor: "unset !important",
    },
  },
  labelRoot: {
    marginLeft: "-14px",
  },
  checked: {
    color: `${primaryColor[0]}!important`,
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: `1px solid rgba(${hexToRgb(blackColor)}, 0.84)`,
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: `1px solid rgba(${hexToRgb(blackColor)}, .54)`,
    borderRadius: "3px",
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: blackColor,
      opacity: "0.26",
      color: blackColor,
    },
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: grayColor[12],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset",
  },
  labelError: {
    color: dangerColor[0],
  },
  radio: {
    color: `${primaryColor[0]}!important`,
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: `1px solid ${primaryColor[0]}`,
    borderRadius: "50%",
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: `1px solid rgba(${hexToRgb(blackColor)}, .54)`,
    borderRadius: "50%",
  },
  inlineChecks: {
    marginTop: "8px",
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px",
  },
  switchBase: {
    color: `${primaryColor[0]}!important`,
  },
  switchIcon: {
    boxShadow: `0 1px 3px 1px rgba(${hexToRgb(blackColor)}, 0.4)`,
    color: `${whiteColor}  !important`,
    border: `1px solid rgba(${hexToRgb(blackColor)}, .54)`,
  },
  switchIconChecked: {
    borderColor: primaryColor[0],
    transform: "translateX(0px)!important",
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: `rgb(${hexToRgb(grayColor[24])})`,
    borderRadius: "15px",
    opacity: "0.7!important",
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: `rgba(${hexToRgb(primaryColor[0])}, 1) !important`,
    },
    "& $switchIcon": {
      borderColor: primaryColor[0],
    },
  },
};

export default customCheckboxRadioSwitch;
