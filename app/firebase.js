// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPxYED0A5e07tTVUKFx0CxqnvS3-viNjQ",
  authDomain: "inventory-management-12d1a.firebaseapp.com",
  projectId: "inventory-management-12d1a",
  storageBucket: "inventory-management-12d1a.appspot.com",
  messagingSenderId: "999316590251",
  appId: "1:999316590251:web:47059b6b69040ee0bd71ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage =   getStorage(app)
export{firestore,storage};