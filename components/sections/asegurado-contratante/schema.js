// Dependencies
import * as yup from "yup";

const schema = yup.object().shape({
  nombreAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  apellidoPaternoAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  apellidoMaternoAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  direccionCalleNumeroAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  cpAseguradoContratante: yup.string().required("Este es un campo requerido"),
  coloniaAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  estadoEntidadFederativaAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  delegacionMunicipioAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  nacionalidadAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  paisNacimientoAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  polizaAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  fechaNacimientoAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  telefonoAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  celularAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
  correoElectronicoAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido")
    .email(),
  rfcAseguradoContratante: yup.string().notRequired(),
  fielAseguradoContratante: yup.string().notRequired(),
  ocupacionAseguradoContratante: yup
    .string()
    .required("Este es un campo requerido"),
});

export default schema;
