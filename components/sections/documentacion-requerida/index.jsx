// Dependencies
import { withFormik } from "formik";
import PropTypes from "prop-types";

// core-components
import Section from "~/components/Section/Section";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import InputCheckBox from "~/components/CustomCheckBox/CustomCheckBox";

// validation schema && initial values
import schema from "./schema";
import initialValues from "./initialValues";

const desempleoCheck = [
  {
    id: "copiaFiniquito",
    name: "copiaFiniquito",
    label:
      "Copia de Finiquito, Liquidación emitido por RH de la empresa o Copia de la Demanda ante Junta de Conciliación (Sólo si aplica)",
  },
  {
    id: "copiaContratatoTrabajo",
    name: "copiaContratatoTrabajo",
    label: "Copia del Contrato de Trabajo por tiempo indeterminado",
  },
  {
    id: "copiaBajaIMSS",
    name: "copiaBajaIMSS",
    label: "Copia baja del IMSS, ISSSTE o Dependencia Gubernamental",
  },
  {
    id: "copiaNomina",
    name: "copiaNomina",
    label: "Copia de los últimos 3 recibos de nómina ",
  },
  {
    id: "formatoFM2FM3",
    name: "formatoFM2FM3",
    label: "Formato FM2/FM3 (si aplica) ",
  },
  {
    id: "copiaCheque",
    name: "copiaCheque",
    label:
      "Copia del cheque, transferencia o estado de cuenta del pago finiquito",
  },
];

const invalidezTotalPermanenteCheck = [
  {
    id: "copiaHistorico",
    name: "copiaHistorico",
    label: "Copia de Historia Clínica o Resumen Médico",
  },
  {
    id: "copiaFiel",
    name: "copiaFiel",
    label:
      "Copia Fiel de la Incapacidad Total, temporal y/o Permanente por el IMSS, ISSSTE o dependencia Gubernamental ",
  },
  {
    id: "copiaDictamenMedico",
    name: "copiaDictamenMedico",
    label:
      "Dictamen Médico acreditando la Invalidez Total, Temporal y/o Permanente ",
  },
  {
    id: "analisisClinicos",
    name: "analisisClinicos",
    label:
      "Análisis clínicos, estudios, Imagen “RX, TC, RM” (Interpretación de radiografías, tomografías o de Resonancia Magnética)",
  },
  {
    id: "copiaActaMatrimonio",
    name: "copiaActaMatrimonio",
    label:
      "Copia del acta de Matrimonio, en caso de ser Cónyuge Beneficiario (a) ",
  },
  {
    id: "copiaActaNacimiento",
    name: "copiaActaNacimiento",
    label: "Copia del Acta de Nacimiento de los Beneficiarios",
  },
  {
    id: "notarialTutores",
    name: "notarialTutores",
    label:
      "En caso de que haber nombrado beneficiarios menores de edad, fe notarial de tutores, albaceas",
  },
  {
    id: "formatoST4",
    name: "formatoST4",
    label: "Formato ST-4, por IMSS y/o ISSSTE RT-09 ",
  },
];

const indemnizacionEnfermedadesCheck = [
  {
    id: "informeMedico",
    name: "informeMedico",
    label: "Informe Médico (Debidamente Requisitado)",
  },
  {
    id: "analisisPatologicos",
    name: "analisisPatologicos",
    label:
      "Análisis clínicos patológicos, estudios, Imagen “RX, TC, RM” (Interpretación de radiografías, tomografías o de Resonancia Magnética) ",
  },
];

const gastosFunerariosCheck = [
  {
    id: "actaDefuncion",
    name: "actaDefuncion",
    label: "Acta Original de Defunción del Asegurado Siniestrado ",
  },
  {
    id: "copiaCertificadoDefuncion",
    name: "copiaCertificadoDefuncion",
    label: "Copia del Certificado de Defunción ",
  },
  {
    id: "copiaIneOficial",
    name: "copiaIneOficial",
    label:
      "Copia de alguna identificación oficial con fotografía y firma del(los) Beneficiario(s). En caso de ser extranjero FM2 o 3 ",
  },
  {
    id: "copiaBeneficiaria",
    name: "copiaBeneficiaria",
    label:
      "Copia del acta de Matrimonio, en caso de ser Beneficiaria Esposa (o)",
  },
  {
    id: "copiaNacimientoBeneficiario",
    name: "copiaNacimientoBeneficiario",
    label: "Copia del Acta de Nacimiento de los Beneficiarios",
  },
  {
    id: "beneficiariosMenores",
    name: "beneficiariosMenores",
    label:
      "En caso de que haber nombrado beneficiarios menores de edad, fe notarial de tutores",
  },
  {
    id: "ministerioPublico",
    name: "ministerioPublico",
    label:
      "Actuaciones ante el Ministerio Público (solo si aplica Muerte por accidente y/o cualquier tipo de Homicidio)",
  },
  {
    id: "historialClinico",
    name: "historialClinico",
    label: "Historia Clínica ",
  },
];

