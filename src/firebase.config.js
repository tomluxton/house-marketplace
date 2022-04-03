import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Wp2_w9PUpwks8uCKMFnTvd6pOs5njMo",
  authDomain: "house-marketplace-app-99dd4.firebaseapp.com",
  projectId: "house-marketplace-app-99dd4",
  storageBucket: "house-marketplace-app-99dd4.appspot.com",
  messagingSenderId: "865044256574",
  appId: "1:865044256574:web:a7788e7383b36fe7887e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();