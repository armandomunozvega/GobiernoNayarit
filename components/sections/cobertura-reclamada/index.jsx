// Dependencies
import { withFormik } from "formik";

import PropTypes from "prop-types";

// core-components
import Section from "~/components/Section/Section";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import InputRadio from "~/components/CustomRadio/CustomRadio";
import TextInputField from "~/components/CustomTextInput/CustomTextInput";

import formData from "./formData";
import schema from "./schema";

import { includesItems } from "~/utils/Utils";

const CoberturaReclamada = ({
  values,
  errors,
  format,
  setFieldValue,
  onChange,
}) => {
  React.useEffect(() => {
    if (onChange) {
      onChange(values, errors, "coberturaReclamada");
    }
  }, [values, errors]);

  const controlChange = (event) => {
    const { name, value } = event.target;

    if (name === "coberturaReclamada" && values.otro) {
      setFieldValue("otro", "");
    }

    if (name === "otro" && values.coberturaReclamada) {
      setFieldValue("coberturaReclamada", "");
    }

    setFieldValue(name, value);
  };

  let formFields = formData;

  switch (format) {
    case "Formato_Único_Reclamante_Siniestro_Finiquito":
      formFields = includesItems(formData, [
        "incapacidadTotalPermanente",
        "incapacidadTotalTemporal",
        "desempleo",
        "fallecimiento",
        "fallecimientoAccidente",
        "hispitalizacionAccidenteEnfermedad",
        "endermedadesGraves",
        "bolsaCarteraCompraProtegida",
        "robo",
        "gastosFunerarios",
        "consumoRoboExtravioTarjeta",
        "falsificacionAlteracionTarjeta",
        "falsificacionAlteracionBandaMagnetica",
        "transferenciasElectronicasNoAutorizadas",
        "roboExtravioCheques",
        "roboMercanciaCompradaTarjetaDebito",
        "disposicionForzadaEfectivoRoboTarjetaDebito",
      ]);
      break;
    case "Formato_Siniestros_Momentos":
      formFields = includesItems(formData, [
        "desempleoInvFormles",
        "desempleoInvIncapacidad",
        "nacimientoHijo",
        "fallecimientoFamiliar",
        "cancelacionRecreativa",
        "titulacionAsegurado",
        "matrimonio",
        "roboEquipoFijo",
      ]);
      break;
    case "Formato_Siniestros_Plenitud":
      formFields = includesItems(formData, [
        "gastosFunerarios",
        "muerteAccidental",
        "indemizacionAccidentalEnfermedad",
        "invalidezPermanteAccidente",
        "ayudaHospitalicacion",
        "roturaHuesos",
        "modificacionesHogar",
      ]);
      break;
    case "Formato_Siniestros_Valora":
      formFields = includesItems(formData, [
        "roboMercanciaTarjeta",
        "roboEfectivo",
        "transferenciasNoReversibles",
        "roboCelularTables",
        "RoboEquiposFijosPortatil",
        "roboDocumentos",
        "RoboObjectoPersonales",
      ]);
      break;
    case "Formato_Siniestros_Vida":
      formFields = includesItems(formData, [
        "fallecimiento",
        "anticipoGastosInmediatos",
        "muerteAccidental",
      ]);
      break;
    default:
      return <div>Cargando</div>;
  }

  return (
    <div>
      <Section title="Cobertura Reclamada" />
      <GridContainer>
        <GridItem sm={12} md={8}>
          <div>
            <ul style={{ columns: "2", listStyle: "none" }}>
              {formFields.map((inputForm, index) => (
                <li key={index.toString()}>
                  <InputRadio
                    label={inputForm.label}
                    checked={values.coberturaReclamada === inputForm.value}
                    handleChange={controlChange}
                    value={inputForm.value}
                    id={inputForm.id}
                    name="coberturaReclamada"
                  />
                </li>
              ))}
              {format === "Formato_Único_Reclamante_Siniestro_Finiquito" && (
                <li>
                  <TextInputField
                    id="otro"
                    value={values.otro}
                    labelText="Otro"
                    handleChange={controlChange}
                    defaultInputProps={{
                      name: "otro",
                    }}
                    fullWidth
                  />
                </li>
              )}
            </ul>
          </div>
        </GridItem>
        <GridItem sm={12} md={4}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ marginLeft: "32px" }}>Nota:</p>
            <ul style={{ listStyle: "none" }}>
              <li>
                <p style={{ fontSize: "12px" }}>
                  1.- Este formato aplica para reclamar sólo una cobertura, en
                  caso de aplicar más de una cobertura es necesario llenar otro
                  formato.
                </p>
              </li>
              <li>
                <p style={{ fontSize: "12px" }}>
                  2.- Si no cuenta con datos bancarios se generará cheque de
                  pago de siniestro.
                </p>
              </li>
              <li>
                <p style={{ fontSize: "12px" }}>
                  3.- Al indicar la cobertura por afectar el presente formato,
                  ésta sólo aplicará según la carátula de póliza.
                </p>
              </li>
            </ul>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

CoberturaReclamada.propTypes = {
  values: PropTypes.shape({
    coberturaReclamada: PropTypes.string,
    otro: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({ coberturaReclamada: "", otro: "" }),
  validationSchema: schema,
})(CoberturaReclamada);
