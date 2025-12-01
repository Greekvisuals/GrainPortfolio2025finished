import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz3LuDpgbU8sWOEYLeNqRXnZsPC7sAak4",
  authDomain: "redhead-productions.firebaseapp.com",
  projectId: "redhead-productions",
  storageBucket: "redhead-productions.firebasestorage.app",
  messagingSenderId: "172049014184",
  appId: "1:172049014184:web:68a1cca02b52de9635919d",
  measurementId: "G-RTFKP55C6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// Initialize Analytics conditionally and asynchronously to avoid registration errors
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
}).catch((error) => {
  console.warn("Firebase Analytics not supported in this environment:", error);
});