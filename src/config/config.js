import firebase from "firebase";
import Rebase from "re-base";

let firebaseConfig = {
  apiKey: "AIzaSyBmpMKJQnR8VMHCT0uxplFLretYHR-FTLg",
  authDomain: "sistema-de-notificacao-sesau.firebaseapp.com",
  databaseURL: "https://sistema-de-notificacao-sesau.firebaseio.com",
  projectId: "sistema-de-notificacao-sesau",
  storageBucket: "sistema-de-notificacao-sesau.appspot.com",
  messagingSenderId: "578160170445",
  appId: "1:578160170445:web:7f6fd99d03f782fb626084"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export const auth = app.auth();
export const database = app.database();

export default config;
