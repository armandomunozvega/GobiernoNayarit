// Dependencies
import { withFormik } from "formik";
import PropTypes from "prop-types";

// core-components
import Section from "~/components/Section/Section";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import TextInputField from "~/components/CustomTextInput/CustomTextInput";

// validation schema && initial values
import schema from "./schema";
import initialValues from "./initialValues";

const Indemnizacion = ({
  values,
  errors,
  validate,
  handleChange,
  onChange,
}) => {
  React.useEffect(() => {
    if (onChange) {
      onChange(values, errors, "indemnizacion");
    }
  }, [values, errors]);

  return (
    <div>
      <GridContainer>
        <GridItem sm={12} md={12}>
          <p style={{ fontSize: "13px", marginTop: "1rem" }}>
            Declaro que la información aquí mencionada es completa y exacta.
            Asumo total responsabilidad de la veracidad de la misma y me
            comprometo con la compañía a dar toda la información requerida para
            la atención y análisis de este reclamo. En términos del artículo 69
            de la Ley sobre el Contrato de Seguro acepto que la compañía tendrá
            derecho de exigir toda clase de información sobre los hechos
            relacionados con el siniestro y por los cuales puedan determinarse
            las circunstancias de su realización y las consecuencias del mismo,
            incluso información adicional a la que en principio sea solicitada y
            entregada.
          </p>
        </GridItem>
      </GridContainer>
      <Section title="Datos para la indemnización de su reclamo" />
      <GridContainer>
        <GridItem sm={12} md={12}>
          <TextInputField
            id="nombreBeneficiario"
            name="nombreBeneficiario"
            value={values.nombreBeneficiario}
            labelText="NOMBRE DEL BENEFICIARIO"
            placeholder="NOMBRE DEL BENEFICIARIO"
            handleChange={handleChange}
            error={validate && !!errors.nombreBeneficiario}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="numeroCuenta"
            name="numeroCuenta"
            value={values.numeroCuenta}
            labelText="NÚMERO DE CUENTA"
            handleChange={handleChange}
            placeholder="NÚMERO DE CUENTA"
            error={validate && !!errors.numeroCuenta}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="clabe"
            name="clabe"
            value={values.clabe}
            labelText="CLABE"
            handleChange={handleChange}
            placeholder="CLABE"
            error={validate && !!errors.clabe}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="sucursal"
            name="sucursal"
            value={values.sucursal}
            labelText="SUCURSAL"
            handleChange={handleChange}
            placeholder="SUCURSAL"
            error={validate && !!errors.sucursal}
            fullWidth
          />
        </GridItem>
        <GridItem sm={12} md={3}>
          <TextInputField
            id="banco"
            name="banco"
            value={values.banco}
            labelText="BANCO"
            placeholder="BANCO"
            error={validate && !!errors.banco}
            handleChange={handleChange}
            fullWidth
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <div
          style={{
            fontSize: "13px",
            background: "#F1F1F1",
            padding: " 27px",
            borderRadius: "21px",
            width: "96%",
            margin: "21px",
          }}
        >
          En caso de ser procedente el presente reclamo, es mi deseo que el
          importe correspondiente sea depositado en la cuenta bancaria antes
          señalada, de la cual declaro ser titular o cotitular firmando en ella
          de forma independiente (no mancomunada); por lo que habiendo cumplido
          Cardif México Seguros de Vida, S.A. de C.V. y/o Cardif México Seguros
          Generales, S.A. de C.V. con la obligación de pago derivada del
          presente reclamo y conforme a las condiciones generales aplicables al
          seguro que se reclama, en este acto, otorgo el finiquito más amplio y
          absoluto que en derecho exista, no reservándome acción o derecho
          alguno que ejercer en contra de Cardif México Seguros de Vida, S.A. de
          C.V. y/o Cardif México Seguros Generales, S.A. de C.V
          <br />
          <strong>
            “A fin de realizar el pago correspondiente, es necesario que anexe
            al presente formato, copia del estado de cuenta donde se refleje el
            número de cuenta y cuenta clabe antes señalado.”
          </strong>
        </div>
      </GridContainer>
      <GridItem
        sm={12}
        md={8}
        style={{ marginLeft: " auto", marginRight: "auto" }}
      >
        <p style={{ fontSize: "10px", textAlign: "center", margin: "0px" }}>
          Nota: La Documentación deberá ser enviada a Mesa de Control Horario de
          recepción de documentación de Siniestros 07:30 a 18:30 hrs. de Lunes a
          Jueves / Viernes de 07:30 a 14:30 Paseo de las Palmas 425 - Mezzanine
          Lomas de Chapultepec C.P. 11000 México, D.F. Contacto Tel:
          01800-522-7343 Mail: mesadecontrol@cardif.com.mx
        </p>
      </GridItem>
      <GridContainer>
        <div
          style={{
            background: "#F1F1F1",
            fontSize: "13px",
            padding: " 27px",
            borderRadius: "21px",
            width: "96%",
            margin: "21px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              margin: "2px",
              fontWeight: "bold",
            }}
          >
            Aviso de Privacidad
          </p>
          Cardif México Seguros de Vida, S.A. de C.V. y/o Cardif México Seguros
          Generales, S.A. de C.V., (en lo sucesivo y conjuntamente “Cardif”),
          con domicilio en Avenida Paseo de las Palmas, 425, piso 5, colonia
          Lomas de Chapultepec, C.P. 11000, México, D.F., le informa que los
          datos personales recabados, serán protegidos de conformidad con la Ley
          Federal de Protección de Datos Personales en Posesión de los
          Particulares y demás regulación aplicable. El tratamiento que se haga
          de sus datos será con la finalidad, de forma enunciativa más no
          limitativa, de analizar las circunstancias relacionadas con el
          siniestro que se reclama, así como cumplir con las obligaciones
          legales que le deriven a Cardif, para lo cual recabaremos datos de
          identificación, datos personales sensibles en términos de la ley antes
          referida y datos financieros y patrimoniales. Para consultar el aviso
          de privacidad completo, por favor ingrese a
          http://www.bnpparibascardif.com.mx/espid2386/aviso-privacidad.html
        </div>
      </GridContainer>
      <GridContainer>
        <GridItem sm={12} md={12}>
          <p
            style={{
              textAlign: "center",
              margin: "2px",
              fontWeight: "bold",
            }}
          >
            Consentimiento
          </p>
          <p style={{ fontSize: "13px" }}>
            Por este medio autorizo a Cardif para tratar y en su caso transferir
            los datos personales, para los fines vinculados con la relación
            jurídica que tengamos celebrada, o que en su caso, se celebre, así
            como para realizar encuestas de satisfacción respecto de los
            servicios proporcionados por Cardif.
          </p>
          <p style={{ fontSize: "13px" }}>
            En caso de haber proporcionado datos personales, sensibles,
            patrimoniales o financieros de otros titulares me obligo a hacer del
            conocimiento de dichos titulares que he proporcionado tales datos a
            Cardif y a hacer de su conocimiento los lugares en donde se
            encuentra a su disposición el referido Aviso de Privacidad
          </p>
        </GridItem>
        <GridItem
          sm={12}
          md={5}
          style={{ marginLeft: " auto", marginRight: "auto" }}
        >
          <TextInputField
            id="nombreDatosIndemnizacion"
            name="nombreDatosIndemnizacion"
            value={values.nombreDatosIndemnizacion}
            labelText="Nombre"
            handleChange={handleChange}
            placeholder="Nombre"
            error={validate && !!errors.nombreDatosIndemnizacion}
            fullWidth
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

Indemnizacion.defaultProps = {
  validate: false,
};

Indemnizacion.propTypes = {
  values: PropTypes.shape({
    nombreBeneficiario: PropTypes.string,
    nombreDatosIndemnizacion: PropTypes.string,
    numeroCuenta: PropTypes.string,
    clabe: PropTypes.string,
    sucursal: PropTypes.string,
    banco: PropTypes.string,
    usoExclusivo: PropTypes.string,
    mesaControl: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    nombreBeneficiario: PropTypes.string,
    nombreDatosIndemnizacion: PropTypes.string,
    numeroCuenta: PropTypes.string,
    clabe: PropTypes.string,
    sucursal: PropTypes.string,
    banco: PropTypes.string,
    usoExclusivo: PropTypes.string,
    mesaControl: PropTypes.string,
  }).isRequired,
  validate: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: schema,
  validateOnMount: true,
})(Indemnizacion);
