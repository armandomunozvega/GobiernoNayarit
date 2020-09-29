// Dependencies
import { withFormik } from "formik";
import PropTypes from "prop-types";

// core-components
import Section from "~/components/Section/Section";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import TextInputField from "~/components/CustomTextInput/CustomTextInput";
import CustomSelect from "~/components/CustomSelect/CustomSelect";
import DateTime from "~/components/DateTime/DateTime";

// validation schema && initial values
import schema from "./schema";
import initialValues from "./initialValues";

const AseguradoContratante = ({
  values,
  errors,
  validate,
  handleChange,
  onChange,
  countries,
}) => {
  React.useEffect(() => {
    if (onChange) {
      onChange(values, errors, "aseguradoContratante");
    }
  }, [values, errors]);

  return (
    <div>
      <Section title="Asegurado y/o Contratante" />
      <GridContainer>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="nombreAseguradoContratante"
            name="nombreAseguradoContratante"
            value={values.nombreAseguradoContratante}
            labelText="Nombre"
            placeholder="Nombre"
            handleChange={handleChange}
            error={validate && !!errors.nombreAseguradoContratante}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="apellidoPaternoAseguradoContratante"
            name="apellidoPaternoAseguradoContratante"
            value={values.apellidoPaternoAseguradoContratante}
            labelText="Apellido Paterno"
            placeholder="Apellido Paterno"
            handleChange={handleChange}
            error={validate && !!errors.apellidoPaternoAseguradoContratante}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="apellidoMaternoAseguradoContratante"
            name="apellidoMaternoAseguradoContratante"
            value={values.apellidoMaternoAseguradoContratante}
            labelText="Apellido Materno"
            placeholder="Apellido Materno"
            handleChange={handleChange}
            error={validate && !!errors.apellidoMaternoAseguradoContratante}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="direccionCalleNumeroAseguradoContratante"
            name="direccionCalleNumeroAseguradoContratante"
            value={values.direccionCalleNumeroAseguradoContratante}
            labelText="Dirección Calle y Número"
            placeholder="Dirección Calle y Número"
            handleChange={handleChange}
            error={
              validate && !!errors.direccionCalleNumeroAseguradoContratante
            }
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="polizaAseguradoContratante"
            name="polizaAseguradoContratante"
            value={values.polizaAseguradoContratante}
            labelText="Número de  Certificado, Póliza,Ref. y/o Nº de Crédito"
            placeholder="Número de  Certificado, Póliza,Ref. y/o Nº de Crédito"
            handleChange={handleChange}
            error={validate && !!errors.polizaAseguradoContratante}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="cpAseguradoContratante"
            name="cpAseguradoContratante"
            value={values.cpAseguradoContratante}
            labelText="C.P."
            placeholder="C.P."
            handleChange={handleChange}
            defaultInputProps={{
              maxLength: 5,
            }}
            error={validate && !!errors.cpAseguradoContratante}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <CustomSelect
            labelText="Colonia"
            id="coloniaAseguradoContratante"
            value={values.coloniaAseguradoContratante}
            inputProps={{
              name: "coloniaAseguradoContratante",
            }}
            handleChange={handleChange}
            placeholder="Colonia"
            options={[]}
            error={validate && !!errors.coloniaAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="delegacionMunicipioAseguradoContratante"
            name="delegacionMunicipioAseguradoContratante"
            value={values.delegacionMunicipioAseguradoContratante}
            labelText="Delegación o Municipio"
            placeholder="Delegación o Municipio"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.delegacionMunicipioAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="estadoEntidadFederativaAseguradoContratante"
            name="estadoEntidadFederativaAseguradoContratante"
            value={values.estadoEntidadFederativaAseguradoContratante}
            labelText="Ciudad"
            placeholder="Ciudad"
            handleChange={handleChange}
            fullWidth
            error={
              validate && !!errors.estadoEntidadFederativaAseguradoContratante
            }
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="nacionalidadAseguradoContratante"
            name="nacionalidadAseguradoContratante"
            value={values.nacionalidadAseguradoContratante}
            labelText="Nacionalidad"
            placeholder="Nacionalidad"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.nacionalidadAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <CustomSelect
            labelText="País de nacimiento"
            id="paisNacimientoAseguradoContratante"
            value={values.paisNacimientoAseguradoContratante}
            inputProps={{
              name: "paisNacimientoAseguradoContratante",
            }}
            handleChange={handleChange}
            placeholder="País de nacimiento"
            options={countries}
            error={validate && !!errors.paisNacimientoAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <DateTime
            id="fechaNacimientoAseguradoContratante"
            name="fechaNacimientoAseguradoContratante"
            value={values.fechaNacimientoAseguradoContratante}
            labelText="Fecha de nacimiento"
            placeholder="dd/mm/yyyy"
            handleChange={handleChange}
            error={validate && !!errors.fechaNacimientoAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="telefonoAseguradoContratante"
            name="telefonoAseguradoContratante"
            value={values.telefonoAseguradoContratante}
            labelText="Teléfono"
            placeholder="Teléfono"
            handleChange={handleChange}
            defaultInputProps={{
              maxLength: 10,
            }}
            fullWidth
            error={validate && !!errors.telefonoAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="celularAseguradoContratante"
            name="celularAseguradoContratante"
            value={values.celularAseguradoContratante}
            labelText="Celular"
            placeholder="Celular"
            handleChange={handleChange}
            fullWidth
            defaultInputProps={{
              maxLength: 10,
            }}
            error={validate && !!errors.celularAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="correoElectronicoAseguradoContratante"
            name="correoElectronicoAseguradoContratante"
            value={values.correoElectronicoAseguradoContratante}
            labelText="Correo electrónico"
            placeholder="Correo electrónico"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.correoElectronicoAseguradoContratante}
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="rfcAseguradoContratante"
            name="rfcAseguradoContratante"
            value={values.rfcAseguradoContratante}
            labelText="RFC / CURP (Opcional)"
            placeholder="RFC / CURP (Opcional)"
            handleChange={handleChange}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="fielAseguradoContratante"
            name="fielAseguradoContratante"
            value={values.fielAseguradoContratante}
            labelText="FIEL (Opcional)"
            placeholder="FIEL (Opcional)"
            handleChange={handleChange}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="ocupacionAseguradoContratante"
            name="ocupacionAseguradoContratante"
            value={values.ocupacionAseguradoContratante}
            labelText="Ocupación"
            placeholder="Ocupación"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.ocupacionAseguradoContratante}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

AseguradoContratante.defaultProps = {
  validate: false,
};

AseguradoContratante.propTypes = {
  values: PropTypes.shape({
    nombreAseguradoContratante: PropTypes.string,
    apellidoPaternoAseguradoContratante: PropTypes.string,
    apellidoMaternoAseguradoContratante: PropTypes.string,
    direccionCalleNumeroAseguradoContratante: PropTypes.string,
    polizaAseguradoContratante: PropTypes.string,
    cpAseguradoContratante: PropTypes.string,
    coloniaAseguradoContratante: PropTypes.string,
    delegacionMunicipioAseguradoContratante: PropTypes.string,
    estadoEntidadFederativaAseguradoContratante: PropTypes.string,
    nacionalidadAseguradoContratante: PropTypes.string,
    paisNacimientoAseguradoContratante: PropTypes.string,
    fechaNacimientoAseguradoContratante: PropTypes.string,
    telefonoAseguradoContratante: PropTypes.string,
    celularAseguradoContratante: PropTypes.string,
    correoElectronicoAseguradoContratante: PropTypes.string,
    rfcAseguradoContratante: PropTypes.string,
    fielAseguradoContratante: PropTypes.string,
    ocupacionAseguradoContratante: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    nombreAseguradoContratante: PropTypes.string,
    apellidoPaternoAseguradoContratante: PropTypes.string,
    apellidoMaternoAseguradoContratante: PropTypes.string,
    direccionCalleNumeroAseguradoContratante: PropTypes.string,
    polizaAseguradoContratante: PropTypes.string,
    cpAseguradoContratante: PropTypes.string,
    coloniaAseguradoContratante: PropTypes.string,
    delegacionMunicipioAseguradoContratante: PropTypes.string,
    estadoEntidadFederativaAseguradoContratante: PropTypes.string,
    nacionalidadAseguradoContratante: PropTypes.string,
    paisNacimientoAseguradoContratante: PropTypes.string,
    fechaNacimientoAseguradoContratante: PropTypes.string,
    telefonoAseguradoContratante: PropTypes.string,
    celularAseguradoContratante: PropTypes.string,
    correoElectronicoAseguradoContratante: PropTypes.string,
    rfcAseguradoContratante: PropTypes.string,
    fielAseguradoContratante: PropTypes.string,
    ocupacionAseguradoContratante: PropTypes.string,
  }).isRequired,
  validate: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: schema,
})(AseguradoContratante);
