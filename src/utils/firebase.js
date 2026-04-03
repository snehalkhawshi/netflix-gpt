// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBEGWwox0neOgq2zzDxP6BYdeN6Dde9OE",
  authDomain: "netflix-gpt-60046.firebaseapp.com",
  projectId: "netflix-gpt-60046",
  storageBucket: "netflix-gpt-60046.firebasestorage.app",
  messagingSenderId: "226343605862",
  appId: "1:226343605862:web:f42cb3ceddc35e3c2bffa7",
  measurementId: "G-G4091MPC4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// it will use to access our firebase from react project