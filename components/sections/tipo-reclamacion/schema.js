// Dependencies
import * as yup from "yup";

const schema = yup.object().shape({
  reclamante: yup.string().required("Este es un campo requerido"),
  tipoReclamacion: yup.string().required("Este es un campo requerido"),
  fechaReclamo: yup.string().required("Este es un campo requerido"),
});

export default schema;
