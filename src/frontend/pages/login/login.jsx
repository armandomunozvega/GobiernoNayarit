// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";

// components
import LoginForm from "~/page-sections/login/LoginForm";

// context
import { useAuth } from "~/store/AuthContext";

import loginPageStyle from "~/assets/jss/pages/loginPageStyle";

const useStyles = makeStyles(loginPageStyle);

const LoginPage = () => {
  const { handleLogin } = useAuth();
  const classes = useStyles();

  const onSubmitForm = (values, { setSubmitting }) => {
    handleLogin({ email: values.username, password: values.password });
    setSubmitting(false);
  };

  return (
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={4}>
            <Card>
              <LoginForm handleSubmitForm={onSubmitForm} />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default LoginPage;
