// src/firebase/config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2nq6oCANDxKpyQtiipkN7-8MfrIWwfns",
  authDomain: "ecommerce-amth3d.firebaseapp.com",
  projectId: "ecommerce-amth3d",
  storageBucket: "ecommerce-amth3d.firebasestorage.app",
  messagingSenderId: "883297166970",
  appId: "1:883297166970:web:c3d4280dd511ee9ea7fdc3"
};

const app = initializeApp(firebaseConfig);

export default app;