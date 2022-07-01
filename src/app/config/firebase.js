// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export { signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIFEkjwCPU_OxBJPI5_ZfZRm4hVQimQGg",
  authDomain: "telegraph-4e053.firebaseapp.com",
  projectId: "telegraph-4e053",
  storageBucket: "telegraph-4e053.appspot.com",
  messagingSenderId: "652689254573",
  appId: "1:652689254573:web:9a4114071188f8b23efe24",
  measurementId: "G-Z9JXDWK997",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