const roboCheck = [
  {
    id: "copiaDenuncia",
    label:
      "Copia de la denuncia por Robo presentada ante el Ministerio Público. ",
  },
  {
    id: "copiaActuacionesMinisterio",
    label:
      "Copias Certificadas de las actuaciones realizadas ante el Ministerio Público, de la denuncia penal por Robo. Las copias certificadas deberán contener la denuncia y en su caso, su ampliación, la ratificación de la denuncia, en su caso, la inspección ocular y fe ministerial realizada en el lugar de los hechos, así como el acreditar la propiedad y preexistencia del bien.",
  },
];
const DocumentacionRequerida = ({ values, errors, handleChange, onChange }) => {
  React.useEffect(() => {
    if (onChange) {
      onChange(values, errors, "documentacionRequerida");
    }
  }, [values]);
  return (
    <div>
      <Section title="Documentación Requerida para Atención de Siniestros" />
      <GridContainer>
        <GridItem sm={12} md={8}>
          Nota: En todos los casos de reclamación es necesario anexar al
          presente formato:
          <br />
          1.- IFE, Pasaporte y/o Cédula Profesional, Vigente del asegurado y
          beneficiarios
          <br />
          2.- Último comprobante de pago de la póliza *(En caso de contar con
          esta)
          <br />
          3.- Carátula y/o Certificado de la póliza *(En caso de contar con
          este)
          <br />
          4.- Informe Médico “ si aplica”
          <br />
          5.- Comprobante de Domicilio, de igual manera para el beneficiario (s)
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem sm={12} md={12} style={{ marginTop: "2rem" }}>
          <h4 style={{ textAlign: "center" }}>
            Documentos requeridos adicionalmente al presente formato (según el
            caso dé click en la casilla respectiva):
          </h4>
        </GridItem>
        <h5 style={{ marginLeft: "1rem", fontWeight: "bold" }}>Desempleo:</h5>
        {desempleoCheck.map((check) => (
          <GridItem sm={12} md={12} key={check.id}>
            <InputCheckBox
              checked={values[check.id]}
              id={check.id}
              name={check.name}
              label={check.label}
              handleChange={handleChange}
              inputProps={{
                name: check.name,
              }}
            />
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        <h5 style={{ marginLeft: "1rem", fontWeight: "bold" }}>
          Invalidez Total, Temporal y/o Permanente:
        </h5>
        {invalidezTotalPermanenteCheck.map((check) => (
          <GridItem sm={12} md={12} key={check.id}>
            <InputCheckBox
              checked={values[check.id]}
              id={check.id}
              name={check.name}
              label={check.label}
              handleChange={handleChange}
              inputProps={{
                name: check.name,
              }}
            />
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        <h5 style={{ marginLeft: "1rem", fontWeight: "bold" }}>
          Indemnización por Enfermedades Graves
        </h5>
        {indemnizacionEnfermedadesCheck.map((check) => (
          <GridItem sm={12} md={12} key={check.id}>
            <InputCheckBox
              checked={values[check.id]}
              id={check.id}
              name={check.name}
              label={check.label}
              handleChange={handleChange}
              inputProps={{
                name: check.name,
              }}
            />
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        <h5 style={{ marginLeft: "1rem", fontWeight: "bold" }}>
          Fallecimiento y/o Gastos Funerarios
        </h5>
        {gastosFunerariosCheck.map((check) => (
          <GridItem sm={12} md={12} key={check.id}>
            <InputCheckBox
              checked={values[check.id]}
              id={check.id}
              name={check.name}
              label={check.label}
              handleChange={handleChange}
              inputProps={{
                name: check.name,
              }}
            />
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        <h5 style={{ marginLeft: "1rem", fontWeight: "bold" }}>Robo:</h5>
        {roboCheck.map((check) => (
          <GridItem sm={12} md={12} key={check.id}>
            <InputCheckBox
              checked={values[check.id]}
              id={check.id}
              name={check.name}
              label={check.label}
              handleChange={handleChange}
              inputProps={{
                name: check.name,
              }}
            />
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};
DocumentacionRequerida.propTypes = {
  values: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: schema,
})(DocumentacionRequerida);
