
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeDitF4IuucwqECKpl9mh3ycUt1xm-IzQ",
  authDomain: "mini-giant.firebaseapp.com",
  projectId: "mini-giant",
  storageBucket: "mini-giant.appspot.com",
  messagingSenderId: "1085942493587",
  appId: "1:1085942493587:web:aa3801617ba07243673866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;