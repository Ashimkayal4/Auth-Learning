// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6GIyaIOOpYw5VhP7E4RVEeKnul-S7UhQ",
    authDomain: "auth-moha-milon-c18de.firebaseapp.com",
    projectId: "auth-moha-milon-c18de",
    storageBucket: "auth-moha-milon-c18de.firebasestorage.app",
    messagingSenderId: "791101327203",
    appId: "1:791101327203:web:f647e7865a2f32a3407556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;