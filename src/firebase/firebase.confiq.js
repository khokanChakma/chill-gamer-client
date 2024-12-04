// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfc-bBbsRtkK8OnVlNSTqOZTvphtKNHRs",
  authDomain: "chill-gamer-client.firebaseapp.com",
  projectId: "chill-gamer-client",
  storageBucket: "chill-gamer-client.firebasestorage.app",
  messagingSenderId: "1079824469648",
  appId: "1:1079824469648:web:7d5d69b1b10b8e07981215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;