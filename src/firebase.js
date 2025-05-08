// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6N06rG7j2lBi58gRv4uk082utgPBrBTs",
  authDomain: "leather-shoe-project.firebaseapp.com",
  projectId: "leather-shoe-project",
  storageBucket: "leather-shoe-project.firebasestorage.app",
  messagingSenderId: "3999694838",
  appId: "1:3999694838:web:9c29a8793ad999625451d7",
  measurementId: "G-DWSTBWRLLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
