// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf40GFLR8vKglVEdbjPNXatPb_4QqmTSU",
  authDomain: "celestial-b4bee.firebaseapp.com",
  projectId: "celestial-b4bee",
  storageBucket: "celestial-b4bee.firebasestorage.app",
  messagingSenderId: "186411568697",
  appId: "1:186411568697:web:32c246d072dac5500647e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);