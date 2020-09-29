import * as yup from "yup";

const schema = yup.object().shape({
  descripcion: yup.string().required("Este es un campo requerido"),
  fechaSiniestro: yup.string().required("Este es un campo requerido"),
  vigenciaCertificadoInicio: yup
    .string()
    .required("Este es un campo requerido"),
  vigenciaCertificadoTermino: yup
    .string()
    .required("Este es un campo requerido"),
});

export default schema;
