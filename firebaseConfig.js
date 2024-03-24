// // Import the functions you need from the SDKs you need
// //  import { initializeApp } from "firebase/app";
// //  import { getFirestore } from 'firebase/firestore';
// // import firebase from 'firebase/compat/app';
// import firebase from "firebase/compat/app";
// // Required for side-effects
// // import "firebase/firestore";
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";


import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Import doc and setDoc functions
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import Firebase Storage module
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoudVuK748o84jIfDJAQJ272lBn5m4Xqk",
    authDomain: "libyanjobss.firebaseapp.com",
    projectId: "libyanjobss",
    storageBucket: "libyanjobss.appspot.com",
    messagingSenderId: "171902023303",
    appId: "1:171902023303:web:e2a66929e5f2d44284aa22",
    measurementId: "G-C725DF9G6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage


// Initialize Firebase Authentication with AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { db, doc, setDoc, auth, storage};