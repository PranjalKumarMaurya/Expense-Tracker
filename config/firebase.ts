// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdnaiMIP6dhWkxpAPvA3Ps9CpRvGQJer0",
  authDomain: "expense-tracker-ca7db.firebaseapp.com",
  projectId: "expense-tracker-ca7db",
  storageBucket: "expense-tracker-ca7db.firebasestorage.app",
  messagingSenderId: "1085070460613",
  appId: "1:1085070460613:web:23a0292d1dfe795d1052ac",
  measurementId: "G-G35EQZ6YRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const firestore = getFirestore(app);