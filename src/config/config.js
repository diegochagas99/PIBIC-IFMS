import firebase from "firebase";
import Rebase from "re-base";

let firebaseConfig = {
  apiKey: "AIzaSyC7KBjwVUoH9iEkNNRwtK0OEUswquygYI4",
  authDomain: "sistema-sesau.firebaseapp.com",
  databaseURL: "https://sistema-sesau.firebaseio.com",
  projectId: "sistema-sesau",
  storageBucket: "sistema-sesau.appspot.com",
  messagingSenderId: "170329839405",
  appId: "1:170329839405:web:0fae2d4780b003d21125a4"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export const auth = app.auth();

export default config;
