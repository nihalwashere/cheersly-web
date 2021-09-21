import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCF93Uk-o7n8VqtYCsWkW0xt4mlaiHBVrw",
  authDomain: "cheersly-web-prod-6912f.firebaseapp.com",
  projectId: "cheersly-web-prod-6912f",
  storageBucket: "cheersly-web-prod-6912f.appspot.com",
  messagingSenderId: "882526202832",
  appId: "1:882526202832:web:12233a3bfaf028aa4fa7d5",
  measurementId: "G-PEFPVTHKSM",
};

export const initializeAnalytics = () =>
  getAnalytics(initializeApp(firebaseConfig));
