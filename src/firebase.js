// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBQhgWeSLm_MI6Qdoa761mSGcw0nrTrPE",
  authDomain: "tuerto-photos.firebaseapp.com",
  projectId: "tuerto-photos",
  storageBucket: "tuerto-photos.appspot.com",
  messagingSenderId: "1034147556372",
  appId: "1:1034147556372:web:c44eee69574f789dc4cb01",
  measurementId: "G-RYH7LGWQBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)