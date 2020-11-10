import { title, container, whiteColor } from "~/assets/jss/misc";

const loginPageStyle = (theme) => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  pageHeader: {
    color: whiteColor,
    border: "0",
    height: "100%",
    margin: "0",
    display: "flex!important",
    padding: "120px 0",
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
  },
  cardTitle: {
    "&, & a": {
      ...title,
      marginTop: ".625rem",
      marginBottom: "0.75rem",
      minHeight: "auto",
    },
    color: whiteColor + "  !important",
  },
  cardTitleImage: {
    maxWidth: "100%",
  },
  textCenter: {
    textAlign: "center",
  },
  cardBody: {
    padding: "24px 30px",
  },
});

export default loginPageStyle;
