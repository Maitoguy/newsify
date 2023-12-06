// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9wFe5W1nVww0YyjOUm3NUCmgKlYyX9ug",
  authDomain: "newsify-e4fe8.firebaseapp.com",
  projectId: "newsify-e4fe8",
  storageBucket: "newsify-e4fe8.appspot.com",
  messagingSenderId: "356263267887",
  appId: "1:356263267887:web:b4ac57bbd241d30ccf80da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);