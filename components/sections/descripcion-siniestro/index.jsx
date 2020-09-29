// Dependencies
import { withFormik } from "formik";
import PropTypes from "prop-types";

// core-components
import Section from "~/components/Section/Section";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import TextInputField from "~/components/CustomTextInput/CustomTextInput";
import DateTime from "~/components/DateTime/DateTime";

// validation schema && initial values
import schema from "./schema";
import initialValues from "./initialValues";

const DescripcionSiniestro = ({
  values,
  errors,
  validate,
  handleChange,
  onChange,
}) => {
  React.useEffect(() => {
    if (onChange) {
      onChange(values, errors, "descripcionSiniestro");
    }
  }, [values, errors]);

  return (
    <div>
      <Section title="Describa como ocurrió el Siniestro" />
      <GridContainer>
        <GridItem sm={12} md={12}>
          <TextInputField
            id="descripcion"
            name="descripcion"
            placeholder="Textarea"
            labelText="Describa como ocurrió el siniestro"
            fullWidth
            multiline
            handleChange={handleChange}
            error={validate && !!errors.descripcion}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem sm={12} md={5} style={{ display: "flex" }}>
          <GridContainer
            style={{ alignItems: " flex-end", justifyContent: "center" }}
          >
            <DateTime
              id="fechaSiniestro"
              name="fechaSiniestro"
              labelText="Fecha de Siniestro:"
              value={values.fechaSiniestro}
              placeholder="dd/mm/yyyy"
              handleChange={handleChange}
              error={validate && !!errors.fechaSiniestro}
            />
          </GridContainer>
        </GridItem>
        <GridItem sm={12} md={6}>
          <p
            style={{
              fontWeight: "bold",
              marginTop: "1.300rem",
              textAlign: "center",
              marginBottom: "1.100rem",
            }}
          >
            Vigencia de Certificado, Póliza y/o Contrato
          </p>
          <GridContainer>
            <GridItem sm={12} md={6}>
              <DateTime
                id="vigenciaCertificadoInicio"
                name="vigenciaCertificadoInicio"
                value={values.vigenciaCertificadoInicio}
                labelText="Fecha Inicio vigencia"
                placeholder="dd/mm/yyyy"
                handleChange={handleChange}
                error={validate && !!errors.vigenciaCertificadoInicio}
              />
            </GridItem>
            <GridItem sm={12} md={6}>
              <DateTime
                id="vigenciaCertificadoTermino"
                name="vigenciaCertificadoTermino"
                value={values.vigenciaCertificadoTermino}
                labelText="Fecha Término de vigencia "
                placeholder="dd/mm/yyyy"
                handleChange={handleChange}
                error={validate && !!errors.vigenciaCertificadoTermino}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
};

DescripcionSiniestro.defaultProps = {
  validate: false,
};

DescripcionSiniestro.propTypes = {
  values: PropTypes.shape({
    descripcion: PropTypes.string,
    fechaSiniestro: PropTypes.string,
    vigenciaCertificadoInicio: PropTypes.string,
    vigenciaCertificadoTermino: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    descripcion: PropTypes.string,
    fechaSiniestro: PropTypes.string,
    vigenciaCertificadoInicio: PropTypes.string,
    vigenciaCertificadoTermino: PropTypes.string,
  }).isRequired,
  validate: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: schema,
  validateOnMount: true,
})(DescripcionSiniestro);
