import firebase from 'firebase/compat/app';  
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDQTOCZCfrOXGwzqersGb2HiVwx1liepEY",
    authDomain: "tealiveapp.firebaseapp.com",
    projectId: "tealiveapp",
    storageBucket: "tealiveapp.appspot.com",
    messagingSenderId: "890680382985",
    appId: "1:890680382985:web:61a2bb44f0c9fe31518ad8",
    measurementId: "G-WNKZMMNZ1H"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = firebase.auth();
  const db = firebase.firestore();
  console.log([db])

  if (window.location.hostname === 'localhost') {
    // auth.useEmulator('http://localhost:9099');
    // db.useEmulator('localhost', '8080');
  }

  export { db , auth };
  export default firebase;