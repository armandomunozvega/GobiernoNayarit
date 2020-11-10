// Dependencies
import { string } from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// core-components
import Info from "~/components/Typography/Info";

const infoMessageStyle = {
  infoContainer: {
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

const useStyles = makeStyles(infoMessageStyle);

const InfoMessageTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <Info className={classes.infoContainer}>
      <>
        <Icon fontSize="large">contact_support</Icon>
        <h6>{title}</h6>
      </>
    </Info>
  );
};

InfoMessageTitle.propTypes = {
  title: string.isRequired,
};

const InfoMessageContent = ({ message }) => {
  const classes = useStyles();
  return (
    <div className={classes.mesageContainer}>
      <p>{message}</p>
    </div>
  );
};

InfoMessageContent.propTypes = {
  message: string.isRequired,
};

export { InfoMessageTitle, InfoMessageContent };
