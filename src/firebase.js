import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAgBrRgv_i9zZr85Kt5z0YqtL09pwndu98",
  authDomain: "login-6bd61.firebaseapp.com",
  projectId: "login-6bd61",
  storageBucket: "login-6bd61.appspot.com",
  messagingSenderId: "920794230809",
  appId: "1:920794230809:web:b85f70f1dba4c1054cfa88"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);