// Dependencies
import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import PropTypes from "prop-types";

// account actions
import { login, getUser } from "~/reducers/account";
import { createModal, closeModal } from "~/reducers/modal";

import { createQuestionMessage } from "~/helpers/utils";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userErrors, setErrors] = useState({});

  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector(({ account }) => account.account);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("access_token");

      if (token) {
        axios.defaults.headers.common.Authorization = token;
        if (!user || !Object.keys(user).length) {
          dispatch(getUser(2));
        }
      }

      if (token && router.pathname === "/login") {
        router.push("/home");
      }

      if (!token && router.pathname !== "/login") {
        router.push("/login");
      }
    }
    loadUserFromCookies();
  }, [isLoggedIn]);

  const handleLogin = async (credentials) => {
    try {
      const { token } = await dispatch(login(credentials));

      if (token) {
        Cookies.set("access_token", token, { expires: 60 });
        axios.defaults.headers.common.Authorization = token;
        dispatch(getUser(2));

        setLoggedIn(true);
        router.push("/home");
      }
    } catch (err) {
      setErrors(err);
    }
  };

  const handleLogout = () => {
    dispatch(
      createModal(
        createQuestionMessage(
          "Cerrar sesión",
          "¿Seguro que desea cerrar sesión?",
          () => dispatch(closeModal()),
          () => {
            Cookies.remove("access_token");
            dispatch(closeModal());
            router.push("/login");
          }
        )
      )
    );
  };

  const value = useMemo(
    () => ({
      userErrors,
      handleLogin,
      handleLogout,
    }),
    [isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthContext, useAuth };
export default AuthProvider;
