// Dependencies
import * as yup from "yup";

const schema = yup.object().shape({
  nombre: yup.string().required("Este es un campo requerido"),
  apellidoPaterno: yup.string().required("Este es un campo requerido"),
  apellidoMaterno: yup.string().required("Este es un campo requerido"),
  direccionCalleNumero: yup.string().required("Este es un campo requerido"),
  cp: yup.string().required("Este es un campo requerido"),
  colonia: yup.string().required("Este es un campo requerido"),
  estadoEntidadFederativa: yup.string().required("Este es un campo requerido"),
  delegacionMunicipio: yup.string().required("Este es un campo requerido"),
  nacionalidad: yup.string().required("Este es un campo requerido"),
  paisNacimiento: yup.string().required("Este es un campo requerido"),
  poliza: yup.string().required("Este es un campo requerido"),
  fechaNacimiento: yup.string().required("Este es un campo requerido"),
  telefono: yup.string().required("Este es un campo requerido"),
  celular: yup.string().required("Este es un campo requerido"),
  correoElectronico: yup
    .string()
    .required("Este es un campo requerido")
    .email(),
  rfc: yup.string().notRequired(),
  fiel: yup.string().notRequired(),
  ocupacion: yup.string().required("Este es un campo requerido"),
});

export default schema;
