/* eslint-disable react/no-array-index-key */
// Dependencies

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};

const useStyles = makeStyles(() => ({
  container: {
    ...containerFluid,
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            <h2>Bienvenidos</h2>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Index;
