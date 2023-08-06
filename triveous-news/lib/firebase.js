// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCmmzv-C_8rQkYKN-5edXGYksQMeZ057E",
    authDomain: "triveuos-news.firebaseapp.com",
    projectId: "triveuos-news",
    storageBucket: "triveuos-news.appspot.com",
    messagingSenderId: "252334270583",
    appId: "1:252334270583:web:a2df881401ed2e8980fe72",
    measurementId: "G-8B1VGW34WQ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();