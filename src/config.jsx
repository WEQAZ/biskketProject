import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import necessary storage functions


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0juvhogtz_nAkDFPdtKhaEaljbxaIUCE",
  authDomain: "web-project-11340.firebaseapp.com",
  databaseURL: "https://web-project-11340-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-project-11340",
  storageBucket: "web-project-11340.appspot.com",
  messagingSenderId: "742883454635",
  appId: "1:742883454635:web:cc69d98c30885d8d0111ee",
  measurementId: "G-JXX47CYYV5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app); // Initialize the database
const storage = getStorage(app);

export { auth, provider, database , storage };
