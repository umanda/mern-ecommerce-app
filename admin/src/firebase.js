// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcjNzRMpSF-y3fowpZOTJBLQtwKcR5xgM",
    authDomain: "mern-ecommerce-app-e8cdd.firebaseapp.com",
    projectId: "mern-ecommerce-app-e8cdd",
    storageBucket: "mern-ecommerce-app-e8cdd.appspot.com",
    messagingSenderId: "198598215163",
    appId: "1:198598215163:web:888c380e7731d17fa5775e",
    measurementId: "G-KYZWN3QZV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;