// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7cbCzTQGTH9GZ8yo7Ib6-hYlaY9Oqrgo",
  authDomain: "biskket-12bc3.firebaseapp.com",
  projectId: "biskket-12bc3",
  storageBucket: "biskket-12bc3.appspot.com",
  messagingSenderId: "584075097253",
  appId: "1:584075097253:web:19e9683c82977c8e2c094c",
  measurementId: "G-SZL1ZMDKTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);