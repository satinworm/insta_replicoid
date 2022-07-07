// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyClHEWY52Ir1Om4dAILbC514wUKOiNnLFM",
   authDomain: "instareplicoid.firebaseapp.com",
   projectId: "instareplicoid",
   storageBucket: "instareplicoid.appspot.com",
   messagingSenderId: "396730543892",
   appId: "1:396730543892:web:5fad2b116a8c413714dc01",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
