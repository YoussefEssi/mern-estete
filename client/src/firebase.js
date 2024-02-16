// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "youssef-estate.firebaseapp.com",
  projectId: "youssef-estate",
  storageBucket: "youssef-estate.appspot.com",
  messagingSenderId: "243032323515",
  appId: "1:243032323515:web:e0e72785270021d5bc409e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);