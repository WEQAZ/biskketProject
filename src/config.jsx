import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import necessary storage functions


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7cbCzTQGTH9GZ8yo7Ib6-hYlaY9Oqrgo",
  authDomain: "biskket-12bc3.firebaseapp.com",
  databaseURL: "https://biskket-12bc3-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "biskket-12bc3",
  storageBucket: "biskket-12bc3.appspot.com",
  messagingSenderId: "584075097253",
  appId: "1:584075097253:web:19e9683c82977c8e2c094c",
  measurementId: "G-SZL1ZMDKTP"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app); // Initialize the database
const storage = getStorage(app);

export { auth, provider, database , storage };