import * as yup from "yup";

const schema = yup.object().shape({
  coberturaReclamada: yup.string().required("Este es un campo requerido"),
  otro: yup.string(),
});

export default schema;
