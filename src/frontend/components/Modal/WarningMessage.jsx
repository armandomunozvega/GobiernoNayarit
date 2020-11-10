// Dependencies
import { string } from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// core-components
import Warning from "~/components/Typography/Warning";

const warningMessageStyle = {
  warningContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mesageContainer: {
    textAlign: "center",
  },
};

const useStyles = makeStyles(warningMessageStyle);

const WarningMessageTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <Warning className={classes.warningContainer}>
      <>
        <Icon fontSize="large">build</Icon>
        <h6>{title}</h6>
      </>
    </Warning>
  );
};

WarningMessageTitle.propTypes = {
  title: string.isRequired,
};

const WarningMessageContent = ({ message }) => {
  const classes = useStyles();
  return (
    <div className={classes.mesageContainer}>
      <p>{message}</p>
    </div>
  );
};

WarningMessageContent.propTypes = {
  message: string.isRequired,
};

export { WarningMessageTitle, WarningMessageContent };
