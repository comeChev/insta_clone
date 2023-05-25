// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase-admin/app";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_API_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_API_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_API_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_APPID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
