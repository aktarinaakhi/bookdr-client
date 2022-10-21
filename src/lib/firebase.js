import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABxRizRyKp173geMPHR05l_kYkNaimjjw",
  authDomain: "bookself-b9fde.firebaseapp.com",
  projectId: "bookself-b9fde",
  storageBucket: "bookself-b9fde.appspot.com",
  messagingSenderId: "228030265010",
  appId: "1:228030265010:web:0b31c365eadb6bdb2fbbab"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
  