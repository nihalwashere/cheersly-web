export const API_BASE_URL = "https://cheersly.herokuapp.com/api/v1"; // prod

export const SLACK_CLIENT_ID = "965550414273.1557391535763"; // prod

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDlncpmQyLLqZNjonfVZuIeU3mpiwyfDsE",
  authDomain: "cheersly-web-prod.firebaseapp.com",
  projectId: "cheersly-web-prod",
  storageBucket: "cheersly-web-prod.appspot.com",
  messagingSenderId: "882536646111",
  appId: "1:882536646111:web:8d6720b26f5edf75c1f06a",
  measurementId: "G-8X62QD3T05",
}; // prod

// export const API_BASE_URL = "https://cheersly-dev.herokuapp.com/api/v1"; // dev

// export const SLACK_CLIENT_ID = "1292560080950.1764108002000"; // dev

// export const FIREBASE_CONFIG = {
//   apiKey: "AIzaSyBiKzaIR56cVtFZOQ6JhV2O6G0ALKeQTnk",
//   authDomain: "cheersly-web-dev-5987b.firebaseapp.com",
//   projectId: "cheersly-web-dev-5987b",
//   storageBucket: "cheersly-web-dev-5987b.appspot.com",
//   messagingSenderId: "753021969013",
//   appId: "1:753021969013:web:0c375fd0793eb364cd0e3c",
//   measurementId: "G-2ZYLD4HJNK",
// }; // dev

export const SLACK_OAUTH_URL = `https://slack.com/oauth/v2/authorize?client_id=${SLACK_CLIENT_ID}&scope=app_mentions:read,chat:write,commands,im:history,team:read,users:read,incoming-webhook&user_scope=`;

// export const API_BASE_URL = "http://localhost:7000/api/v1"; // local
