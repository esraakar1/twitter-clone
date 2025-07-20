// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGulsE0z57J5bwfcidsKemaqNCeVzKj6M",
  authDomain: "twitter-a42bf.firebaseapp.com",
  projectId: "twitter-a42bf",
  storageBucket: "twitter-a42bf.firebasestorage.app",
  messagingSenderId: "401417715737",
  appId: "1:401417715737:web:6b1481a9e46f4ec92a6a88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// google saglayıcısını kur
export const provider = new GoogleAuthProvider();

// storage servisinin referansını al

export const storage = getStorage(app);

// veritabanının referansını al
export const db = getFirestore(app);