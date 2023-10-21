// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7cbCzTQGTH9GZ8yo7Ib6-hYlaY9Oqrgo",
  authDomain: "biskket-12bc3.firebaseapp.com",
  databaseURL: "https://biskket-12bc3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "biskket-12bc3",
  storageBucket: "biskket-12bc3.appspot.com",
  messagingSenderId: "584075097253",
  appId: "1:584075097253:web:19e9683c82977c8e2c094c",
  measurementId: "G-SZL1ZMDKTP"
};

const app = initializeApp(firebaseConfig);

export default app;