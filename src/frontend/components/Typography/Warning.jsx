// Dependencies
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// styles
import typographyStyle from "~/assets/jss/components/typographyStyle";

const useStyles = makeStyles(typographyStyle);

export default function Warning(props) {
  const { children, className } = props;
  const classes = useStyles();
  return (
    <div
      className={classNames(
        classes.defaultFontStyle,
        classes.warningText,
        className
      )}
    >
      {children}
    </div>
  );
}

Warning.defaultProps = {
  className: "",
};

Warning.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};
