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

const Beneficiario = ({
  values,
  errors,
  validate,
  handleChange,
  onChange,
  countries,
}) => {
  React.useEffect(() => {
    if (onChange) {
      onChange(values, errors, "beneficiario");
    }
  }, [values, errors]);

  return (
    <div>
      <Section title="Asegurado y/o Contratante" />
      <GridContainer>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="nombre"
            name="nombre"
            value={values.nombre}
            labelText="Nombre"
            placeholder="Nombre"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.nombre}
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="apellidoPaterno"
            name="apellidoPaterno"
            value={values.apellidoPaterno}
            labelText="Apellido Paterno"
            placeholder="Apellido Paterno"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.apellidoPaterno}
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="apellidoMaterno"
            name="apellidoMaterno"
            value={values.apellidoMaterno}
            labelText="Apellido Materno"
            placeholder="Apellido Materno"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.apellidoMaterno}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="direccionCalleNumero"
            name="direccionCalleNumero"
            value={values.direccionCalleNumero}
            labelText="Dirección Calle y Número"
            placeholder="Dirección Calle y Número"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.direccionCalleNumero}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="poliza"
            name="poliza"
            value={values.poliza}
            labelText="Número de  Certificado, Póliza,Ref. y/o Nº de Crédito"
            placeholder="Número de  Certificado, Póliza,Ref. y/o Nº de Crédito"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.poliza}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="cp"
            name="cp"
            value={values.cp}
            labelText="C.P."
            placeholder="C.P."
            handleChange={handleChange}
            defaultInputProps={{
              maxLength: 5,
            }}
            fullWidth
            error={validate && !!errors.cp}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <CustomSelect
            labelText="Colonia"
            id="colonia"
            value={values.colonia}
            inputProps={{
              name: "colonia",
            }}
            handleChange={handleChange}
            placeholder="Colonia"
            options={[]}
            error={validate && !!errors.colonia}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="delegacionMunicipio"
            name="delegacionMunicipio"
            value={values.delegacionMunicipio}
            labelText="Delegación o Municipio"
            placeholder="Delegación o Municipio"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.delegacionMunicipio}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="estadoEntidadFederativa"
            name="estadoEntidadFederativa"
            value={values.estadoEntidadFederativa}
            labelText="Ciudad"
            placeholder="Ciudad"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.estadoEntidadFederativa}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="nacionalidad"
            name="nacionalidad"
            value={values.nacionalidad}
            labelText="Nacionalidad"
            placeholder="Nacionalidad"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.nacionalidad}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <CustomSelect
            labelText="País de nacimiento"
            id="paisNacimiento"
            value={values.paisNacimiento}
            inputProps={{
              name: "paisNacimiento",
            }}
            handleChange={handleChange}
            placeholder="País de nacimiento"
            options={countries}
            error={validate && !!errors.paisNacimiento}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <DateTime
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={values.fechaNacimiento}
            labelText="Fecha de nacimiento"
            placeholder="dd/mm/yyyy"
            handleChange={handleChange}
            error={validate && !!errors.fechaNacimiento}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="telefono"
            name="telefono"
            value={values.telefono}
            labelText="Teléfono"
            placeholder="Teléfono"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.telefono}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="celular"
            name="celular"
            value={values.celular}
            labelText="Celular"
            placeholder="Celular"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.celular}
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="correoElectronico"
            name="correoElectronico"
            value={values.correoElectronico}
            labelText="Correo electrónico"
            placeholder="Correo electrónico"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.correoElectronico}
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="rfc"
            name="rfc"
            value={values.rfc}
            labelText="RFC / CURP (Opcional)"
            placeholder="RFC / CURP (Opcional)"
            handleChange={handleChange}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="fiel"
            name="fiel"
            value={values.fiel}
            labelText="FIEL (Opcional)"
            placeholder="FIEL (Opcional)"
            handleChange={handleChange}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={4}>
          <TextInputField
            id="ocupacion"
            name="ocupacion"
            value={values.ocupacion}
            labelText="Ocupación"
            placeholder="Ocupación"
            handleChange={handleChange}
            fullWidth
            error={validate && !!errors.ocupacion}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

Beneficiario.defaultProps = {
  validate: false,
};

Beneficiario.propTypes = {
  values: PropTypes.shape({
    nombre: PropTypes.string,
    apellidoPaterno: PropTypes.string,
    apellidoMaterno: PropTypes.string,
    direccionCalleNumero: PropTypes.string,
    poliza: PropTypes.string,
    cp: PropTypes.string,
    colonia: PropTypes.string,
    delegacionMunicipio: PropTypes.string,
    estadoEntidadFederativa: PropTypes.string,
    nacionalidad: PropTypes.string,
    paisNacimiento: PropTypes.string,
    fechaNacimiento: PropTypes.string,
    telefono: PropTypes.string,
    celular: PropTypes.string,
    correoElectronico: PropTypes.string,
    rfc: PropTypes.string,
    fiel: PropTypes.string,
    ocupacion: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    nombre: PropTypes.string,
    apellidoPaterno: PropTypes.string,
    apellidoMaterno: PropTypes.string,
    direccionCalleNumero: PropTypes.string,
    poliza: PropTypes.string,
    cp: PropTypes.string,
    colonia: PropTypes.string,
    delegacionMunicipio: PropTypes.string,
    estadoEntidadFederativa: PropTypes.string,
    nacionalidad: PropTypes.string,
    paisNacimiento: PropTypes.string,
    fechaNacimiento: PropTypes.string,
    telefono: PropTypes.string,
    celular: PropTypes.string,
    correoElectronico: PropTypes.string,
    rfc: PropTypes.string,
    fiel: PropTypes.string,
    ocupacion: PropTypes.string,
  }).isRequired,
  validate: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: schema,
  validateOnMount: true,
})(Beneficiario);
