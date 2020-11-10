// Dependencies
import ReactDOM from "react-dom";
import Head from "next/head";
import Router from "next/router";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from "prop-types";

// redux-persist config
import { useStore } from "~/store/store";

// Auth Provider
import AuthProvider from "~/store/AuthContext";

// loader component
import PageChange from "~/components/PageChange/PageChange";

import Modal from "~/components/Modal/Modal";

// styles
import "~/assets/scss/nextjs-material-kit-pro.scss";
import "animate.css/animate.min.css";

Router.events.on("routeChangeStart", () => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(<PageChange />, document.getElementById("page-transition"));
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, () => {
    persistor.persist();
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>InterWare de México</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Modal />
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({}),
  }).isRequired,
};
