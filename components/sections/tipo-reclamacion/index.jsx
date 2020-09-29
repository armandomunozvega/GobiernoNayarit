// Dependencies
import { withFormik } from "formik";
import PropTypes from "prop-types";

// @material-ui/core components
import { InputLabel } from "@material-ui/core";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import InputRadio from "~/components/CustomRadio/CustomRadio";
import DateTime from "~/components/DateTime/DateTime";

// validation schema && initial values
import schema from "./schema";
import initialValues from "./initialValues";

const TipoReclamacion = ({
  values,
  errors,
  validate,
  handleChange,
  onChange,
}) => {
  React.useEffect(() => {
    if (onChange) {
      onChange(values, errors, "tipoReclamacion");
    }
  }, [values, errors]);

  return (
    <div>
      <GridContainer alignItems="center">
        <GridItem sm={12} md={5}>
          <InputLabel>Reclamante:</InputLabel>
          <div>
            <InputRadio
              label="Asegurado"
              checked={values.reclamante === "asegurado"}
              handleChange={handleChange}
              value="asegurado"
              id="asegurado"
              name="reclamante"
              error={validate && !!errors.reclamante}
            />
            <InputRadio
              label="Beneficiario"
              checked={values.reclamante === "beneficiario"}
              handleChange={handleChange}
              value="beneficiario"
              id="beneficiario"
              name="reclamante"
              error={validate && !!errors.reclamante}
            />
            <InputRadio
              label="Socio/Broker"
              checked={values.reclamante === "socioBroker"}
              handleChange={handleChange}
              value="socioBroker"
              id="socioBroker"
              name="reclamante"
              error={validate && !!errors.reclamante}
            />
          </div>
        </GridItem>
        <GridItem sm={12} md={4}>
          <InputLabel>Tipo reclamación:</InputLabel>
          <div>
            <InputRadio
              label="Inicial"
              checked={values.tipoReclamacion === "inicial"}
              handleChange={handleChange}
              value="inicial"
              id="inicial"
              name="tipoReclamacion"
              error={validate && !!errors.tipoReclamacion}
            />
            <InputRadio
              label="Complemento"
              checked={values.tipoReclamacion === "complemento"}
              handleChange={handleChange}
              value="complemento"
              id="complemento"
              name="tipoReclamacion"
              error={validate && !!errors.tipoReclamacion}
            />
          </div>
        </GridItem>
        <GridItem sm={12} md={3}>
          <DateTime
            id="fechaReclamo"
            name="fechaReclamo"
            value={values.fechaReclamo}
            labelText="Fecha de reclamo"
            placeholder="dd/mm/yyyy"
            handleChange={handleChange}
            error={validate && !!errors.fechaReclamo}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

TipoReclamacion.defaultProps = {
  validate: false,
};

TipoReclamacion.propTypes = {
  values: PropTypes.shape({
    reclamante: PropTypes.string,
    tipoReclamacion: PropTypes.string,
    fechaReclamo: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    reclamante: PropTypes.string,
    tipoReclamacion: PropTypes.string,
    fechaReclamo: PropTypes.string,
  }).isRequired,
  validate: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: schema,
  validateOnMount: true,
})(TipoReclamacion);
