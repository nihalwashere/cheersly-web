import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { initializeAnalytics } from "../utils/firebase";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      initializeAnalytics();
    }
  }, []);

  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({}),
};

export default App;
