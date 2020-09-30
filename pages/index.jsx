/* eslint-disable react/no-array-index-key */
// Dependencies
import { useSelector, useDispatch } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Button from "~/components/CustomButtons/Button";
import Card from "~/components/Card/Card";
import CardBody from "~/components/Card/CardBody";

// actions
import { getEmpleados } from "~/store/modules/Empleado";

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

// eslint-disable-next-line react/prop-types
const Index = () => {
  const classes = useStyles();

  const empleados = useSelector((store) => store.empleados);
  const dispatch = useDispatch();
  const EmpleadosCards = () => {
    if (empleados.empleados.length > 0) {
      return empleados.empleados.map((empleado) => (
        <GridItem xs={3} sm={3} md={3} key={empleado.id}>
          <Card>
            <CardBody>
              <p>{`ID: ${empleado.id}`}</p>
              <p>{`Nombre: ${empleado.employee_name}`}</p>
              <p>{`Edad: ${empleado.employee_age}`}</p>
              <p>{`Salario: $${empleado.employee_salary}.00`}</p>
            </CardBody>
          </Card>
        </GridItem>
      ));
    }
    return null;
  };

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h2>Empleados</h2>
          <Button onClick={() => dispatch(getEmpleados())}>
            Ve por empleados
          </Button>
          <GridContainer>{EmpleadosCards()}</GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Index;
