import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPYVkDyDj1WmR1QVp5OGGTqgmlyDR5dXc",
  authDomain: "clone-910e5.firebaseapp.com",
  databaseURL: "https://clone-910e5.firebaseio.com",
  projectId: "clone-910e5",
  storageBucket: "clone-910e5.appspot.com",
  messagingSenderId: "28620474265",
  appId: "1:28620474265:web:3f5440a0a8db45c9fc3508",
  measurementId: "G-NR234P98BD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
