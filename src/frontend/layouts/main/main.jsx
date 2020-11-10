// Dependencies
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";

// @material-ui/icons
import ExitToApp from "@material-ui/icons/ExitToApp";

// context
import { useAuth } from "~/store/AuthContext";

// core-components
import Header from "~/components/Header/Header";
import Button from "~/components/CustomButtons/Button";

import mainLayoutStyle from "~/assets/jss/layouts/mainLayoutStyle";

const useStyles = makeStyles(mainLayoutStyle);

const MainLayout = ({ children }) => {
  const { handleLogout } = useAuth();
  const classes = useStyles();

  return (
    <>
      <Header
        brand="InterWare de México"
        links={( // eslint-disable-line prettier/prettier
          <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Menú 1
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Menú 2
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Menú 3
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLinkJustIcon}
                onClick={handleLogout}
                justIcon
                round
              >
                <ExitToApp />
              </Button>
            </ListItem>
          </List>
        )} // eslint-disable-line prettier/prettier
        fixed
      />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>{children}</div>
      </main>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <span>InterWare de México S.A. de C.V.</span>
        </div>
      </footer>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
