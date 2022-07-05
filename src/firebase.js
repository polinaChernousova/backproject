// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcRHWyQaKFO9HVB6g2lKnM4LoWDBH5gcs",
  authDomain: "project-store-a00f1.firebaseapp.com",
  projectId: "project-store-a00f1",
  storageBucket: "project-store-a00f1.appspot.com",
  messagingSenderId: "414363837940",
  appId: "1:414363837940:web:06426fced0c756711645a1",
  measurementId: "G-4V7XB5H0ZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
