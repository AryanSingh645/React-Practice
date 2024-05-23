import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDebnv6wxQ8ljGm4IYKp1qDujo-1sedNN4",
  authDomain: "megablogproject-26834.firebaseapp.com",
  projectId: "megablogproject-26834",
  storageBucket: "megablogproject-26834.appspot.com",
  messagingSenderId: "347209506738",
  appId: "1:347209506738:web:d5d483ed03975502dd4eab",
  measurementId: "G-91WY4N89KZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);