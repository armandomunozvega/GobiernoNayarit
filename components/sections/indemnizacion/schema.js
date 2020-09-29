import * as yup from "yup";

const schema = yup.object().shape({
  numeroCuenta: yup.string().required("Este es un campo requerido"),
  clabe: yup.string().required("Este es un campo requerido"),
  sucursal: yup.string().required("Este es un campo requerido"),
  banco: yup.string().required("Este es un campo requerido"),
  nombreBeneficiario: yup.string().required("Este es un campo requerido"),
  nombreDatosIndemnizacion: yup.string().required("Este es un campo requerido"),
});

export default schema;
