
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeL88_k7-ytdLqGdOOajW00pSWaKXrz08",
  authDomain: "blog-mencintai.firebaseapp.com",
  projectId: "blog-mencintai",
  storageBucket: "blog-mencintai.firebasestorage.app",
  messagingSenderId: "185116286057",
  appId: "1:185116286057:web:fa45f5246ab42dd87f96f8",
  measurementId: "G-C7BZLEKQN8"
};

 const app = initializeApp(firebaseConfig);

 export default app