// Dependencies
import { useFormik } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import CardBody from "~/components/Card/CardBody";
import CardHeader from "~/components/Card/CardHeader";
import CustomTextInput from "~/components/CustomTextInput/CustomTextInput";
import Button from "~/components/CustomButtons/Button";

// images
import LogoIW from "~/assets/img/IWLogo.png";

// styles
import loginPageStyle from "~/assets/jss/pages/loginPageStyle";

const useStyles = makeStyles(loginPageStyle);

const LoginForm = ({ handleSubmitForm }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      username: "eve.holt@reqres.in", // Remove this
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Este es un campo requerido"),
      password: yup.string().required("Este es un campo requerido"),
    }),
    onSubmit: handleSubmitForm,
    validateOnChange: false,
  });

  const { values, errors, handleChange, handleSubmit, isSubmitting } = formik;

  return (
    <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
      <CardHeader className={classes.cardHeader}>
        <h4 className={classes.cardTitle}>Login</h4>
        <img src={LogoIW} className={classes.cardTitleImage} alt="Login Logo" />
      </CardHeader>
      <CardBody className={classes.cardBody}>
        <CustomTextInput
          labelText="Usuario"
          id="username"
          value={values.username}
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            name: "username",
            placeholder: "Usuario",
            type: "text",
            endAdornment: (
              <InputAdornment position="end">
                <Email className={classes.inputIconsColor} />
              </InputAdornment>
            ),
          }}
          handleChange={handleChange}
          error={errors.username}
        />
        <CustomTextInput
          labelText="Contraseña"
          id="password"
          value={values.password}
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            name: "password",
            placeholder: "Password",
            type: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon className={classes.inputIconsColor}>lock_utline</Icon>
              </InputAdornment>
            ),
            autoComplete: "off",
          }}
          handleChange={handleChange}
          error={errors.password}
        />
      </CardBody>
      <div className={classes.textCenter}>
        <Button type="submit" disabled={isSubmitting} color="primary">
          Ingresar
        </Button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default LoginForm;
