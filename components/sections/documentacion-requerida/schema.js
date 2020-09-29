import * as yup from "yup";

const schema = yup.object().shape({
  copiaFiniquito: yup.bool().notRequired("Este es un campo requerido"),
  copiaContratatoTrabajo: yup
    .bool()
    .notRequired("Este es un campo requerido"),
  copiaBajaIMSS: yup.bool().notRequired("Este es un campo requerido"),
  copiaNomina: yup.bool().notRequired("Este es un campo requerido"),
  formatoFM2FM3: yup.bool().notRequired("Este es un campo requerido"),
  copiaCheque: yup.bool().notRequired("Este es un campo requerido"),
  copiaHistorico: yup.bool().notRequired("Este es un campo requerido"),
  copiaFiel: yup.bool().notRequired("Este es un campo requerido"),
  copiaDictamenMedico: yup.bool().notRequired("Este es un campo requerido"),
  analisisClinicos: yup.bool().notRequired("Este es un campo requerido"),
  copiaActaMatrimonio: yup.bool().notRequired("Este es un campo requerido"),
  copiaActaNacimiento: yup.bool().notRequired("Este es un campo requerido"),
  notarialTutores: yup.bool().notRequired("Este es un campo requerido"),
  formatoST4: yup.bool().notRequired("Este es un campo requerido"),
  informeMedico: yup.bool().notRequired("Este es un campo requerido"),
  analisisPatologicos: yup.bool().notRequired("Este es un campo requerido"),
  actaDefuncion: yup.bool().notRequired("Este es un campo requerido"),
  copiaCertificadoDefuncion: yup
    .bool()
    .notRequired("Este es un campo requerido"),
  copiaIneOficial: yup.bool().notRequired("Este es un campo requerido"),
  copiaBeneficiaria: yup.bool().notRequired("Este es un campo requerido"),
  copiaNacimientoBeneficiario: yup
    .bool()
    .notRequired("Este es un campo requerido"),
  beneficiariosMenores: yup.bool().notRequired("Este es un campo requerido"),
  ministerioPublico: yup.bool().notRequired("Este es un campo requerido"),
  historialClinico: yup.bool().notRequired("Este es un campo requerido"),
  copiaDenuncia: yup.bool().notRequired("Este es un campo requerido"),
  copiaActuacionesMinisterio: yup
    .bool()
    .notRequired("Este es un campo requerido"),
});

export default schema;
