import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQHjvD3tDPiKnk0mYsfqK-f01eBF8MhTo",
    authDomain: "clone-f919d.firebaseapp.com",
    projectId: "clone-f919d",
    storageBucket: "clone-f919d.appspot.com",
    messagingSenderId: "257484446059",
    appId: "1:257484446059:web:d89606cdf7cc552d2f142e",
    measurementId: "G-PZM9ZBFHJW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider=new GoogleAuthProvider();
  

  export { db, auth, provider };
