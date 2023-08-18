// Proses penginisialisasian Data dari firebase kedalam codingan kita

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { appendFile } from "fs";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDtZ5GlJjbwlQfoGuRZhOpRQl8xl3vBnyc",
//   authDomain: "belajarnextjs-cdaca.firebaseapp.com",
//   projectId: "belajarnextjs-cdaca",
//   storageBucket: "belajarnextjs-cdaca.appspot.com",
//   messagingSenderId: "109245050788",
//   appId: "1:109245050788:web:b6cc07a80fb6403bfd5b31",
//   measurementId: "G-0JLS8S6QBZ"
// };

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
