// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqEBYbdwqJG5DMwR5QG0pOXJsfHic_eZw",
  authDomain: "dragon-news-client-78e02.firebaseapp.com",
  projectId: "dragon-news-client-78e02",
  storageBucket: "dragon-news-client-78e02.appspot.com",
  messagingSenderId: "1041887481762",
  appId: "1:1041887481762:web:da5fdfe518d2fda2cd6cfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app