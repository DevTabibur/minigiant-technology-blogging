
import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAJaYmda93PFbrGZ8kZuHuSXhDUTDh-wEE",
  authDomain: "minigiant-77d45.firebaseapp.com",
  projectId: "minigiant-77d45",
  storageBucket: "minigiant-77d45.appspot.com",
  messagingSenderId: "180895500543",
  appId: "1:180895500543:web:738294dde4c540619f64ca"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;