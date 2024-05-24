// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGduuMXbkFJ0WGVpRyCMGx9r-zgdu9AQw",
  authDomain: "hero-residential.firebaseapp.com",
  projectId: "hero-residential",
  storageBucket: "hero-residential.appspot.com",
  messagingSenderId: "275182002224",
  appId: "1:275182002224:web:2bc02f2b2a9a8764460df5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;