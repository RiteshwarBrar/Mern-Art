// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhNxb5l9fltql6mzKSGEnDv2boAj6cynU",
  authDomain: "online-store-aaf7c.firebaseapp.com",
  projectId: "online-store-aaf7c",
  storageBucket: "online-store-aaf7c.appspot.com",
  messagingSenderId: "252205099113",
  appId: "1:252205099113:web:c762c68e3565438b0edaf8",
  measurementId: "G-L38DWSQVXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);