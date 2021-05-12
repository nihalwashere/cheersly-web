import React from "react";
import firebase from "firebase/app";
import "firebase/analytics";
import RootContainer from "./containers/root";
import { FIREBASE_CONFIG } from "./utils/config";

const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
    firebase.analytics();
  }

  return (
    <div>
      <RootContainer />
    </div>
  );
};

export default App;
